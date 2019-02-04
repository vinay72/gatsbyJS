import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `purple` }}>    
  <Link to="/contact/">Contact</Link>  
  <Header headerText="Hello Gatsby!" />   
   <p>What a world.</p>  
   <h1>Hi! I'm building a demo Gatsby site as part of a tutorial!</h1>
    <p>
      What I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
   </div>
)
