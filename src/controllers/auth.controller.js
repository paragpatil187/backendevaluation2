//loginand register password token accesskey email validation
const User = require("../models/user.model")



const register = async(req,res)=> {
    try{
        let user =await User.findOne({email:req.body.email}).lean().exec();
        if(user){
            return res.status(400).json({status:"Failed",message:"Please provide different mail"})
        }
        user=await User.create(req.body);
        res.status(201).json({user})

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
}

const login = async(req,res)=> {
    try{
        let user =await User.findOne({email:req.body.email}).lean().exec();
        if(!user){
            return res.status(400).json({status:"Failed",message:"Please provide different mail"})
        }
        const match = await user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).json({status:"Failed",message:"Password or mail is incorrect"})
        }
        res.status(201).json({user})

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
}

module.exports={register,login};