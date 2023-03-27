import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "./button";
import Icons from "../icons";
import { css } from "@emotion/react";
import { mq, color } from "../../rootCss";

const Services = ({data}) => {
    return (
        <section id="services" css={css`
            .odd {
                background-color: ${color.dark20};
            }
            p {
                
            }
            .content {
                padding: 2.5rem 0;
                > div {
                    margin: 0 1rem;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                
                    .datatext {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        order: 2;
                        > div {
                            margin-bottom: 2rem;
                            h1 {
                                font-family: anton;
                                font-size: 3rem;
                                margin: 1rem 0;
                            }
                            p {
                                color: ${color.dark80};
                                -webkit-line-clamp: 5;
                                -webkit-box-orient: vertical;
                                display: -webkit-inline-box;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                    .image-right {
                        position: relative;
                        width: 100%;
                        height: 25rem;
                        order: 1;
                        .icon {
                            position: absolute;
                            background-color: ${color.yellow};
                            padding: 1rem;
                            z-index: 46;
                            svg {
                                display: block
                            }
                        }
                        .img {
                            border: 0.5px solid ${color.dark20};
                            border-radius: 0.31rem;
                            box-shadow: 1px 1px 2px var(${color.dark20});
                        }
                        .imggatsby {
                            position: unset !important;
                        }
                        p {
                            bottom: 0.6rem;
                            opacity: .5;
                            right: 1rem;
                            z-index: 46;
                            position: absolute;
                            font-size: .5rem;
                            color: ${color.white}
                        }
                        }
                    }
                }
            
            ${mq[2]}{
                margin-top: 12rem;
                .even {
                    .datatext {
                        padding-left: 2.25rem;
                    }
                    .icon {
                        right:   -2rem;
                        top:  -2rem;
                    }
                }
                .odd {
                    .datatext{
                        padding-right: 2.25rem;
                        order: 1;
                    }
                    .image-right {
                        order: 2 !important;
                    }
                    .icon {
                        left:   -2rem;
                        top:  -2rem;
                    }
                }
                .content {
                    margin: 0 auto;
                    max-width: 75rem;
                    > div {
                        padding: 3rem 0;
                        margin: 0 3rem;
                        .datatext {
                            width: 41.66666667%;
                        }
                        .image-right {
                            width: 58.33333333%;
                        }
                        .icon {
                            border-radius: 0.31rem;
                        }
                    } 
                }
            }
        `}>
        {data.services.map((node, index) =>{
            let oddevent =  index % 2 === 0 
            return (
            <div className={oddevent ?"odd": "even" } key={node.title}>
                <div className="content">
                    <div>
                        <div className="datatext">
                            <div>
                                <h1>{node.title}</h1>
                                <p>{node.description}</p>
                            </div>
                            <Button 
                                name={data.textbutton}
                                pop ={data.popbutton}
                                icon = "more"
                                link = {node.link}
                                iconsize= {16}
                            />
                        </div>
                        <div className="image-right">
                            <div className="icon">
                            <Icons
                                size={40}
                                icon= {node.icon}
                            />
                            </div>
                                <GatsbyImage
                                    image={getImage(node.image)}
                                    alt= {node.alt}
                                    className="imggatsby"
                                    loading="eager"
                                    imgClassName="img"
                                />
                            <p>
                            {node.credit}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
   )})}
    </section>
    )
}

export default Services