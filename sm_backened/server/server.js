const mongoose = require('mongoose')

const Connect = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/teacher")
    console.log("db connected")
}
module.exports = Connect