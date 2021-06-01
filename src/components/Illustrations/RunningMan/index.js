import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
export default function RunningMan() {
  return (

    <StaticImage
      src="./running.svg"
      alt="Run Away Little Girl"
      placeholder="blurred"
      layout="fixed"
      width={400}
      loading="lazy"
      className="running-1 animate-enter object-cover"
    />
  )
}
