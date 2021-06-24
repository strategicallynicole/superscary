/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 22/06/2021 - 19:53:19
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./index.comp.scss"

export default function RunAwayLittleGirl() {
  return (

    <StaticImage
      src="./runawaylittlegirl.svg"
      alt="Run Away Little Girl"
      placeholder="blurred"
      layout="fullWidth"
      className="block overflow-visible runawaylittlegirl animate-enter"
    />
  )
}
