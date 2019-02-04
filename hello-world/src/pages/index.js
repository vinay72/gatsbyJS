import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
	
  <div style={{ margin: `3rem auto`, maxWidth: 600, color: `purple` }}>    
  <Link to="/contact/">Contact</Link> 
  <Header headerText="Hello Gatsby!" />   
  
        <Layout>
     <h1>Hi! I am building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    </Layout>
    
   
   </div>
)
