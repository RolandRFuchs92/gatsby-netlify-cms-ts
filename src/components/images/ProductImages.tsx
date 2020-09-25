import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import GatsbyImage from "gatsby-image"

type ProductsImageProps = {
  image: string
  className?: string
}

export default function ProductsImage({
  image,
  className,
}: ProductsImageProps) {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxHeight: 360, maxWidth: 460) {
              src
              srcSet
              base64
              aspectRatio
              originalImg
              sizes
            }
          }
        }
      }
    }
  `)

  const fluidImg = data.allImageSharp.edges.find((i: any) =>
    new RegExp(image, "i").test(i.node.fluid.originalImg)
  ).node.fluid
  return <Img fluid={fluidImg} className={className} />
}
