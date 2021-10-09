const express=require("express");
const connect=require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors=require("cors")
const app = express();
app.use(cookieParser());
// const cookieparser = require("cookie-parser");

app.use(express.json());
// app.use(cookieParser());
const userRouter=require("./controller/users.controller")
const logingRouter=require("./controller/login.controller")
const profile=require("./controller/profile.controller")
const logout=require("./controller/logout.controler")
const custumer = require("./controller/student.contreller");

// Pallav----------------------


app.use(cors());
app.use("/customer", custumer);
app.use("/signup",userRouter);
app.use("/login",logingRouter);
app.use("/profile", profile);
app.use("/logout", logout);
// Pallav----------------------




app.listen(8000,async()=>{
await connect();
console.log("Listening on port 4000")
})