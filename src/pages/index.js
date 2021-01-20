import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello, this is klaus</h1>
      <h3>This is the best bootcamp I have been so far tbh!</h3>
      <p>
        need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
