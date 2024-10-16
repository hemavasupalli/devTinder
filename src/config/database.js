const mongoose = require('mongoose');
const connectDB = async ()=>{
   await mongoose.connect('mongodb+srv://hemavasupalli12:hemavasupalli12@cluster0.yjuwcvt.mongodb.net/devTinder')
}

module.exports = connectDB;