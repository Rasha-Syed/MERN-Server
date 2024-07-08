//mongo db user schema which is capable of storing data in my mongodb
const mongoose = require('mongoose')

const userSchema = mongoose.Schema( {
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})


module.exports=mongoose.model('User',userSchema);
