const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email : String,
  password : String,
  role : String
},{ versionKey: false })

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
},{ versionKey: false })

const vendingSchema = new mongoose.Schema({
  VmID : Number, 
  Location: String,
  LastCheckOn : Date,
  LastFilled: [Date,String],
  Model: String,
  DateOfInstallation: Date,
},{ versionKey: false })

const transactionSchema = new mongoose.Schema({
  VmID : Number,
  TransactionType: String,
  Amount: Number,
  TransactionID: String,
  Timestamp:  [Date,String]
},{ versionKey: false })

const edibleItemsSchema = new mongoose.Schema({
  PurchaseID: Number,
  ItemID : Number,
  MRP: Number,
  Quantity: Number,
  ItemName: String,
  PurchaseDate: Date,
  ExpiryDate : Date
},{ versionKey: false })

const electronicItemsSchema = new mongoose.Schema({
  PurchaseID: Number,
  ItemID : Number,
  Price: Number,
  PurchaseDate: Date,
  UsedFor: String,
  Warranty: String,
  Model: String
},{ versionKey: false })

const vendorsSchema = new mongoose.Schema({
  VendorID: Number,
  VendorName: Number,
  VendorContact: Number,
  VendorAddress: String,
  TypeOfItem: String
},{ versionKey: false })

const makesSchema = new mongoose.Schema({
  VmID: Number,
  TransactionID:String
},{ versionKey: false })

const managesSchema = new mongoose.Schema({
  EmpID : Number,
  TransactionID : String
},{ versionKey: false })

const fillsSchema = new mongoose.Schema({
  EmpID : Number,
  VmID : Number
},{ versionKey: false })

const maintainsSchema = new mongoose.Schema({
  VmID : Number,
  TechnicianID : Number
},{ versionKey: false })

const suppliesSchema = new mongoose.Schema({
  TransactionID : String,
  PurchaseID : Number,
  VendorID : Number,
  Amount : Number
},{ versionKey: false })

const contactsSchema = new mongoose.Schema({
  StorageManagerID : Number,
  VendorID : Number
},{ versionKey: false })

const complaintSchema = new mongoose.Schema({
  VmID : Number,
  TransactionID : String,
  ComplaintType : String,
  Timestamp : Date
},{ versionKey: false })

const User = mongoose.model('users',userSchema,'users');
const Employee = mongoose.model('employee',employeeSchema,'employee');
const VendingMachine = mongoose.model('vending_machine',vendingSchema,'vending_machine');
const Transaction = mongoose.model('transaction',transactionSchema,'transaction');
const EdibleItems = mongoose.model('edible_items',edibleItemsSchema,'edible_items');
const ElectronicItems = mongoose.model('electronic_items',electronicItemsSchema,'electronic_items');
const Vendors = mongoose.model('vendors',vendorsSchema,'vendors');
const Makes = mongoose.model('makes',makesSchema,'makes');
const Manages = mongoose.model('manages',managesSchema,'manages');
const Fills = mongoose.model('fills',fillsSchema,'fills');
const Maintains = mongoose.model('maintains',maintainsSchema,'maintains');
const Supplies = mongoose.model('supplies',suppliesSchema,'supplies');
const Contacts = mongoose.model('contacts',contactsSchema,'contacts');
const Complaint = mongoose.model('complaint',complaintSchema,'complaint');



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

module.exports = {
  db: new Database(), 
  User, 
  Employee, 
  VendingMachine, 
  Transaction, 
  EdibleItems,
  ElectronicItems, 
  Vendors, 
  Makes,
  Manages,
  Fills,
  Maintains,
  Supplies,
  Contacts,
  Complaint
};