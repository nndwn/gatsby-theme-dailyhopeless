import React,{useEffect, useState} from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout";
import Seo from "../components/head/seo";
import Header from "../components/layout/header/header";
import Main from "../components/layout/content/main";
import Footer from "../components/layout/footer/footer";

const Lang = ({children, data}) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navactive = (Indexli) => {
      const navAktivMobile = document.querySelectorAll('.navMobile li');
      for (let i = 0; i < navAktivMobile.length; i++) {
          navAktivMobile[i].className = navAktivMobile[i].className.replace(" active", "");
      }
      navAktivMobile[Indexli-1].className += " active";
  }
  useEffect(() => {
      const handleScroll = () => {
          const scroll = window.scrollY
          setScrollPosition(scroll)
          //navigation()
      }
      const navigation = (s) => {
          const service = document.querySelector('#mainTitleArea');
          const serviceTop = service.offsetTop;
          const contact = document.querySelector('#contact');
          const contactTop = contact.offsetTop - 100;
              if ( s >= serviceTop && s <= contactTop  ) {
                  if (data.lang.lang ===  "en") {
                      document.querySelector('.currentLine').style.cssText = 'left:168px; width: 70px';
                  } else {
                      document.querySelector('.currentLine').style.cssText = 'left:178px; width: 66px';
                  }
                  
              } else if ( s >= contactTop ){
                  if (data.lang.lang ===  "en") {
                      document.querySelector('.currentLine').style.cssText = 'left: 317px; width: 62px';
                  } else {
                      document.querySelector('.currentLine').style.cssText = 'left:323px; width: 56px';
                  }
              } else {
                  if (data.lang.lang ===  "en") {
                      document.querySelector('.currentLine').style.cssText = 'left: 40px; width: 50px';
                  } else {
                      document.querySelector('.currentLine').style.cssText = 'left: 42px; width: 56px';
                  }
              }
              if ( s >= serviceTop && s <= contactTop  ) {
                      if (data.lang.lang ===  "en") {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 5.4rem; width: 4.2rem';
                      } else {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left:6rem; width: 4.1rem';
                      }
                      navactive(2)
                  } 
                  else if (s >= contactTop ){
                      if (data.lang.lang ===  "en") {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 12.1rem;width:3.90rem';
                      } else {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 12.5rem; width:3.5rem';   
                      }
                      navactive(3)
                  } 
                  else {
                      if (data.lang.lang ===  "en") {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 0; width: 2.9rem';
                      } else {
                          document.querySelector('.navMobile .currentLine').style.cssText = 'left: 0; width: 3.5rem';
                      }
                      navactive(1)    
              }
          }
      
      navigation(scrollPosition)
      window.addEventListener('scroll', handleScroll,{ passive: true})
      return () => {
          document.removeEventListener('scroll', handleScroll);
          
        }
  },[scrollPosition])
    return(
        <Layout page={data.lang}>
              <Header data={data.lang} scroll={scrollPosition} />
              <Main data={data.lang} scroll={scrollPosition} />
              <Footer data={data.lang}/>
            {children}
        </Layout>
    )
}

export const Head = ({data, scroll}) => {
  const s = data.lang
  return(
    <>
      <Seo 
        desc= {s.description}
        keyword ={s.keyword}
        lang = {s.lang}
        language = {s.language}
        path={s.lang}
        />
    </>
  )
}

export const query = graphql`
query($id: String) {
  lang(id: {eq: $id}) {
    lang
    language
    description
    keyword
    menu {
      name
      link
    }
    headline {
      h1
      h2
    }
    popbutton
    textbutton
    contact {
      button
      image {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: BLURRED
            formats: JPG
            layout: FULL_WIDTH
          )
        }
      }
      text
      alt
    }
    services {
      alt
      credit
      description
      title
      icon
      link
      image {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: JPG
          )
        }
      }
    }
    slide {
      alt
      image {
        childImageSharp {
          gatsbyImageData(
            formats: JPG
            quality: 80
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
}
`

export default Lang