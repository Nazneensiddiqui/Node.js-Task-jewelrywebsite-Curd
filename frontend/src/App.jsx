import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import HighJewelry from "./pages/highJewley";
import LogSystem from "./pages/Loginsystem";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/Admin";
import InsertProduct from "./pages/Insert";
import JewelryTable from "./pages/Display";
import Update from "./pages/Update";
import EditData from "./pages/editData";
import Search from "./pages/search";
import ResetPassword from "./pages/ResetPass";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="high" element={<HighJewelry/>}/>
      <Route path="loginsystem" element={<LogSystem/>}/>   
      </Route>
      <Route path="dashboard" element={<Dashboard/>}>
      <Route path="admin" element={<Admin/>}/>
      <Route path="insert" element={<InsertProduct/>}/>
      <Route path="display" element={<JewelryTable/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="editdata/:id" element={<EditData/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="resetpass" element={<ResetPassword/>}/>
      
      


      
      
      </Route>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}
export default App;