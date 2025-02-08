const express=require("express")
const app=express();
require("dotenv").config()
const cors=require("cors")

const port=process.env.PORT ||8100
const dbcon=process.env.DBATLAS_CONN 

const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const AdminRoute=require("./Routes/AdminRoute")
const ProRoute=require("./Routes/ProRoute")

mongoose.connect(dbcon).then((res)=>{
    console.log("DBAtias Conneced");
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/admin",AdminRoute)
app.use("/product", ProRoute)


app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})