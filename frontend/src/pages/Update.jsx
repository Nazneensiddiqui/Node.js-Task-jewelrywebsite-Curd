import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import del from "../vedio/del.png"
import edit from "../vedio/edit.png"
import { useNavigate } from "react-router-dom";


const Update=()=>{
    const [myData , setMyData]=useState([]);
    const navigate=useNavigate()

    const loadData=()=>{
        let api = "http://localhost:8100/Product/productupdate";
        axios.get(api).then((res)=>{
            setMyData(res.data)
            // console.log(res.data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])


   //delete data function
const delData=(id)=>{
    let api = "http://localhost:8100/product/productdelete";
        axios.post(api , {id:id}).then((res)=>{
    console.log(res.data);
    alert("Product Dalete!!!")
    loadData()
  })
  }

  const editData=(id)=>{
  navigate(`/dashboard/editdata/${id}`)
  }


    let sno=0;
    const ans = myData.map((key)=>{
        sno++;
        return(
            <>
             <tr border="1">
                <td>{sno}</td>
                <td><img src={key. linkimg} width={200} height={200}/></td>
                <td align="center" >{key.description}</td>
                <td>{key. price}</td>
                <td>
                    <a href="#" onClick={()=>{delData(key._id)}}>
                        <img src={del} width="50px" height="50px"/></a><br/><br/><br/>
                    <a href="#" onClick={()=>{editData(key._id)}}>
                        <img src={edit} width="50px" height="50px"/></a>
                </td>

            </tr>
            </>
        )
    })


    return(
        <>
        <center>
       < h1>Display data</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
       </center>
        </>
    )
}
export default Update