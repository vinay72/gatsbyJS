import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
   <div style={{ color: `purple` }}>    
  <Link to="/contact/">Contact</Link> 
  <Header headerText="Hello Gatsby!" />   
   <p>What a world. What  I like  ? Lots of course but definitely enjoy building
      websites.</p>  
  </div>
)
