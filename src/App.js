import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Project from "./components/projects";

import { useState } from "react";
import './App.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Ideas from "./components/ideas";

export default function App(){

  const[active,setActive] = useState(false);
  const handleClick = () =>{
    setActive(!active);
  }


  return(
   
   <BrowserRouter>
   <Navbar active={active} handleClick = {handleClick} />
    <Routes>
      <Route path="/" element={<Home active={active} handleClick = {handleClick}></Home>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/projects" element={<Project/>}></Route>
      <Route path="/ideas" element={<Ideas/>}></Route>
    </Routes>
    <Footer active={active}/>
   </BrowserRouter>
  );
}