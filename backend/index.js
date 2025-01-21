const express=require("express")
const app=express();
const port=8100;
const cors=require("cors")

const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const AdminRoute=require("./Routes/AdminRoute")
const ProRoute=require("./Routes/ProRoute")

mongoose.connect("mongodb://127.0.0.1:27017/The-Jewelry").then((res)=>{
    console.log("DB Conneced");
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/admin",AdminRoute)
app.use("/product", ProRoute)


app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})