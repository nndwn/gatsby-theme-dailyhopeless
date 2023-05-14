import React from "react";
import { Footerr, Socialmedia } from "../../components/footer";
import { footer } from "./style";
import Logo from "../../components/logo";

const Footer = ({data}) => {
    return(
        <Footerr style={footer} data={data.primary}>
            <Logo
                size={35}
            />
            <Socialmedia data={data.primary.socialmedia}/>
        </Footerr>
)}
export default Footer