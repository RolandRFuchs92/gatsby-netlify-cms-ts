import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, Box } from "@material-ui/core"
import Image from "../components/Image"

export default function LandingScreenTemplate() {
  const {
    allMarkdownRemark: {
      nodes: [
        {
          frontmatter: { title, caption },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { eq: "landingScreen" } } }
      ) {
        nodes {
          frontmatter {
            title
            caption
          }
        }
      }
    }
  `)

  return (
    <Box height="100vh">
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box height={600}>
            <Image />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            {caption}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
