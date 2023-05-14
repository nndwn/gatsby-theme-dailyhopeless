import React from "react"
import Template from "../templates/dailyhopeless/template"
import Seo from "../components/seo"
import Data from "../components/Data"


const IndexPage = () => {
  return (
    <Template data={Data()} />
  )
}

export default IndexPage

export const Head = () => {
  return(
    <>
      <Seo 
        desc= {Data().second[0].description}
        keyword ={Data().second[0].keyword}
        lang = {Data().second[0].lang}
        language = {Data().second[0].language}
        />
    </>
   
  )
}
