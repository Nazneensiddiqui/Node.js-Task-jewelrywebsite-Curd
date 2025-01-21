import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";

const InsertProduct=()=>{
    const[input,setInput]=useState({});
    const [uploadImage , setUploadImage]=useState("")
    const navigate= useNavigate();

    const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}));
    console.log(input);
}

const handlImage=(e)=>{
    console.log(e.target.files)
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
   
     const api = "http://localhost:8100/Product/productinsert";
     const res= await axios.post(api , {Imgname:response.data.url , ...input})
     console.log(res.data)
     alert(res.data.msg)
     navigate("/dashboard/display")
   
   
      } catch (error) {
        alert(error.res.data.msg)
      }
     }


    return(
        <>
        <center>
        <div className="form">
       <h1 align="center" style={{marginTop:"20px"}}>Insert Item</h1>
      
    <div style={{marginTop:"20px"}}>
        Description   :  <input type="text" name="description" onChange={handlInput}/> <br/> <br/>
        Enter Price   :  <input type="text" name="price" onChange={handlInput}/> <br/> <br/> 
         Image Link  : <input type="file" name="image" onChange={handlImage}/>
     <br/> <br/>
    <button onClick={handlSubmit} >Upload Item</button>
        </div>
        </div>
        </center>
       
        <ToastContainer/>
        </>
    )
}
export default InsertProduct;