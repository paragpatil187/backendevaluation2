const mongoose =require("mongoose");

const movieSchema =new mongoose.Schema({
    name:{type:String, required:true},
    actors:[{type:String, required:true}],
    langauge:[{type:String, required:true}],
    directors:[{type:String, required:true}],
    poster_url:{type:String, required:true},
},{
    versionKey:false,
    timestamp:true
}
)


module.exports=mongoose.model("movie",movieSchema)