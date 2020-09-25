import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ProductsImage({ image }: any) {
  return <Img fluid={image} />
}
