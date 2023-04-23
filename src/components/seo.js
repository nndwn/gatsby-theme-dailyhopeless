import React from "react";
import Data from "./Data";
import { firstLetter } from "./utils";

const Seo = ({children, title, robots, keyword, desc, lang,language, path}) => {
    const {
        title : titledefault,
        siteUrl,
        color,
        banner
    } = Data().primary
    const seo = {
        title: title || titledefault,
        robots:  robots || "index , follow",
        keyword: keyword || null,
        desc: desc || null,
        lang : lang || "en" ,
        language: language || "english",
        path: path,
    }
    return (
        <>
            <Html data={seo.lang}/>
            <title>{firstLetter(seo.title)}</title>
            {/* standart seo */}
            <meta name="description" content={seo.desc} />
            <meta property="keyword" content={seo.keyword}/>
            <meta name="title" content={firstLetter(seo.title)}/>
            <meta name="robots" content={seo.robots}/>
            <meta name="language" content={seo.language}/>
            <meta name="msapplication-TileColor" content={color}/>
            <meta content={color} name="theme-color"/>
            <meta content={color} name="msapplication-navbutton-color"/>
            {/* og seo */}
            <meta property="og:title" content={firstLetter(seo.title)} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={seo.desc} />
            <meta property="og:url" content={siteUrl}/>
            <meta property="og:image" content={siteUrl+banner} />
            {/* twitter seo */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@nndwn" />
            { path == null ? "" :<link rel="canonical" href={`${siteUrl}/${seo.path}`} />}
            {children}
        </>
    )
}

const Html = ({children, data}) => (
    <html lang={data}>
       {children}
    </html>
)
export default Seo