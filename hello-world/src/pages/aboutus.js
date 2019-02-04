import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby"/> 
     <Header headerText="It's pretty cool" /> 
     <Layout>
     <h1>About me</h1>
      <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    <p>Such wow. Very React.</p>
    </Layout>
  </div>
)
