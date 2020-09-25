import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CssBaseline, ThemeProvider, Grid } from "@material-ui/core"
import "typeface-nixie-one"

import Header from "./Header"
import "./layout.css"
import theme from "./Styles"
import "./appStyles.css"

type LayoutProps = {
  children: JSX.Element
}

function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid container justify="center" direction="column">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Grid>
    </ThemeProvider>
  )
}

export default Layout
