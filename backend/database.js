const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email : String,
  password : String,
  role : String
})

const employeeSchema = new mongoose.Schema({
  EmpID : Number,
  EmpName : String,
  EmpContact : Number,
  EmpEmail : String,
  DateOfJoin : Date,
  EmpAddress : String,
  WorkingShift : String,
  JobTitle : String,
  Salary : Number,
  DOB : Date,
  EmpCity : String
})

const vendingSchema = new mongoose.Schema({
  VmID : Number, 
  Location: String,
  LastCheckOn : Date,
  LastFilled: [Date,String],
  Model: String,
  DateOfInstallation: Date,
})

const transactionSchema = new mongoose.Schema({
  VmID : Number,
  TransactionType: String,
  Amount: Number,
  TransactionID: String,
  Timestamp:  [Date,String]
})

const edibleItemsSchema = new mongoose.Schema({
  PurchaseID: Number,
  ItemID : Number,
  MRP: Number,
  Quantity: Number,
  ItemName: String,
  PurchaseDate: Date,
  ExpiryDate : Date
})

const electronicItemsSchema = new mongoose.Schema({
  PurchaseID: Number,
  ItemID : Number,
  Price: Number,
  PurchaseDate: Date,
  UsedFor: String,
  Warranty: String,
  Model: String
})

const vendorsSchema = new mongoose.Schema({
  VendorID: Number,
  VendorName: Number,
  VendorContact: Number,
  VendorAddress: String,
  TypeOfItem: String
})

const User = mongoose.model('users',userSchema,'users');
const Employee = mongoose.model('employee',employeeSchema,'employee');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect('mongodb+srv://Asharma538:12345677@dbms.j4xdmkc.mongodb.net/vending?retryWrites=true&w=majority')
      .then(() => {
        console.log('Database Connected!!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

console.log("Database file running");
module.exports = {db: new Database(), User, Employee};