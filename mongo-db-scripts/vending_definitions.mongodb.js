/* Don't run this! was just used once for defining attributes. */

/*

const database = 'vending'; 
use(database);

db.vending_machine.insertOne({
  "VmID" : "int" , 
  "Location": "string",
  "LastCheckOn" : "YYYY-MM-DD",
  "LastFilled": ["YYYY-MM-DD", "HH:MM:SS"],
  "Model": "string",
  "DateOfInstallation": "YYYY-MM-DD",
})

db.transaction.insertOne({
  "VmID" : "int" ,
  "TransactionType": "string",
  "Amount":"int",
  "TransactionID":"string",
  "Timestamp":  ["YYYY-MM-DD", "HH:MM:SS"]
})

db.employee.insertOne({
  "EmpID": "int",
  "EmpName":"string",
  "EmpContact":"int",
  "DateOfJoin":"yyyy-mm-dd",
  "EmpAddress":"string",
  "WorkingShift":"string",
  "JobTitle":"string",
  "Salary":"int",
  "DOB":"yyyy-mm-dd",
  "EmpCity":"string"
})

db.edible_items.insertOne({
  "PurchaseID": "int",
  "ItemID" : "int",
  "MRP": "int",
  "Quantity": "int",
  "ItemName": "string",
  "PurchaseDate": "yyyy-dd-mm",
  "ExpiryDate" : "yyyy-dd-mm"
})

db.electronic_items.insertOne({
  "PurchaseID": "int",
  "ItemID" : "int",
  "Price": "int",
  "PurchaseDate": "yyyy-dd-mm",
  "UsedFor":"string",
  "Warranty":"string",
  "Model":"string"
})

db.vendors.insertOne({
  "VendorID": "int",
  "VendorName":"string",
  "VendorContact":"int",
  "VendorAddress":"string",
  "TypeOfItem":"string"
})

db.makes.insertOne({
  "VmID": "int",
  "TransactionID":"int"
})

db.manages.insertOne({
  "EmpID": "int",
  "TransactionID":"int"
})

db.fills.insertOne({
  "EmpID": "int",
  "VmID":"int"
})

db.maintains.insertOne({
  "VmID": "int",
  "TechnicianID" : "int"
})

db.supplies.insertOne({
  "TransactionID" : "string",
  "PurchaseID" : "int",
  "VendorID" : "int" , 
  "Amount" : "int"
})

db.contacts.insertOne({
  "StoreMaagerID" : "int" , 
  "VendorID" : "int"
})


*/