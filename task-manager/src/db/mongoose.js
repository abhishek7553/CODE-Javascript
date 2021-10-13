const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Invalid password : cannot contain "password"!')
            }
        }
    }
})

// const me = new User({
//     name: '   Zack  ',
//     email: 'MYEMAIL@lOg.iO   ',
//     age:42,
//     password:"asdrfvh"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
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

const task = new Task({
    description: 'Learn the Mongoose library',
  
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})