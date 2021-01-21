import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import FooterStyle from "./footer.module.scss"

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

  return (
    <div className={FooterStyle.footer}>
      created by {data.site.siteMetadata.author} &copy; Klaus
    </div>
  )
}

export default Footer
