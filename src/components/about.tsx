/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"

import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about.mdx"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
    <div>
        <Divider
            bg="divider"
            fill="url(#paint0_linear)"
            clipPath="M0 3V0H94V3H0Z"
            speed={0.2}
            offset={offset}
            factor={factor}
        />
        <Divider speed={0.1} offset={offset} factor={factor}>
            <UpDown>

            </UpDown>
            <UpDownWide>

            </UpDownWide>

        </Divider>
        <Content speed={0.4} offset={offset} factor={factor}>
            <Inner>
                <AboutMDX />
            </Inner>
        </Content>
    </div>
)

export default About
