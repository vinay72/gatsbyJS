import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <Layout>
    <h1>I would love to talk! Email me at the address below</h1>
    <p>Send us a message!</p>
    <p>
      <a href="mailto:vinaysagar971995@gmail.com">vinaysagar971995.com</a>
    </p>
    </Layout>
  </div>
)
