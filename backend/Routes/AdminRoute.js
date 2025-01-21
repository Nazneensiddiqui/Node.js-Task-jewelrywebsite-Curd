const express=require("express");
const route=express.Router();
const AdminControler=require("../controlers/AdminControler")

route.post("/loginsystem",  AdminControler.LoginSystem)

module.exports=route