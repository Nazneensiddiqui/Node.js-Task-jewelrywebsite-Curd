
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { BsCalendar4 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";






const TopNevbar=()=>{
  const navigate=useNavigate()
    return(
        <>
       <nav className="navbar">
      <div className="navbar-left">
        <CiSearch className="icon" onClick={()=>{navigate("/dashboard/model")}}/>
        <CiLocationOn className="icon" /> 
        <CiBellOn  className="icon" />
        <span>Contact Us</span>
      </div>
      <div className="navbar-center">
        <p className="logo">TIFFANY&CO.</p>
      </div>
      <div className="navbar-right">
        <BsCalendar4 className="icon" />
        <span>Book an Appointment</span>
        <CiUser className="icon" onClick={()=>{navigate("/loginsystem")}}/>
        <CiHeart className="icon" />
        <HiOutlineShoppingBag className="icon" />
      </div>
      <div className="navbar-links">
        <Link to="home">Home</Link>
        <Link to="high">High Jewelry</Link>
        <Link to="#"> Jewelry</Link>
        <Link to="#">Love & Engagement</Link>
        <Link to="#">Fine Watches</Link>
        <Link to="#">Accessories</Link>
        <Link to="#">Gifts</Link>
        <Link to="#">Stories</Link>
      
      </div>
    </nav> 
        </>
       
    )
}
export default TopNevbar;

