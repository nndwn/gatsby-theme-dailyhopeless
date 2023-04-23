import { keyframes } from "@emotion/react";

// header
export const startHeader = keyframes`
        0% {
        transform: translateY(-105%);
        }
        82% {
        transform: translateY(-105%);
        }
        to {
        transform: translateY(0);
        }
`

export const start = keyframes`
    0% {
        opacity: 1;
        transform: scaleX(0);
        transform-origin: left center;
    }
    7% {
        transform-origin: left center;
    }
    8% {
        transform: scaleX(1);
        transform-origin: right center;
    }
    9% {
        transform: scaleX(1);
    }
    13% {
        transform: scaleX(1);
    }
    25% {
        transform: scaleX(1);
    }
    30% {
        opacity: 1;
    }
    35% {
        opacity: 0;
    }
    40% {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(0);
        transform-origin: right center;
        opacity: 0;
    }
`
export const starttext = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 1;
    }
    39% {
        opacity: 0;
    }
    to {
        content: "";
        opacity: 0;
    }
`
export const startTextHeadline = keyframes `
    0% {
        opacity: 0;
    }
    93% {
        opacity: 0;
    }
    95% {
        opacity: 1;
    }
    to {
        opacity: 1;
    }
`
export const startImageHeadline = keyframes `
    0% {
        width: 0;
        height: 10rem;
        opacity: 0;
    }
    65% {
        min-width: 45rem;
        width: 45rem;
        height: 10rem;
        opacity: 0;
    }
    66% {
        opacity: 1;
    }
    72% {
        width: 45rem;
        height: 10rem;
    }
    to {
        min-width: 45rem;
        width: 100vw;
        height: 100vh;
    }
`
export const fade = keyframes`
    0% {
        opacity: 0;
        transform: scale(1.5);
        z-index: 2;
    }
    15% {
        opacity: 1;
        z-index: 2;
    }
    49% {
        opacity: 1;
        z-index: 2;
    }
    50% {
        z-index: 1;
    }
    85% {
        opacity: 0;
    }
    to {
        opacity: 0;
        transform: scale(1);
    }
`
export const startImageMove = keyframes `
    0% {
        top: calc(-50vh + 10rem);
    }
    72% {
        top: calc(-50vh + 10rem);
    }
    to {
        top: 0;
    }
`