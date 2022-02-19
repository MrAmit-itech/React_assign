const express = require ("express")
const mongoose = require("mongoose")
const Connect = require("./server/server")

const app = express()
const port = 2001
// app.use(express.json)

const userSchema = new mongoose.Schema({
    first_name:{type:String , required:true},
    email:{type:String , required:true},
    gender:{type:String , required:true},
    classes:{type:Number , required:true}
})

const teacher_data = mongoose.model("teacher_data",userSchema)

app.get("/homepage",(req,res)=>{  
    res.send("hi from backend homepage")
})

app.get("/Teacherdata",async(req,res)=>{
    const respo = await teacher_data.find().lean().exec()
    res.json(respo)
})

app.get("/sortbyageDec",async(req,res)=>{
    const respo = await teacher_data.find().sort( { age: -1 } )
    res.json(respo)
})
app.get("/sortbyageInc",async(req,res)=>{
    const respo = await teacher_data.find().sort( { age: 1 } )
    res.json(respo)
})
app.get("/filtermale",async(req,res)=>{
    const respo = await teacher_data.aggregate([ { $match : { gender : "Male" } } ])
    res.json(respo)
})
app.get("/filterfemale",async(req,res)=>{
    const respo = await teacher_data.aggregate([ { $match : { gender : "Female" } } ])
    res.json(respo)
})
app.listen(port,async()=>{
    await Connect()
    console.log(`listening on port ${port}`)
})

