const express= require("express");

const router= express.Router();
const Screen = require("../models/screen.model");
router.get("",async(req,res)=>{
    try{
        const screen =await Screen.find().lean().exec();
        res.status(200).send(screen)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.post("",async(req,res)=>{
    try{
        const screen =await Screen.create(req.body)
        res.status(200).send(screen)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



module.exports =router;