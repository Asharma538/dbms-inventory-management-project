// const database = 'vending';
// use(database);

// // function getTables() {
// //     const tables = db.getCollectionNames();
// //     for (var i=0;i<tables.length;i++){
// //         console.log(tables[i]);
// //     }
// // }

// // getTables();

// const EmpID = "int"
// const query = {EmpID : {$exists : true}};
// const emp = db.employee.find(query) .toArray((err,docs)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         docs.forEach(elem => {  
//             console.log(elem.EmpID);
//         });
//     }
// });
const database = 'vending';
use(database);

const query = { EmpID: 1 };

const emp = db.employee.find(query).toArray()[0];
console.log(emp.EmpName);