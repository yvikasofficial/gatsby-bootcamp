import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return <div>created by {data.site.siteMetadata.author} &copy; Klaus</div>
}

export default Footer
