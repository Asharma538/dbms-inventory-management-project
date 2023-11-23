const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const { db, User,Employee,Complaint , VendingMachine} = require('./database.js');
const { crypt } = require('./crypter.js');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.listen(PORT,()=>{
    console.log("Server is listening on PORT:",PORT);
})

app.post('/login',(request,response)=>{

    const email = request.body.email;
    const password = request.body.password;

    User.find({email : email})
        .then(list_emp => {
            if (list_emp.length==0){
                response.json({Message:"Failed, Try Signing in first"});
            }
            else if (list_emp[0].password == crypt(password)){
                response.json({Message:"Success",JobTitle:list_emp[0].role});
            }
            else{
                response.send({Message:"Failed"});
            }
        })
        .catch(err => {
            response.status(400).send({Message:err});
        });
    return;
})

app.post('/signin',(request,response)=>{
    console.log(request.body);
    const email = request.body.email;
    const password = request.body.password;
    
    Employee.find({EmpEmail: email})
    .then(list_emp => {
        if (list_emp.length!=0){
            User.find({email:email})
            .then(list_users => {
                    if (list_users.length==0){
                        User.insertMany([
                            {
                                email: email,
                                password:crypt(password),
                                role:list_emp[0].JobTitle
                            }
                        ]);
                        response.send({Message:"Success"});
                    }
                    else{
                        response.send({Message:"User already exists, please Login"});
                    }
                })
            }
            else{
                response.send({Message:"Failed, No employee with that email exists"});
            }
        })
        .catch(err => {
            response.status(400).send({Message:err});
        });
})

app.get('/call_center',(request,response)=>{
    
    Complaint.aggregate([{
        $lookup : {
            from : "vending_machine",
            localField : "VmID",
            foreignField : "VmID",
            as : "vending_machine",
            pipeline:[
                {
                    $project: {
                      Location: 1,
                      _id: 0
                    }
                }
            ]
        }
    },{
        $addFields: {
            Location:{
                $reduce: {
                    input: "$vending_machine.Location",
                    initialValue: "",
                    in: "$$this"
                  }
            }
        }
    },{
        $project: {
            vending_machine: 0
        }
    }]).exec()
        .then(merged_data=>{
            response.send({"Complaints":merged_data});
        })
        .catch(err=>console.log(err))

})

app.get('/technician' , (request , response) =>{
    VendingMachine.find({})
        .then(vending_details => {
            response.send({Details : vending_details});
        })
        .catch(err => {
            response.send({Message : err})
        })
})