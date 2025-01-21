import {Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TopNevbar from "./Components/TopNevbar";


const Layout=()=>{
    return(
        <>
        <Header/>
        <TopNevbar/>
     
       <Outlet/>
       
        <Footer/>
         </>
    )
}
export default Layout;