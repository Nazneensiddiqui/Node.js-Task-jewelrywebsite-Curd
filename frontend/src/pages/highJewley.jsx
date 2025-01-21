import blue from "../vedio/blue.mp4" 
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';


const HighJewelry=()=>{
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

const ans=myData.map((key)=>{
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
       <div style={{marginTop:"50px", fontFamily:"Times New Roman', Times, serif"}}>
       <h1>Blue Book 2024: Tiffany Céleste</h1> 
       <p> Our newest high jewelry collection is a mesmerizing journey through the cosmos, inspired by legendary Tiffany & Co. designer Jean Schlumberger. Reimagining his iconic celestial<br/>
         motifs, each piece juxtaposes custom-cut diamonds and colored gemstones with unique shapes and visions.</p>
         <div>
         <video src={blue} autoPlay muted loop controls  style={{ width: '100%', height: 'auto' }}  ></video>
    </div>
    <div id='cardData'>
 {ans}
    </div> 
        </div> 
        </center>
        </>
    )
}
export default HighJewelry;