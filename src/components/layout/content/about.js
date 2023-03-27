import React from "react";
import { css } from "@emotion/react";
import { mq, color } from "../../rootCss";

const About = ({data, scroll}) => (
    <section id="mainTitleArea" className={ scroll ? "show":"" } css={css`
        width: 100%;
        position: absolute;
        padding: 0 1rem;
        opacity: 0;
        top: 14rem;
        h3 {
            font-size: 2.25rem;
            text-align: center;
            color: ${color.white};
            font-family: anton;
        }
        p {
            color: ${color.dark80};
            text-align: center;
            font-size: 1.25rem;
            margin-top: 3rem;

        }
        &.show {
            opacity: 1;
            transition-delay: .1s;
            z-index: 45;
        }
        ${mq[2]} {
            padding: 0 3rem;
            top: calc(50vh + 13rem);
            transition-delay: 0;
            h3 {
                font-size: 4.5rem;
                color: ${color.dark};
            }
            p {
                white-space: pre-wrap;
                margin-top: 1.5rem;
                padding: 0 3rem;


            }
        }
    `}> 
        <h3>{data.headline[0].h1}</h3>
        <p>{data.description}</p>
</section>
)
export default About