import React from "react";
import Css from "../rootCss";

const Layout = ({page, children}) => {
    return(
    <Css>
        {children}
    </Css>
)}

export default Layout