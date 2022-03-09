const mongoose = require('mongoose')

const Connect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://rambo:rambo@cluster0.4enz3.mongodb.net/test")
        console.log("db connected")
    }catch(e){
        console.log("db is not connect check your internet or check code")
    }
}
module.exports = Connect