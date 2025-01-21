import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditData=()=>{
    const{id}=useParams()
    const [input , setInput]=useState({})
    const[uploadImage, setUploadImage]=useState({})

   const loadData=()=>{
    let api = "http://localhost:8100/Product/editdisplay";
    axios.post(api , {id:id}).then((res)=>{
        setInput(res.data)
    })
   }

   useEffect(()=>{
    loadData()
   },[])

   const handlInput=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setInput(values=>({...values , [name]:value}))

   }

   const handlImage=(e)=>{
setUploadImage(e.target.files[0])
   }

   const handlSubmit=async()=>{
    try {
       const formData=new FormData();
       formData.append("file" , uploadImage)
       formData.append("upload_preset" , "myPhoto")
       formData.append("Cloud_name","dumkd4xnv")
   
       const response = await axios.post('https://api.cloudinary.com/v1_1/dumkd4xnv/image/upload', formData); 
     console.log(response.data.url) 
   
     const api = "http://localhost:8100/Product/editproductsave";
     const res= await axios.post(api , {Imgname:response.data.url , ...input})
     console.log(res.data)
     alert(res.data.msg)
     navigate("/dashboard/upload")
   
   
      } catch (error) {
       console.log(error)
      }
     }



    
    return(
        <>
         <center>
        <div className="form">
       <h1 align="center" style={{marginTop:"20px"}}>Edit Item</h1>
      
    <div style={{marginTop:"20px"}}>
        Description   :  <input type="text" name="description" value={input.description} onChange={handlInput}/> <br/> <br/>
        Enter Price   :  <input type="text" name="price" value={input.price} onChange={handlInput}/> <br/> <br/> 
         Image Link  : <input type="file" name="image" value={uploadImage. linkimg} onChange={handlImage}/>
     <br/> <br/>
    <button onClick={handlSubmit} >Upload Item</button>
        </div>
        </div>
        </center>
        </>
    )
}
export default EditData;