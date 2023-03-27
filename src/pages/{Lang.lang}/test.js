import React from "react";
import Nav from "../../components/layout/nav";
import { graphql } from "gatsby";

const Testaja = ({data}) => {
    return (
        <Nav menu={data.lang.menu} />
    )
}

export const query = graphql`
query($id: String) {
  lang(id: {eq: $id}) {
    menu {
      name
      link
    }
  }
}`

export default Testaja