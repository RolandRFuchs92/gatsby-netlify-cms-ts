import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import { Toolbar, Grid } from "@material-ui/core"

type HeaderProp = {
  siteTitle: string
}

function Header({ siteTitle }: HeaderProp) {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <Grid container justify="center">
          <Grid item>{siteTitle}</Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
