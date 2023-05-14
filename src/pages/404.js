import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Logo from "../components/logo"
import { css } from "@emotion/react"
import { color } from "../components/rootCss"

const notfound = css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${color.white};
    background: ${color.dark};
    p {
        font-size: 0.8rem;
        margin-bottom: 3rem;
    }
`

const NotFoundPage = () => {
  return (
    <Layout>
       <div css={notfound}>
            <div>
                <p>So dark, Nothing in here</p>
                <Logo
                    size={20} 
                    style={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        circle {
                            fill: ${color.white};
                        }
                        h1 {
                            font-size: 1rem;
                            margin-left: 0.5rem;
                        }
                    `}
                />
            </div>
        </div>
    </Layout>
  )
}


export default NotFoundPage

export const Head = () => (
  <>
      <Seo 
          robots="nofollow, noindex"
          title= "404 Hopeless"
      />
  </>
)
