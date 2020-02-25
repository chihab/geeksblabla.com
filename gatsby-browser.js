import React from "react"
import { ModeProvider } from "./src/components/Mode/ModeContext"
import "./src/styles/common.scss"

// set Mode Provider
export const wrapRootElement = ({ element }) => (
  <ModeProvider>{element}</ModeProvider>
)

// Load Lato typeface
require("typeface-lato")

const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

// in gastby-browser.js
export const shouldUpdateScroll = ({
  prevRouterProps: {
    location: { pathname: prevPathName },
  },
  routerProps: {
    location: { pathname },
  },
}) => {
  if (w < 860) {
    return true
  }
  if (
    prevPathName.indexOf("blabla") !== -1 &&
    pathname.indexOf("blabla") !== -1
  ) {
    return false
  }

  return true
}
