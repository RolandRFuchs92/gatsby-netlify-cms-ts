import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, Box } from "@material-ui/core"
import Image from "../components/images/FancyFood"

export default function LandingScreenTemplate() {
  const {
    allMarkdownRemark: {
      nodes: [
        {
          frontmatter: { title, caption, description },
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
            description
          }
        }
      }
    }
  `)

  return (
    <Box height="100vh">
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Box m={3} height="75vh">
            <Image />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={3}>
            <Typography variant="h4" align="center">
              {title}
            </Typography>
            <Typography variant="caption" align="center" component="div">
              {caption}
            </Typography>
          </Box>

          <Typography variant="body1" align="center">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
