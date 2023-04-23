import React from "react";
import Header from "./header";
import Layout from "../../components/layout";
import Main from "./content/main";
import Footer from "./footer";

const Template = ({data}) => {
    const navactive = (Indexli) => {
        const navAktivMobile = document.querySelectorAll('.navMobile li');
          for (let i = 0; i < navAktivMobile.length; i++) {
              navAktivMobile[i].className = navAktivMobile[i].className.replace(" active", "");
          }
        navAktivMobile[Indexli-1].className += " active";
      }
       const [scrollPosition, setScrollPosition] = React.useState(0)
      React.useEffect(() => {
        const handleScroll = () => {
          const scroll = window.scrollY
          setScrollPosition(scroll)
        }
        const navigation = (s) => {
          const service = document.querySelector('#mainTitleArea')
          const serviceTop = service.offsetTop
          const contact = document.querySelector('#contact')
          const contactTop = contact.offsetTop - 100;
          if ( s >= serviceTop && s <= contactTop  ) {
                document.querySelector('.currentLine').style.cssText = 'left:168px; width: 70px';
                document.querySelector('.navMobile .currentLine').style.cssText = 'left: 5.4rem; width: 4.2rem';
                navactive(2)
          }else if ( s >= contactTop ) {
                document.querySelector('.currentLine').style.cssText = 'left: 317px; width: 62px';
                document.querySelector('.navMobile .currentLine').style.cssText = 'left: 12.1rem;width:3.90rem';
                navactive(3)
          }else {
            document.querySelector('.currentLine').style.cssText = 'left: 40px; width: 50px';
            document.querySelector('.navMobile .currentLine').style.cssText = 'left: 0; width: 2.9rem';
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
        <Layout>
            <Header data={data} scroll={scrollPosition}/>
            <Main data={data} scroll={scrollPosition}/>
            <Footer data={data}/>
        </Layout>
    )
}


export default Template