const Connect = require('./config/config')
const express = require('express')
const {doc_model,avail_model,clinic_model,speciality_model} = require("./model/model")
const app = express()




app.get('/',(req,res)=>{
    res.send('hello this is the first page')
})

app.get('/doc',async(req,res)=>{
    var respo = await doc_model.find().populate().lean().exec()
    console.log(respo)
    res.send(respo)
})













app.listen(2001,async()=>{
    await Connect()
    console.log('listening on port 2001')
})