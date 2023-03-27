import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/head/seo"
import Logo from "../components/layout/logo"
import { css } from "@emotion/react"

const notfound = css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background: var(--dark);
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
                            fill: var(--white);
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

export const Head = ({data}) => (
  <>
      <Seo 
          robots="nofollow, noindex"
          title= "404 Hopeless"
      />
  </>
)
