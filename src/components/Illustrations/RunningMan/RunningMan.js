/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 01:34:50
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./RunningMan.comp.scss"
export default function RunningMan() {
  return (

    <StaticImage
      src="./running.svg"
      alt="Run Away Little Girl"
      placeholder="blurred"
      layout="fullWidth"
      loading="lazy"
      className="object-cover running-1 animate-enter pb-28"
    />
  )
}
