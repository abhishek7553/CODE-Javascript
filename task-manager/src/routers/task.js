const express = require('express')
const Task = require('../modals/tasks')

const router = new express.Router


router.post('/tasks',async (req,res)=>{
    
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch(err){
        res.status(400).send(err)
    }

})

router.get('/tasks',async (req,res)=>{

    try{
        const t = await Task.find({})
        res.status(201).send(t)
    }catch(e){
        res.status(500).send(e)
    }
})


router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id
    try {
        const t = await Task.findById(_id)
        if(!t){
            return res.status(404).send()
        }
        res.send(t)
    }catch(e){
        res.status(500).send()
    }
})

router.patch('/tasks/:id',async (req,res)=>{

    const updates  = Object.keys(req.body)
    const allowedUpdate = ['completed','description']
    const isValid =  updates.every((u) => allowedUpdate.includes( u ))

    if(!isValid){
        res.status(400).send({error: 'Bad Update!'})
    }
    try{
        const  t = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true ,runValidators:true})
        if(!t){
            return res.status(404).send()
        }
        res.send(t)
    }catch(e){
            res.status(500).send()
    }
})


router.delete('/tasks/:id',async (req,res)=>{

    try{
        const d = await Task.findByIdAndDelete(req.params.id)
        if(!d){
            res.status(404).send()
        }

        res.send(d)

    }catch(e){
        res.status(500).send()
    }

})

module.exports=router