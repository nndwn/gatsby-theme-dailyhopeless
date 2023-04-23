import React from "react";
import Icons from "./icons";
import { css } from "@emotion/react";
import { color } from "./rootCss";
import { firstLetter } from "./utils";

const Button = ({name, pop, icon, link, iconsize}) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    return(
    <div ref={ref} css = {css`
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
       <a href={link} id="nopage"  onClick={()=> {setIsComponentVisible(!isComponentVisible)}}>
            <span>{name}</span>
                <Icons 
                    size={iconsize}
                    icon={icon}
                /> 
        </a>
        {/* { link === null ? : null} */}
         {isComponentVisible && link === null && <div  id="Nopages" >
            <span>{firstLetter(pop)}</span>
        </div>}
        
    </div>
)}

export function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = React.useState(initialIsVisible);
    const ref = React.useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}

export default Button