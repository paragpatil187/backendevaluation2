const mongoose =require("mongoose");

const showSchema =new mongoose.Schema({
    timming:{type:Number,
         required:true},
    movie:{type:mongoose.Schema.Types.ObjectId,
         ref:"movie",
          required:true},
          total_seats:{type:Number,
            required:true},
            screen:{type:mongoose.Schema.Types.ObjectId,
                ref:"screen",
                 required:true},

    
    
},{
    versionKey:false,
    timestamp:true
}
)


module.exports=mongoose.model("show",showSchema)