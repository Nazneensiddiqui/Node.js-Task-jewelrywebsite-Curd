const mongoose=require("mongoose")
const proSchema=new mongoose.Schema({
    description:String,
    price:Number,
    linkimg:String

})
module.exports=mongoose.model("product" , proSchema)