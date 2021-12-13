const express= require("express");
const showModel = require("../models/show.model");

const router= express.Router();
const Show = require("../models/show.model");
const Movie = require("../models/movie.model");
const Theater= require("../models/theater.model")
router.get("",async(req,res)=>{
    try{
        const show =await Show.find().populate("movie").lean().exec();
        res.status(200).send(show)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.post("",async(req,res)=>{
    try{
        const show =await Show.create(req.body)
        res.status(200).send(show)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const movie= await Movie.findById(req.params.id).lean().exac();
        const show =await Show.find().lean().exec();
        res.status(200).send({show,movie})

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.get("/mumbai",async(req,res)=>{
    try{
        const movie= await Movie.findById(req.params.id).lean().exac();
        const show =await Theater.find({location:"mumbai"}).lean().exec();
        res.status(200).send({show,movie})

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});




module.exports =router;