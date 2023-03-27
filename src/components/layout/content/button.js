import React, {useState, useEffect} from "react";
import Icons from "../icons";
import { css } from "@emotion/react";
import { color } from "../../rootCss";
import { firstLetter } from "../../utils";

const Button = ({name, pop, icon, link, iconsize}) => {
    const [show, setShow] = useState(false)
  

    useEffect (() => {
        function listing () {
            setShow(false)
        }
        if (show && true) {
            window.addEventListener("click", listing,true)
        } 
    },[show])
    return(
    <div css = {css`
        position: relative;
        display: flex;
        a {
            background-color: ${color.yellow};
            padding: 1rem;
            align-self: flex-start;
            align-items: center;
            display: flex;
            user-select: none;
            text-transform: capitalize;
            border-radius: 0.31rem;
            svg {
                margin-left: 1rem;
            }
        }
        > div {
            position: absolute;
            border: 1px solid ${color.dark20};
            border-radius: 3px;
            box-shadow: 1px 1px 5px ${color.dark20};
            left: 12rem;
            top: 0;
            transition: all .2s ease;
            padding: 1rem 1.5rem;
            background-color: ${color.white};
            font-size: 0.8rem;
            &::before,  &::after {
                position: absolute;
                content: "";
            }
            &::before {
                border: 6px solid transparent;
                border-right: 6px solid ${color.dark20};
                left: -12px;
                top: 20px;
            }
            &::after {
                border: 5px solid transparent;
                border-right: 5px solid ${color.white};
                left: -10px;
                top: 21px;
            }
        }
    `}>
       <a href={link} id="nopage"  onClick={() => {
            setShow(!show)
        }}>
            <span>{name}</span>
                <Icons 
                    size={iconsize}
                    icon={icon}
                /> 
        </a>
        { link === null && show ? 
        <div id="Nopages" >
            <span>{firstLetter(pop)}</span>
        </div>
        : ""
        }
    </div>
)}

export default Button