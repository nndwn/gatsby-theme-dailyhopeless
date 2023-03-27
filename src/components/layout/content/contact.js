import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TemplateData from "../../templateData";
import Button from "./button";
import { css  } from "@emotion/react";
import { mq, color } from "../../rootCss";

const Contact = ({data}) => {
    const contact = data.contact[0]
    const email = TemplateData().email
    return (
        <section id="contact" css={css`
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            padding: 3rem 0;
            > div {
                margin: 0 1rem;
                .text {
                    display: flex;
                    justify-content: center;
                    padding: 3rem;
                    flex-direction: column;
                    align-items: center;
                    p {
                        color: ${color.white};
                        font-size: 1.5rem;
                        text-align: center;
                        padding: 3rem 1.25rem;

                    }
                }
                .image {
                
                    &::before {
                        background: ${color.dark50};
                        content: "";
                        display: inline-block;
                        height: 100%;
                        left: 0;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 100%;
                        z-index: -1;
                    }
                    .imggatsby {
                        position: unset!important;
                        div {
                            display: none!important;
                        }
                    }
                    img {
                        z-index: -2;
                    }

                }
            }
            ${mq[2]} {
                & > div {
                    margin: 0 3rem;
                    .text {
                        flex-direction: row;
                        p {
                           width: 33.33333333%;
                           text-align: left;
                        }
                    }
                }
            }
        `}>
            <div>
                <div className="text">
                    <p>
                        {contact.text}
                    </p>
                    <Button
                        name={contact.button}
                        link={`mailto:${email}`}
                        iconsize={25}
                    />
                </div>
                <div className="image">
                    <GatsbyImage 
                        image={getImage(contact.image)}
                        alt={contact.alt}
                        className="imggatsby"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact