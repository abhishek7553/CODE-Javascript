const express = require('express')
const User = require('../modals/users')
const auth =require('../middleware/auth')

const router = new express.Router

router.post('/users',async (req,res)=>{
    
    const user = new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})


router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user,token })
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/users/me',auth ,async (req,res)=>{
    res.send(req.user)
})

router.get('/users/:id',async (req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user)
        {
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})

router.patch('/users/:id',async(req,res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdate = ['name','email','password','age']
    const isValid = updates.every((u) => allowedUpdate.includes(u)  )

    if(!isValid){
        return res.status(400).send({error :' Invalid updates! ' })
    }

    try{

        const user = await User.findById(req.params.id)

        updates.forEach((u)=>{
            user[u] = req.body[u]
        })
        await user.save()

        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send()
    }
})

router.delete('/users/:id',async (req,res)=>{

    try{
        const d = await User.findByIdAndDelete(req.params.id)
        if(!d){
            res.status(404).send()
        }

        res.send(d)

    }catch(e){
        res.status(500).send()
    }

})



module.exports=router
