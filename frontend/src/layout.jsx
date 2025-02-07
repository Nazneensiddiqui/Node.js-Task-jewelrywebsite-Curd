import {Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TopNevbar from "./Components/TopNevbar";


const Layout=()=>{
    return(
        <>
        <div style={{position:"sticky", top:"0" , zIndex:"10"}}>
        <Header/>
        <TopNevbar/>
        </div>
      
     
       <Outlet/>
       
        <Footer/>
         </>
    )
}
export default Layout;