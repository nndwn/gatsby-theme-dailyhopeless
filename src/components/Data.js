import { graphql,useStaticQuery } from "gatsby";

const Data = () => {
    const query = useStaticQuery (graphql`
        query {
            site {
                siteMetadata {
                  title
                  siteUrl
                  color
                  location
                  country
                  email
                  author
                  banner
                  socialmedia {
                    link
                    name
                  }   
                }
              }
              allText {
                nodes {
                  menu {
                    name
                    link
                  }
                  headline {
                    h1
                    h2
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
                  description
                  keyword
                  language
                  lang
                  popbutton
                  textbutton
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
                }
                
           }
        }
    `)
    const primary = query.site.siteMetadata
    const second = query.allText.nodes
    return {primary, second}
}

export default Data
