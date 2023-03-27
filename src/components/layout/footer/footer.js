import React from "react";
import Logo from "../logo";
import Icons from "../icons";
import TemplateData from "../../templateData";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import { mq, color } from "../../rootCss";

export const Footerr = ({children}) => {
    const {
        title,
        location,
        country,
        author
    } = TemplateData()
    const year =  new Date().getFullYear()
    return(
    <footer css={css`
        margin-top: 9rem;
        & > div {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        & footer {
            width: 100%;
            padding: 0 1rem;
            span {
                text-transform: capitalize;
            }
            div { 
                display: flex;
                align-items: center;
            }
            > div {
                justify-content: center; 
                box-shadow: 0 -1px 0 0 ${color.dark20};
                padding: 1rem 0;
                flex-direction: column;
            }
        }
        ${mq[2]} {
            footer > div {
                flex-direction: row;
            }
        }
    `}>
        <div>
            {children}
            <footer >
                <div>
                    <div>
                        <Icons 
                            icon="copyright"
                            size={12}
                        />
                        <span>{year}. {title}. {location}, {country}. </span>
                    </div>
                    <div >
                        <span> made with </span>
                        <Icons 
                            icon="heart"
                            size={12}
                            style={css`
                                margin: 0 0.25rem;
                            `}
                        />
                         {author} 
                    </div>
                </div>
            </footer>
        </div>
    </footer>
)}

export const Socialmedia = () => {
    const query = useStaticQuery(graphql`
        query {
            allSite {
                nodes {
                    siteMetadata {
                        socialmedia {
                            link
                            name
                        }   
                    }
                }
            }
        }
    `)
    const data = query.allSite.nodes
    return (
        <ul className="list-style-none d-flex my-4" css={css`
            list-style: none;
            display: flex;
            margin: 2.5rem 0;
            li {
                margin: 0 0.5rem;
            } 
        `}>
            {data[0].siteMetadata.socialmedia.map(node => (
                <li key={node.name}>
                    <a href={node.link} aria-label={node.name}>
                        <Icons 
                            icon={node.name}
                            size={30}
                        />
                    </a>
                </li>
                ))
            }
        </ul>
    )
}
const Footer = () => {
    return(
        <Footerr>
            <Logo
                size={35}
                style={css`
                    display: flex;
                    background-color: ${color.yellow};
                    padding: 0.5rem 1rem;
                    margin-bottom: 2.5rem;
                    circle {
                        fill: ${color.dark};
                    }
                    path {
                        fill: ${color.yellow};
                    }
                    h1 {
                        font-size: 1.5rem;
                        margin-left: 1rem;
                    }
                `}
            />
            <Socialmedia/>
        </Footerr>
)}
export default Footer