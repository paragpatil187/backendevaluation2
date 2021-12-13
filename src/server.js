const app =require("./index");
const connect =require("./configs/db");
app.listen(2370,async(req,res)=>{
    await connect();
    console.log("listening at port 2370")
})