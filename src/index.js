const express=require("express");
const app= express();
const {register,login} =require("./controllers/auth.controller");
const userController =require("./controllers/user.controller");
const movieController=require("./controllers/movie.controller")
const showController=require("./controllers/show.controller")
const screenController=require("./controllers/screen.controller")
const theaterController=require("./controllers/theater.conroller")
const seatController=require("./controllers/seat.controller")

app.use(express.json());
app.use("/users",userController);
app.post("/register",register);
app.post("/login",login);
app.use("/movies",movieController)
app.use("/shows",showController);
app.use("/screens",screenController);
app.use("/theaters",theaterController);
app.use("/seats",seatController)
module.exports =app;