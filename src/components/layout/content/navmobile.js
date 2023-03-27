import React from "react";
import Nav, {Currentline} from "../nav";
import { css } from "@emotion/react";
import { mq, color } from "../../rootCss";

const NavMobile = ({data}) => (
    <nav className="navMobile" css={css`
        box-shadow: 0 1px 0 0 ${color.dark20};
        overflow-x: hidden;
        position: sticky;
        z-index: 49;
        top: 0;
        background-color: ${color.white};
        text-transform: capitalize;
        text-align: center;
        ${mq[2]}{
            display: none;
        }
    `}>
        <Nav
            menu={data.menu}
            style ={css`
                display: inline-block;
                font-family: anton;
                font-size: 1.25rem;
                position: relative;
                li {
                    display: inline-block;
                    opacity: .8;
                    margin: 0 1.25rem;
                    padding: 0.5rem 0;
                }
                li:nth-last-of-type(1){
                    padding: 0;
                }
                .active {
                    opacity: 1;
                }
            `}>
        <Currentline/>
        </Nav>
    </nav>
)

export default NavMobile