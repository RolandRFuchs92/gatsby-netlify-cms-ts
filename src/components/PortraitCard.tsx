import React from "react"

import ProductsImage from "./images/ProductImages"
import FancyFood from "./images/FancyFood"
import { makeStyles, Grid, Typography, Box } from "@material-ui/core"

const useStyles = makeStyles(theme => {
  return {
    cardContainer: {
      borderRadius: theme.shape.borderRadius,
      transition: "0.4s all ease-in-out",
      "&:hover": {
        boxShadow: "4px 4px 15px #00000075",
      },
      "&:hover $cardImage": {
        transform: "scale(1.25)",
        overflow: "hidden",
        // top: -25,
        // left: -25,
        objectFit: "cover",
      },
      "&:hover $cardContent li": {
        fontSize: 30,
        fontStyle: "bold",
        // color: "green",
      },
    },
    cardImage: {
      borderTopRightRadius: theme.shape.borderRadius,
      borderTopLeftRadius: theme.shape.borderRadius,
      transition: "0.4s all ease-in-out",
    },
    cardImageContainer: {
      width: 460,
      height: 360,
      overflow: "hidden",
    },
    cardContent: {
      transition: "0.4s all ease-in-out",
    },
  }
})

type PortraitCardProps = {
  image: string
  heading: string
  title: string
  caption: string
  markdown: string
}

export default function PortraitCard({
  image,
  heading,
  caption,
  title,
  markdown,
}: PortraitCardProps) {
  const styles = useStyles()

  return (
    <div className={`cardContainer ${styles.cardContainer}`}>
      <div className={styles.cardImageContainer}>
        <ProductsImage
          image={image}
          className={`cardImage ${styles.cardImage}`}
        />
      </div>
      <div style={{ height: 360, width: 460 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={12}>
            <Box m={3}>
              <Typography align="center" variant="h3">
                {title}
              </Typography>
            </Box>
          </Grid>
          <div
            dangerouslySetInnerHTML={{ __html: markdown }}
            className={`cardContent ${styles.cardContent}`}
          />
        </Grid>
      </div>
    </div>
  )
}
