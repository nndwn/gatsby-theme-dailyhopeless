import React from "react";
import Icons from "./icons";
import { css } from "@emotion/react";
import { mq, color } from "./rootCss";

export const Footerr = ({children, style, data}) => {
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
    ${style}
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
                        <span>{year}. {data.title}. {data.location}, {data.country}. </span>
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
                         {data.author} 
                    </div>
                </div>
            </footer>
        </div>
    </footer>
)}

export const Socialmedia = ({data}) => {
    return (
        <ul css={css`
            list-style: none;
            display: flex;
            margin: 2.5rem 0;
            li {
                margin: 0 0.5rem;
            } 
        `}>
            {data.map(node => (
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
