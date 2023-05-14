import React from "react";
import Headline from "./headline";
import About from "./about";
import NavMobile from "./navmobile";
import Services from "./services";
import Contact from "./contact";


const Main =({data, scroll}) => {
    return(
    <main >
        <Headline 
            data={data.second} 
            title={data.primary.title} 
            scroll={scroll}/>
        <About data={data.second} scroll={scroll}/>
        <NavMobile data={data.second.map(node => (node.menu))}/>
        <Services data={data.second}/>
        <Contact data={data.second} email={data.primary.email}/>
    </main>
)}

export default Main