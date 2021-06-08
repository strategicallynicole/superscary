import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Structure from "../components/Structure/layout"
import Layout from "../components/layout.tsx"
import Hero from "../components/Heroes/threedee.js"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import  "../utils/siteConfig.js"
import "../styles/base.css";
import LetUsGuess from "../components/ContentBlocks/letusguess"
import Stars from "../components/Blocks/LetUsGuess/LetUsGuess";

const Cara = () => (
  <Layout>
  <Structure>
      <Hero offset={0} factor={1} />
            <Stars offset={0} factor={1} />


    </Structure>
  </Layout>
)

export default Cara
