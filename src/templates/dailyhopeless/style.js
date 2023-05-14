import { css } from "@emotion/react";
import { mq, mx, color } from "../../components/rootCss";
import { startHeader } from "./animate"



// header
export const sNav = css`
    width: 100%;
    padding: 0;
    position: absolute;
    z-index: 49;
    header {
        margin: 0 1rem;
        position: relative;
        nav {
            display: flex;
            align-items: center;
            padding: 1rem 0;
 
            
        }
    }
    ${mq[2]}{
        background-color: ${color.white90};
        position: fixed;
        animation: ${startHeader} 2.5s;
        box-shadow: 0 1px 0 0 ${color.dark20};
        header {
            margin: 0 3rem;
            nav {
                > .menu {
                display: flex;
                justify-content: center;
                position: absolute;
                width: 100%;
                
                }
            }
        }
    }
    ${mx[2]}{
        nav.resize {
            display: none;
        }
    }
`
export const sNavLogo = css`
    display: flex;
    justify-content: flex-start;
    flex: 1 0 0;
    align-items: center;
    circle {
        fill: ${color.white};
    }
    h1 {
        margin-left: 1rem;
        font-size: 1.5rem;
        color: ${color.white};
    }
    ${mq[2]}{
        & circle {
            fill:${color.yellow};
        }
        & h1 {
            color:${color.dark};
        }
    }

`
export const sNavMenu = css`
    display: none;
    ${mq[2]}{
        width: 26.3rem;
        font-family: anton;
        display: block;
        text-transform: capitalize;
        text-align: center;
        font-size: 1.25rem;
        position: relative;
        li {
            list-style: none;
            margin-right: 5rem;
            display: inline-block;
        }
        li:nth-last-of-type(-n+2) {
            margin-right: 0;
        }
    }
`
export const about = css`
        width: 100%;
        position: absolute;
        padding: 0 1rem;
        opacity: 0;
        top: 14rem;
        h3 {
            font-size: 2.25rem;
            text-align: center;
            color: ${color.white};
            font-family: anton;
        }
        p {
            color: ${color.dark80};
            text-align: center;
            font-size: 1.25rem;
            margin-top: 3rem;

        }
        &.show {
            opacity: 1;
            transition-delay: .1s;
            z-index: 45;
        }
        ${mq[2]} {
            padding: 0 3rem;
            top: calc(50vh + 13rem);
            transition-delay: 0;
            h3 {
                font-size: 4.5rem;
                color: ${color.dark};
            }
            p {
                white-space: pre-wrap;
                margin-top: 1.5rem;
                padding: 0 3rem;


            }
        }  
`

export const contactc = css`
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
                padding: 3rem;
                flex-direction: row;
                p {
                    width: 33.33333333%;
                    text-align: left;
                }
            }
        }
    }
`

export const navmobile = css`
    box-shadow: 0 1px 0 0 ${color.dark20};
        overflow-x: hidden;
        position: sticky;
        z-index: 49;
        top: 0;
        background-color: ${color.white};
        text-transform: capitalize;
        text-align: center;
        ul {
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
        }
        ${mq[2]}{
            display: none;
        }
`

export const servicec = css`
 .odd {
    background-color: ${color.dark20};
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
`

export const footer = css`
    > div {
        > a {
            display: flex;
            background-color: ${color.yellow};
            padding: 0.5rem 1rem;
            margin-bottom: 2.5rem;
                circle {
                    fill: ${color.dark};
                }
                path {
                    fill: ${color.yellow};
                }
                h1 {
                    font-size: 1.5rem;
                    margin-left: 1rem;
                }
        }
    }
`