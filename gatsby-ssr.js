import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/static/anton-d1b9af350e094aacd3974a0da3b8a1ac.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
      key="anton"
    />
  ])
}