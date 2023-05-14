import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../../components/button";
import { contactc } from "../style";

const Contact = ({data, email}) => {
    const contact = data[0].contact[0]
    return (
        <section id="contact" css={contactc}>
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