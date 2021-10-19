const jwt = require('jsonwebtoken')
const User = require('../modals/users')

const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,'todayistomorrow')
        const user = await User.findById({_id:decoded._id,'tokens.token':token})

        if(!user){
            throw new Error()
        }

        req.user = user
        next()
    }catch(e){
        res.status(403).send({error: 'invalid authentication'})
    } 
    
}

module.exports = auth