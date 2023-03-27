import React from "react";
import { GatsbyImage,getImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import { mq, mx, color } from "../../rootCss";
import TemplateData from "../../templateData";
import { 
        start, 
        starttext, 
        startTextHeadline,
        startImageHeadline, 
        fade, 
        startImageMove } from "./keyframeHeadline"

const Headline = ({data, scroll}) => {
    const {title} = TemplateData();
    const h1 = data.headline[0].h1
    const text = data.headline[0].h2.split(' ')
    const last = text.pop()
    const h2 = text.join(' ')
    return(
    <section id="mvAreas" className={scroll ? "resize": ""} css={css`
        overflow: hidden;
        height: 31.25rem;
        margin-bottom: 2rem;
        position: relative;
        & > div {
            margin: 0 1rem;
            position: absolute;
            z-index: 46;
            transition: all .2s;
            color: ${color.white};
            h2 {
                font-size: 3rem;
                white-space: nowrap;
                font-family: anton;
                text-transform: capitalize;
            }
            h3{
                font-size: 1.25rem;
                span {
                    color: ${color.yellow};
                }
            }
        }
        &.resize > div {
            opacity: 0;
        }
        &.resize > ul , &.resize > ul:before{
            height: 7.5rem;
        }
        ul {
            overflow: hidden;
            width: 101%;
            list-style: none;
            position: relative;
            height: 31.25rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: all .3s;
            li {
                animation: ${fade} 10s linear infinite;
                position: absolute;
                opacity: 0;
                width: 100%;
                > div {
                    min-height: 31.25rem;
                    transition: all .3s;
                }
                > div::before {
                    background-color: ${color.dark50};
                    content: "";
                    display: inline-block;
                    height: 100%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all .3s;
                    width: 100%;
                    z-index: 46;
                }
            }
            li: last-child {
                animation-delay: 5s;
            }
        }

        ${mq[2]}{
            height: 100vh;
            align-items: center;
            display: flex;
            &::before{
                animation: ${start} 5s;
                background-color: ${color.yellow};
                content: "";
                display: inline-block;
                transform: unset;
                transition: none;
                z-index: 47; 
            }
            &::after{
                animation: ${starttext} 5s;
                color: ${color.dark};
                content: "${title.toUpperCase()}";
                font-family: anton;
                font-size: 3rem;
                line-height: 3.333;
                padding: 2rem 2rem 0 0;
                z-index: 48;
            }
            &::before, &::after {
                height: 10rem;
                left: calc(50% - 22.5rem);
                opacity: 0;
                position: absolute;
                text-align: right;
                width: 45rem;
            }
            & > div {
                animation: ${startTextHeadline} 2.1s;
                margin: 0 3rem;
           
                h2 {
                    font-size: 8.2rem;
                }
                h3 {
                    font-size: 2.5rem;
                }
            }
            &.resize > ul{
                height: 360px;
                width: 1200px;
            }
            ul {
                animation: ${startImageHeadline} 2.1s ease-in-out;
                height: 100vh;
                position: absolute;
                li {
                    height: 100vh;
                    top: 0;
                    > div {
                        animation: ${startImageMove} 2.1s ease-in-out;
                        min-height: 100vh;
                    }
                }
            }
        }
        ${mx[2]}{
            & > div {
                bottom: 4.9rem;
            }
        }
    `}>
        <div>
            <h2>{h1}</h2>
            <h3>{h2}<span> {last}</span></h3>
        </div>
        <ul >
            {data.slide.map(node => (
                    <li key={node.alt}>
                        <GatsbyImage
                            image={getImage(node.image)}
                            alt= {node.alt}
                            loading="eager"
                        />
                    </li>
            ))}
        </ul>
    </section>
)}


export default Headline