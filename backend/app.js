const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});  

app.listen(PORT,()=>{
    console.log("Server is listening on PORT:",PORT);
})

app.get('',(request,response) => {
    info = {
        'Anadi':'Sharma',
        'Age':20
    }
    console.log(info);
    response.send(info);
})

app.post('/send',(request,response)=>{
    console.log(request.body);
    response.send({'Success':200});
})