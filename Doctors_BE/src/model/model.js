const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const doc_schema = mongoose.Schema({
    first_name:{type:String , required:true},
    last_name:{type:String , required:true},
    gender:{type:String , required:false, default:"male"},
    clinic_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"clinic",
        required:false
    },
    speciality_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"speciality",
        required:false
    },
    avail_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"avail",
        required:false
    },
    cost_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cost",
        required:false
    }

})

const doc_model = mongoose.model('doc',doc_schema)

//clicnic schema
const clinic_schema = mongoose.Schema({
    clinic_no:{type:Number , required:false },
    clinic_address:{type:String , required:false},
})

const clinic_model = mongoose.model("clinic",clinic_schema)

//speciality schema
const speciality_schema = mongoose.Schema({
    speciality:{type:String , required:false },
    experience:{type:Number , required:false ,default:"10+years"}
})

const speciality_model = mongoose.model("speciality",speciality_schema)

//availabity schema
const avail_schema = mongoose.Schema({
    avail_time:{type:Number , required:false},
})

const avail_model = mongoose.model('avail',avail_schema)

module.exports = {
    doc_model,
    avail_model,
    speciality_model,
    clinic_model
}