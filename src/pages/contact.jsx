import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>My Contacts are</h1>
      <p>My phone is -545454646</p>
      <p>age 343 </p>
      <p>
        well you can have a look at my contact page{" "}
        <a href="https://www.twitter.com/yvikasofficial">Twitter Account</a>
      </p>
      <p>
        Do checkout my about page brr! <Link to="/about"> About Page</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
