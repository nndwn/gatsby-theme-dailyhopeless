import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../../../components/button";
import Icons from "../../../components/icons";
import { servicec } from "../style";


const Services = ({data}) => {
    return (
        <section id="services" css={servicec}>
        {data[0].services.map((node, index) =>{
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
                                name={data[0].textbutton}
                                pop ={data[0].popbutton}
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