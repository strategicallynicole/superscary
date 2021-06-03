/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import SEO from "./seo"
import { ThemeProvider } from 'theme-ui'
import  theme   from "../gatsby-plugin-theme-ui"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
    
        //  backgoundImage: 
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: "#121212",
          color: "#ffffff",
        },
      })}
    />
  
<ThemeProvider></ThemeProvider>
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
