import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql,useStaticQuery } from "gatsby";
import Logo from "../logo";
import Nav, { Currentline } from "../nav";
import Icons from "../icons";
import { css, keyframes } from "@emotion/react";
import { mq, mx, color } from "../../rootCss";


const startHeader = keyframes`
        0% {
        transform: translateY(-105%);
        }
        82% {
        transform: translateY(-105%);
        }
        to {
        transform: translateY(0);
        }
`

const Header = ({data, scroll}) => {
    const [toggle, setToggle] = useState(false)
    return(
        <Navigation style={css`
            width: 100%;
            padding: 0;
            position: absolute;
            z-index: 49;
            header {
                margin: 0 1rem;
                position: relative;
                nav {
                    display: flex;
                    align-items: center;
                    padding: 1rem 0;
                }
            }
            ${mq[2]}{
                background-color: ${color.white};
                position: fixed;
                animation:${startHeader} 2.5s;
                box-shadow: 0 1px 0 0 ${color.dark20};
                opacity: .95;
                header {
                    margin: 0 3rem;
                }
            }
            ${mx[2]}{
                nav.resize {
                    display: none;
                }
            }
        `}>
      
            <nav className={ scroll ? "resize": ""} >
                <Logo 
                    size= {35}
                    style= {css`
                        display: flex;
                        justify-content: flex-start;
                        flex: 1 0 0;
                        align-items: center;
                        circle {
                            fill: ${color.white};
                        }
                        h1 {
                            margin-left: 1rem;
                            font-size: 1.5rem;
                            color: ${color.white};
                        }
                        ${mq[2]}{
                            & circle {
                                fill:${color.yellow};
                            }
                            & h1 {
                                color:${color.dark};
                            }
                        }
                    `}
                />
                <Nav 
                    menu={data.menu}
                    style={css`
                        display: none;
                        ${mq[2]}{
                            width: 26.3rem;
                            font-family: anton;
                            display: block;
                            text-transform: capitalize;
                            text-align: center;
                            font-size: 1.25rem;
                            position: relative;
                            li {
                                list-style: none;
                                margin-right: 5rem;
                                display: inline-block;
                            }
                            li:nth-last-of-type(-n+2) {
                                margin-right: 0;
                            }
                        }
                    `}> 
                    <Currentline/>
                </Nav>
                <ButtonLanguage toggle={toggle} set ={setToggle} data={data.lang}/>
            </nav>
            <Menulanguage toggle={toggle}/>
        </Navigation>
    )
}

export const Navigation = ({children, style}) => (
    <div css={style}>
        <header>
            {children}
        </header>
    </div>
)

export const ButtonLanguage = ({toggle, set , data}) => {
    const show = () => {
        set(!toggle);
      };
    return (
        <div css={css`
            display: flex;
            justify-content: flex-end;
            flex: 1 0 0;
            & > div {
                display: flex;
                align-items: center;
                cursor: pointer;
                position: relative;
                ::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    border-top: 3px solid ${color.white};
                    border-right: 3px solid transparent;
                    border-left: 3px solid transparent;
                }
                span {
                    text-transform: uppercase;
                    font-family: anton;
                    text-align: center;
                    font-size: 1.25rem;
                    padding: 0 1rem 0 0.5rem;
                    color: ${color.white}; 
                    user-select: none;
                }
            }
            ${mq[2]}{
                & > div {
                    ::after {
                        border-top: 3px solid ${color.dark};
                    }
                    span {
                        color: ${color.dark};
                    }
                }
            }
        `}>
            <div onClick={show} tabIndex={0} onKeyDown={show} role='button'>
                <Icons
                    icon= "language"
                    style={css`
                        fill: ${color.white};
                        ${mq[2]}{
                            fill: ${color.dark};
                        }
                    `}
                    size= {25}
                />
                <span>
                    {data}
                </span>
            </div>
        </div>
    )
}

export const Menulanguage = ({toggle}) => {
    const query = useStaticQuery(graphql`
        query {
            allLang {
                nodes {
                lang
                id
                }
            }
        }
    `)
    const lang = query.allLang.nodes
    return (
        <>
            {toggle && (
                <ul css={css`
                    position: absolute;
                    right: 0;
                    list-style: none;
                    background-color: ${color.white};
                    padding: 1rem 1.5rem;
                    text-align: center;
                    border: 1px solid ${color.dark};
                    font-family: anton;
                    text-transform: uppercase;
                `}>
                    {lang.map(node => (
                        <li key={node.id}><Link to={`/${node.lang}`}>{node.lang}</Link></li>
                    ))}                            
                </ul>
            )}
        </>
    )
}

export default Header