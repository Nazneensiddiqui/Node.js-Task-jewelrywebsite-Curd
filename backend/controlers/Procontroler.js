const ProModel=require("../models/ProModel")

const ProInsert=async(req , res)=>{
    // console.log(req.body)
  const  {description,price,Imgname}=req.body

  const Data= await ProModel.create({
    description:description,
    price:price,
    linkimg:Imgname
})
res.status(200).send({msg:"Item Succesfully Insert!!! "})
}
const ProDisplay=async(req , res)=>{
    const Data= await ProModel.find();
    res.send(Data)
}

const   ProUpdate=async(req, res)=>{
    const Data= await ProModel.find();
    res.send(Data)
}

const DataDelet= async(req , res)=>{
   const {id}=req.body
   const Data = await ProModel.findByIdAndDelete(id)
    res.send("ok")
}

const EditDisplay= async(req , res)=>{
    const{id}=req.body
    const Data =  await ProModel.findById(id)
    res.send(Data)
}

const EditSave= async(req , res)=>{
    console.log(req.body)
    const{_id , Imgname,description,price}=req.body
    const MyData= await ProModel.findByIdAndUpdate(_id , {
     description:description,
    price:price,
    linkim:Imgname
    })
    res.status(200).send({msg:"Item Succesfully Update!!!"})
}

const DataSearch= async(req,res)=>{
   const{item}=req.body
   const mydata= await ProModel.find({"description" : {$regex:item , $options: "i"}});
    res.send(mydata)
    
}

module.exports={
    ProInsert,
    ProDisplay,
    ProUpdate,
    DataDelet,
    EditDisplay,
    EditSave,
    DataSearch
}