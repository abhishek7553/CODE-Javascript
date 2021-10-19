const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema( {
    description: {
        type: String,
        trim:true,
        required:true
    },
    completed: {
        type: Boolean,
        default:false
    }
})

taskSchema.pre('save',function (next){
    next()
})

const Task = mongoose.model('Task',taskSchema)

module.exports=Task