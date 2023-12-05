/* Don't run this! was just used once for defining attributes. */
const database = 'vending'; 
use(database);

// db.edible_items.insertMany([
//   {
//   "PurchaseID": 1,
//   "ItemID" :  10,
//   "MRP": 50,
//   "Quantity": 2,
//   "ItemName": "Tultule",
//   "PurchaseDate": new Date('2023-01-01'),
//   "ExpiryDate" : new Date('2023-12-31')
//   },
//   {
//   "PurchaseID": 2,
//   "ItemID" :  10,
//   "MRP": 50,
//   "Quantity": 2,
//   "ItemName": "Tihps",
//   "PurchaseDate": new Date('2023-01-01'),
//   "ExpiryDate" : new Date('2023-12-31')
//   },
//   {
//   "PurchaseID": 3,
//   "ItemID" :  10,
//   "MRP": 50,
//   "Quantity": 2,
//   "ItemName": "Oleo",
//   "PurchaseDate": new Date('2023-01-01'),
//   "ExpiryDate" : new Date('2023-12-31')
//   }
// ])

// db.electronic_items.insertMany([
//   {
//   "PurchaseID": 4,
//   "ItemID" : 20,
//   "Price": 500,
//   "PurchaseDate": new Date('2023-01-01'),
//   "UsedFor":"Nothing1",
//   "Warranty":"6 months",
//   "Model":"XV6"
//   },
//   {
//   "PurchaseID": 5,
//   "ItemID" : 20,
//   "Price": 500,
//   "PurchaseDate": new Date('2023-01-01'),
//   "UsedFor":"Nothing2",
//   "Warranty":"6 months",
//   "Model":"XV6"
//   },
//   {
//   "PurchaseID": 6,
//   "ItemID" : 20,
//   "Price": 500,
//   "PurchaseDate": new Date('2023-01-01'),
//   "UsedFor":"Nothing3",
//   "Warranty":"6 months",
//   "Model":"XV6"
//   }
// ])

// db.vendors.insertMany([
//   {
//   "VendorID": 1,
//   "VendorName":"Bhandari Vendors",
//   "VendorContact":23987465897,
//   "VendorAddress":"Bhand Nagar Bhandgram",
//   "TypeOfItem":"Edibles"
//   },
//   {
//   "VendorID": 2,
//   "VendorName":"Bhattu Vendors",
//   "VendorContact":23927465897,
//   "VendorAddress":"Bhattu Nagar Bhattgram",
//   "TypeOfItem":"Edibles"
//   },
// ])


// db.vending_machine.insertMany([
//   {
//     "VmID": 1,
//     "Location": "IIT Jodhpur mess",
//     "LastCheckOn": new Date("2023-10-11"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-A",
//     "DateOfInstallation": new Date("2023-01-15"),
//   },
//   {
//     "VmID": 2,
//     "Location": "Corporate Office",
//     "LastCheckOn": new Date("2023-09-20"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-B",
//     "DateOfInstallation": new Date("2022-11-05"),
//   },
//   {
//     "VmID": 3,
//     "Location": "University Library",
//     "LastCheckOn": new Date("2023-11-05"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-C",
//     "DateOfInstallation": new Date("2023-03-10"),
//   },
//   {
//     "VmID": 4,
//     "Location": "Tech Park Cafeteria",
//     "LastCheckOn": new Date("2023-08-15"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-D",
//     "DateOfInstallation": new Date("2023-05-22"),
//   },
//   {
//     "VmID": 5,
//     "Location": "Hospital Waiting Area",
//     "LastCheckOn": new Date("2023-10-02"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-E",
//     "DateOfInstallation": new Date("2023-02-28"),
//   },
//   {
//     "VmID": 6,
//     "Location": "Shopping Mall Food Court",
//     "LastCheckOn": new Date("2023-11-20"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-F",
//     "DateOfInstallation": new Date("2023-06-18"),
//   },
//   {
//     "VmID": 7,
//     "Location": "City Park Recreation Center",
//     "LastCheckOn": new Date("2023-09-10"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-G",
//     "DateOfInstallation": new Date("2023-04-12"),
//   },
//   {
//     "VmID": 8,
//     "Location": "Airport Departure Lounge",
//     "LastCheckOn": new Date("2023-11-28"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-H",
//     "DateOfInstallation": new Date("2023-08-05"),
//   },
//   {
//     "VmID": 9,
//     "Location": "High School Cafeteria",
//     "LastCheckOn": new Date("2023-10-05"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-I",
//     "DateOfInstallation": new Date("2023-01-10"),
//   },
//   {
//     "VmID": 10,
//     "Location": "Tech Company Break Room",
//     "LastCheckOn": new Date("2023-11-15"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-J",
//     "DateOfInstallation": new Date("2023-07-20"),
//   },
//   {
//     "VmID": 11,
//     "Location": "Community Center Lobby",
//     "LastCheckOn": new Date("2023-09-25"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-K",
//     "DateOfInstallation": new Date("2023-03-22"),
//   },
//   {
//     "VmID": 12,
//     "Location": "College Dormitory Lounge",
//     "LastCheckOn": new Date("2023-11-02"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-L",
//     "DateOfInstallation": new Date("2023-09-08"),
//   },
//   {
//     "VmID": 13,
//     "Location": "City Square Plaza",
//     "LastCheckOn": new Date("2023-08-12"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-M",
//     "DateOfInstallation": new Date("2023-04-30"),
//   },
//   {
//     "VmID": 14,
//     "Location": "Research Institute Cafeteria",
//     "LastCheckOn": new Date("2023-10-18"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-N",
//     "DateOfInstallation": new Date("2023-02-15"),
//   },
//   {
//     "VmID": 15,
//     "Location": "City Beach Boardwalk",
//     "LastCheckOn": new Date("2023-09-08"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-O",
//     "DateOfInstallation": new Date("2023-06-10"),
//   },
//   {
//     "VmID": 16,
//     "Location": "Fitness Center Reception",
//     "LastCheckOn": new Date("2023-11-10"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-P",
//     "DateOfInstallation": new Date("2023-03-25"),
//   },
//   {
//     "VmID": 17,
//     "Location": "City Theater Lobby",
//     "LastCheckOn": new Date("2023-08-28"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-Q",
//     "DateOfInstallation": new Date("2023-01-05"),
//   },
//   {
//     "VmID": 18,
//     "Location": "Community College Break Area",
//     "LastCheckOn": new Date("2023-10-15"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-R",
//     "DateOfInstallation": new Date("2023-07-02"),
//   },
//   {
//     "VmID": 19,
//     "Location": "Shopping Center Atrium",
//     "LastCheckOn": new Date("2023-11-22"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-S",
//     "DateOfInstallation": new Date("2023-04-18"),
//   },
//   {
//     "VmID": 20,
//     "Location": "Tech Hub Lounge",
//     "LastCheckOn": new Date("2023-10-08"),
//     "LastFilled": [new Date("2023-12-02"),"12:00:00"],
//     "Model": "Model-T",
//     "DateOfInstallation": new Date("2023-02-28"),
//   }
// ])


// db.complaint.insertOne({
//   "TransactionID":"abc123",
//   "ComplaintType":"Item Didn't fell",
//   "VmID":2,
//   "Timestamp":new Date()
// })

// db.employee.insertMany([
//   {
//   "EmpID": 1,
//   "EmpName": "John Doe",
//   "EmpContact": 1234567890,
//   "EmpEmail": "cc@tv.com",
//   "DateOfJoin": new Date("2023-01-15"),
//   "EmpAddress": "123 Main St",
//   "WorkingShift": "Morning",
//   "JobTitle": "CallCenterEmp",
//   "Salary": 50000,
//   "DOB": new Date("1990-05-20"),
//   "EmpCity": "New York"
//   },
//   {
//   "EmpID": 2,
//   "EmpName": "Alice Smith",
//   "EmpContact": 9876543210,
//   "EmpEmail": "sm@tv.com",
//   "DateOfJoin": new Date("2023-02-20"),
//   "EmpAddress": "456 Oak St",
//   "WorkingShift": "Evening",
//   "JobTitle": "StoreManager",
//   "Salary": 70000,
//   "DOB": new Date("1985-08-12"),
//   "EmpCity": "Los Angeles"
//   },
//   {
//   "EmpID": 3,
//   "EmpName": "Bob Johnson",
//   "EmpContact": 5555555555,
//   "EmpEmail": "am@tv.com",
//   "DateOfJoin": new Date("2023-03-25"),
//   "EmpAddress": "789 Pine St",
//   "WorkingShift": "Night",
//   "JobTitle": "AccountManager",
//   "Salary": 80000,
//   "DOB": new Date("1982-11-28"),
//   "EmpCity": "Chicago"
//   },
//   {
//   "EmpID": 4,
//   "EmpName": "Eva Davis",
//   "EmpContact": 7777777777,
//   "EmpEmail": "ad@tv.com",
//   "DateOfJoin": new Date("2023-04-10"),
//   "EmpAddress": "101 Cedar St",
//   "WorkingShift": "Morning",
//   "JobTitle": "Admin",
//   "Salary": 90000,
//   "DOB": new Date("1978-04-15"),
//   "EmpCity": "Houston"
//   },
//   {
//   "EmpID": 5,
//   "EmpName": "Charlie Brown",
//   "EmpContact": 4444444444,
//   "EmpEmail": "tc@tv.com",
//   "DateOfJoin": new Date("2023-05-15"),
//   "EmpAddress": "202 Maple St",
//   "WorkingShift": "Evening",
//   "JobTitle": "Technician",
//   "Salary": 60000,
//   "DOB": new Date("1993-07-08"),
//   "EmpCity": "San Francisco"
//   },
//   {
//   "EmpID": 6,
//   "EmpName": "Olivia Taylor",
//   "EmpContact": 6666666666,
//   "EmpEmail": "op@tv.com",
//   "DateOfJoin": new Date("2023-06-20"),
//   "EmpAddress": "303 Elm St",
//   "WorkingShift": "Night",
//   "JobTitle": "Operator",
//   "Salary": 55000,
//   "DOB": new Date("1995-02-22"),
//   "EmpCity": "Seattle"
//   }
// ])

// db.employee.insertOne({
//   "EmpID": "int",
//   "EmpName":"string",
//   "EmpContact":"int",
//   "EmpEmail" : "string",
//   "DateOfJoin":"yyyy-mm-dd",
//   "EmpAddress":"string",
//   "WorkingShift":"string",
//   "JobTitle":"string",
//   "Salary":"int",
//   "DOB":"yyyy-mm-dd",
//   "EmpCity":"string"
// })

/*


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