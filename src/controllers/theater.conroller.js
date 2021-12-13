const express= require("express");

const router= express.Router();
const Theater = require("../models/theater.model");
router.get("",async(req,res)=>{
    try{
        const theater =await Theater.find().lean().exec();
        res.status(200).send(theater)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.post("",async(req,res)=>{
    try{
        const theater =await Theater.create(req.body)
        res.status(200).send(theater)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



module.exports =router;