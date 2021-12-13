const express= require("express");

const router= express.Router();
const Movie = require("../models/movie.model");
router.get("/actor",async(req,res)=>{
    try{
        const movie =await Movie.find({"actor 1":{$in:movie.actors}}).lean().exec();
        
        res.status(200).send(movie)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});
router.post("",async(req,res)=>{
    try{
        const movie =await Movie.create(req.body)
        res.status(200).send(movie)

    }catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



module.exports =router;