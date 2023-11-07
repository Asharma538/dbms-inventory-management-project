const database = 'vending';
use(database);

db.vending_machine.insertOne(
    {
        "VmID" : "int" , 
        "Location": "string",
        "LastCheckOn" : "YYYY-MM-DD",
        "LastFilled": ["YYYY-MM-DD", "HH:MM:SS"],
        "Model": "string",
        "DateOfInstallation": "YYYY-MM-DD",
    }
)

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

db.runCommand({
    collMod : "vending_machine",
    validator : {
        $jsonSchema:{
            bsonType : "object",
            description: "document describing a vending machine properties",
            required : ["VmID"],
            properties : {
                VmID : {
                    bsonType : "int",
                    description : "VmID should be an int"
                },
                Location : {
                    bsonType : "string",
                    description : "Location should be an string"
                },
                LastCheckedOn : {
                    bsonType : "date",
                    description : " LastCheckedOn should be a date"
                },
                LastFilled : {
                    bsonType : "array",
                    items: [
                        {
                            bsonType : "date",
                            description : "LastFilled date should be a date"
                        },
                        {
                            bsonType : "string",
                            description : "LastFilled time should be time"
                        }
                    ] ,  
                    description : "LastFilled should be an array"
                },
                Model : {
                    bsonType : "string",
                    description : "Model should be a string"
                },
                DateOfInstallation : {
                    bsonType : "date",
                    description : "DateOfInstallation should be a date"
                }
            }
        }
    }
})

db.runCommand({
    collMod: "transaction",
    validator : {
        $jsonSchema:{
            bsonType : "object",
            description : "validator for table of transaction",
            required : ["TransactionID"],
            properties : {
                VmID : {
                    bsonType : "int",
                    description : "VmID should be an int"
                },
                TransactionType : {
                    bsonType : "string",
                    description : "TransactionType should be a string"
                },
                Amount : {
                    bsonType : "int",
                    description : "Amount should be an int"
                },
               TransactionID : {
                   bsonType : "string",
                   description : "TransactionID should be a string"
               },
                Timestamp : {
                    bsonType : "date",
                    description : "Timestamp should be a timestamp"
                }
            }
        }
    }
})

db.runCommand({
    collMod : "vendors",
    validator : {
        $jsonSchema:{
            bsonType : "object",
            description: "document describing vendor details",
            required : ["VendorID"],
            properties : {
                VendorID : {
                    bsonType : "int",
                    description : "VendorID should be an int"
                },
                VendorAddress : {
                    bsonType : "string",
                    description : "VendorAddress should be a string"
                },
                VendorName : {
                    bsonType : "string",
                    description : "Vendor should be a string"
                },
                VendorContact : {
                    bsonType : "int",
                    description : "Vendor should be an int"
                },
                TypeOfItem : {
                    bsonType : "string",
                    description : "TypeOfItem should be a string"
                }
            }
        }
    }

})

db.runCommand({
    collMod : "supplies",
    validator : {
        $jsonSchema:{
            bsonType : "object",
            description: "document describing a vending machine properties",
            properties : {
                VendorID : {
                    bsonType : "int",
                    description : "VendorID should be an int"
                },
                PurchaseID : {
                    bsonType : "int",
                    description : "PurchaseID should be an int"
                },
                TransactionID : {
                    bsonType : "string",
                    description : "TransactionID should be a string"
                },
                Amount : {
                    bsonType : "int",
                    description : "Amount should be an int"
                }
            }
        }
    }
})

db.runCommand({
    collMod: "manages",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            description : "validator for manages table",
            properties : {
                AccountManagerID : {
                    bsonType : "int",
                    description : "AccountManagerID should be a string"
                },
                TransactionID : {
                    bsonType : "string",
                    description : "TransactionID should be a string"
                },
            }
        }
    }
})

db.runCommand({
    collMod: "makes",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            description : "validator for makes table",
            properties : {
                VmID : {
                    bsonType : "int",
                    description : "VmID should be an int"
                },
                TransactionID : {
                    bsonType : "string",
                    description : "TransactionID should be a string"
                },
            }
        }
    }
})

db.runCommand({
    collMod: "maintains",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            description : "validator for maintains table",
            properties : {
                VmID : {
                    bsonType : "int",
                    description : "VmID should be an int"
                },
                TechnicianID : {
                    bsonType : "int",
                    description : "TechnicianID should be an int"
                },
            }
        }
    }
})

db.runCommand({
    collMod: "fills",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            description : "validator for fills table",
            properties : {
                VmID : {
                    bsonType : "int",
                    description : "VmID should be an int"
                },
                OperatorID : {
                    bsonType : "int",
                    description : "OperatorID should be an int"
                },
            }
        }
    }
})


db.runCommand({
    collMod: "employee",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["EmpID"],
            description : "validator for Employee table",
            properties : {
                EmpID : {
                    bsonType : "int",
                    description : "EmpID should be an int"
                },
                EmpContact : {
                    bsonType : "int",
                    description : "EmpContact should be an int"
                },
                EmpAddress : {
                    bsonType : "string",
                    description : "EmpAddress should be a string"
                },
                EmpName:{
                    bsonType : "string",
                    description : "EmpName should be a string"
                },
                DateOfJoin:{
                    bsonType : "date",
                    description : "DateOfJoin should be a date"
                },
                DOB:{
                    bsonType : "date",
                    description : "DOB should be a date"
                },
                WorkingShift:{
                    bsonType : "string",
                    description : "WorkingShift should be a string"
                },
                JobTitle:{
                    bsonType : "string",
                    description : "JobTitle should be a string"
                },
                Salary:{
                    bsonType : "int",
                    description : "Salary should be a int"
                },
                EmpCity:{
                    bsonType : "string",
                    description : "EmpCity should be a string"
                }
            }
        }
    }
})

db.runCommand({
    collMod: "electronic_items",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["PurchaseID"],
            description : "validator for Employee table",
            properties : {
                PurchaseID : {
                    bsonType : "int",
                    description : "PurchaseID should be an int"
                },
                ItemID : {
                    bsonType : "int",
                    description : "ItemID should be an int"
                },
                Price : {
                    bsonType : "int",
                    description : "Price should be an int"
                },
                PurchaseDate:{
                    bsonType : "date",
                    description : "PurchaseDate should be a date"
                },
                UserFor:{
                    bsonType : "string",
                    description : "UsedFor should be a date"
                },
                Warranty:{
                    bsonType : "string",
                    description : "Warranty should be a string"
                },
                Model:{
                    bsonType : "string",
                    description : "Model should be a string"
                }
            }
        }
    }
})

db.runCommand({
    collMod: "edible_items",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["PurchaseID"],
            description : "validator for Employee table",
            properties : {
                PurchaseID : {
                    bsonType : "int",
                    description : "PurchaseID should be an int"
                },
                ItemID : {
                    bsonType : "int",
                    description : "ItemID should be an int"
                },
                MRP : {
                    bsonType : "int",
                    description : "MRP should be an int"
                },
                Quantity : {
                    bsonType : "int",
                    description : "Quantity should be an int"
                },
                PurchaseDate:{
                    bsonType : "date",
                    description : "PurchaseDate should be a date"
                },
                ItemName:{
                    bsonType : "string",
                    description : "ItemName should be a date"
                },
                ExpiryDate:{
                    bsonType : "date",
                    description : "ExpiryDate should be a date"
                }
            }
        }
    }
})


db.runCommand({
    collMod : "contacts",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            description : "validator for Employee table",
            properties : {
                StoreManagerID : {
                    bsonType : "int",
                    description : "StoreManagerID should be an int"
                },
                VendorID : {
                    bsonType : "int",
                    description : "VendorID should be an int"
                }
            }
        }
    }
})