import React from "react";
import {Link} from "gatsby";
import Icons from "./icons";
import { useComponentVisible } from "./button";


export const Navigation = ({children, style}) => {
    return(
    <div css={style}>
        <header>
            {children}
        </header>
    </div>
)}

export const ButtonLanguage = ({ className, size, data, children, link}) => {
    const {ref,isComponentVisible,setIsComponentVisible } = useComponentVisible(false)
    const show = () => {
        setIsComponentVisible(!isComponentVisible);
      };
    return (
        <div className={className} ref={ref}>
            <div onClick={show} tabIndex={0} onKeyDown={show} role='button'>
            <Icons
                icon= "language"
                size= {25 || {size} }/>
                {children}
            </div>
            {isComponentVisible && (
                <ul>
                {data.map((node, i) => (
                        <li key={node}>
                            <Link to={`/${node}/${ link == null ? "" : link[i]}`}>{node}</Link>
                        </li>
                    )) } 
                </ul>
            )}
        </div>
     
    )
}