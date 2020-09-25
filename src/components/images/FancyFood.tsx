import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function FancyFood() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "FancyFood.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ height: "100%" }}
    />
  )
}
