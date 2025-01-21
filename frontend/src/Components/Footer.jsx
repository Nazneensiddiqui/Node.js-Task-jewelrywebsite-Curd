import { PiShoppingBagLight } from "react-icons/pi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiNotebookThin } from "react-icons/pi";
import { TfiGift } from "react-icons/tfi";
import { SlSocialInstagram } from "react-icons/sl";
import { ImFacebook2 } from "react-icons/im";
import { BsPinterest } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";








const Footer=()=>{
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"80px", marginBottom:"50px"}}>
            <div align="center">
          <PiShoppingBagLight style={{fontSize:"40px"}} /><br/>
          <span style={{fontWeight:"bold",cursor:"pointer", fontSize:"16px" }}>Complimentary Shipping & Returns</span>
          <p style={{lineHeight:"25px"}}>We offer comlimentary shopping <br/> and return on all Tiffany order<br/></p>
          <a href="#">Learn More</a>
            </div>
            <div align="center">
          <MdOutlineRoomService style={{fontSize:"40px"}}/><br/>
          <span style={{fontWeight:"bold",cursor:"pointer", fontSize:"16px" }}>Tiffany At Your Service</span>
          <p style={{lineHeight:"25px"}}>Our client care experts are always <br/> here to help<br/></p>
          <a href="#">Contact Us</a>
            </div>
            <div align="center">
          <PiNotebookThin style={{fontSize:"40px"}}/> <br/>
          <span style={{fontWeight:"bold",cursor:"pointer", fontSize:"16px" }}>Book an Appointment</span>
          <p style={{lineHeight:"25px"}}>We're happy to help with in- stare or <br/> virtual appointment<br/></p>
          <a href="#">Book Now</a>
            </div>
            <div align="center">
            <TfiGift style={{fontSize:"40px"}}/><br/>
          <span style={{fontWeight:"bold",cursor:"pointer", fontSize:"16px" }}>The Iconic Blue Box</span>
          <p style={{lineHeight:"25px"}}>Your Tiffany Purchase comes  <br/> wrapped in our Blue Box puckaging<br/></p>
          <a href="#">Explore All Gifts</a>
            </div>
        </div>
        <hr size="2" color="skyblue" />
        <div style={{ fontWeight:"bold", margin:"20px"}} align="center">Home</div>
        <hr size="10" color="skyblue" />
        <div style={{display:"flex", justifyContent:"space-between",padding:"40px"}}>
        <div style={{display:"flex", justifyContent:"space-between" ,gap:"70px"}}>
            <div style={{ lineHeight:"30px"}} align="left">
                <p style={{paddingLeft:"20px"}}><b>Client Care </b></p>
                <ul style={{listStyle:"none"}}>
                    <li>Contact Us</li>
                    <li>Track Your Order</li>
                    <li>Product Care & Repair</li>
                    <li>Book an Appointment</li>
                    <li>Frequently Asked Questions</li>
                    <li>Shipping & Returns</li>
                    <li>Tiffany Select Financing</li>
                    <li>Gift Cards</li>
                    <li>Website Accessibility</li>
                </ul>
            </div>
            <div style={{ lineHeight:"30px"}} align="left">
                <p  style={{paddingLeft:"20px"}}><b>Our Company</b></p>
                <ul style={{listStyle:"none"}}>
                    <li>World of Tiffany</li>
                    <li>Sustainability</li>
                    <li>California Supply Chains Act</li>
                    <li>California Privacy</li>
                    <li>Tiffany Careers</li>
                    <li>Privacy and Other Website<br/> 
                    Policies</li>
                    <li>Transparency in Coverage</li>
                    <li>Do Not Sell or Share My<br/> Personal Information</li>
                     <li>Opt-Out of Targeted
                     Advertising</li>
                </ul>
            </div>
            <div style={{ lineHeight:"30px"}} align="left">
                <p  style={{paddingLeft:"20px"}}><b>Related Tiffany Sites</b></p>
                <ul style={{listStyle:"none"}}>
                   
                    <li>Wedding & Gift Registry</li>
                    <li>Business Accounts</li>
                    <li>The Tiffany & Co. Foundation</li>
                    <li>Tiffany Alertline</li>
                    <li>Site Index</li>
                    
                </ul>
            </div>
        </div>
        <div>
        <p  style={{paddingLeft:"20px"}}><b>Latest from Tiffany</b></p>
        <br/> <br/>  
        <p>Be the first to know about exciting new designs,<br/>
             special events, store openings and much more.</p>
        
             <br/> <br/> 
             Email
             <hr/>
             <br/>
             <button style={{width:"150px" , border:"1px solid black" , height:"30px" , fontWeight:"bold"}}>SignUp</button>
             <div style={{marginTop:"30px",display:"flex", justifyContent:"space-evenly", fontSize:"25px", paddingRight:"20px"}}>
             <SlSocialInstagram />
             <ImFacebook2 />
             <BsPinterest />
             <BsTwitterX />
             <FaYoutube />
             </div>

        </div>
        </div>

        </>
    )
}
export default Footer;