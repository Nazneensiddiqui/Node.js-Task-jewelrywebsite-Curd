import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';


const Display=()=>{
    const [myData , setMyData]=useState([]);

    const loadData=()=>{
        let api = "http://localhost:8100/Product/productdisplay";
        axios.get(api).then((res)=>{
            setMyData(res.data)
            console.log(res.data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    let sno=0;
    const ans = myData.map((key)=>{
        sno++;
        return(
            <>
             <tr border="1">
                <td>{sno}</td>
                <td><img src={key. linkimg} width={200} height={200}/></td>
                <td>{key.description}</td>
                <td>{key. price}</td>

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
export default Display