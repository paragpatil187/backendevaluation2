const express= require("express");

const router= express.Router();
const Seat = require("../models/seat.model");
router.get("",async(req,res)=>{
    try{
        const seat =await Seat.find().lean().exec();
        res.status(200).send(seat)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.post("",async(req,res)=>{
    try{
        const seat =await Seat.create(req.body)
        
        res.status(200).send(seat)
    

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



module.exports =router;