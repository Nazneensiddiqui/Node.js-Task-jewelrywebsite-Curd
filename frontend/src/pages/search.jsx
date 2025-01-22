import axios from "axios";
import { useState } from "react";
import Card from 'react-bootstrap/Card';


const Search=()=>{
    const [item , setItem]=useState("")
    const[mydata, setmyData]=useState([])

const handlSubmit=()=>{
 let api = "http://localhost:8100/Product/productSearch";
 axios.post(api, {item:item}).then((res)=>{
    setmyData(res.data)
 })
}

const ans=mydata.map((key)=>{
    return(
            <>
         
           <div>
            <Card style={{width:"230px", marginTop:"20px"}}>
               {/* Image Section with Overlay */}
                   <div className="card">
                     <img src={key.linkimg} style={{ height: "240px", width: "100%" }}  />
                     <div className="overlay"  >Add to Cart</div>
                   </div>
          <Card.Body>
          <Card.Text style={{fontFamily:"time", fontSize:"11px"}}>
          {key.description}
                    <br/>
                    <span > ₹ {key.price}/-</span>  
                </Card.Text>
                {/* <Button variant="primary" 
                  onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}} >add to cart</Button> */}
              </Card.Body>
            </Card>
            </div>
         </>
           )
         
         })
   


    return(
        <>
     <center>
        <div className="form" style={{width:"400px" , height:"250px"}}>
       <h1 align="center" >Search Item</h1>
       <div style={{marginTop:"20px"}}>
        Search By Item :  <input type="text" name="item" value={item} onChange={(e)=>{setItem(e.target.value)}}/> <br/> <br/>
         <button onClick={handlSubmit} >Upload Item</button>
        </div>
        </div>
        <hr size="4px" color=" #1abc9c"/>
        <div id='cardData'>
       {ans}
        </div> 
        </center>
        </>
    )
}
export default Search;