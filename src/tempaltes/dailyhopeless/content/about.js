import React from "react";
import { about } from "../style";

const About = ({data, scroll}) => (
    <section id="mainTitleArea" className={ scroll ? "show":"" } css={about}> 
        <h3>{data[0].headline.map(node => node.h1 )}</h3>
        <p>{data[0].description}</p>
</section>
)
export default About