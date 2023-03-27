"use strict"


exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createRedirect, createPage } = actions
    createRedirect({
        fromPath: `/`,
        redirectInBrowser: true,
        toPath: `/en/`,
      })
      createRedirect({
        fromPath: `/`,
        redirectInBrowser: true,
        toPath: `/id/`,
        conditions: {
          country: [`id`],
          language: [`id`]
        }
      })
      // createPage({
      //   path: "/px-to-rem-converter",
      //   component: require.resolve("./src/app/px-to-rem-converter.js"),
      //   context: {},
      //   defer: true,
      // })
      // const y = await graphql(
      //   `query {
      //     allLang{
      //       nodes {
      //         lang
      //       }
      //     }
      //   }
      //   `
      // )

      // y.data.allLang.nodes.forEach( node => {
      //   createPage({
      //     path: `/${node.lang}/notfound`,
      //     component: require.resolve("./src/templates/notfound.js"),
      //     context: {
      //       language: node,
      //     },
      //     defer: true,
      //   })
        
      // });
}


// exports.createSchemaCustomization = ({ actions, graphql }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//   type Lang implements Node {
//     all: AllLang @link(by: "services")
//   }

//   `
//   createTypes(typeDefs)
// }