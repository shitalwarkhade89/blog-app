import React from "react";
import { Link } from "react-router-dom";
 import "./Home.css"
import Posts from "../Posts/Posts";
 
 function Home(){
    return(
        <>
  
    {/* <Link to="/posts">Posts</Link> */}
    <Posts/>
        </>
    )

 }
 export default Home

 