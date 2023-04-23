/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `dailyhopeless`,
    siteUrl: `https://www.dailyhopeless.com`,
    "color": "#FFD400",
    "location": "batam",
    "country": "indonesia",
    "email": "dailyhopeless.dev@gmail.com",
    "author": "nndwn",
    "banner": "/dailyhopeless.jpg",
    "socialmedia": [
      {
        "name": "github",
        "link": "https://github.com/nndwn"
      },
      {
        "name": "instagram",
        "link": "https://www.instagram.com/nndwn_"
      },
      {
        "name": "facebook",
        "link": "https://www.facebook.com/nndwn/"
      },
      {
        "name": "twitter",
        "link": "https://www.twitter.com/nndwn"
      }
    ]
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RR06VWV1K2", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], 
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options : {
        typeName : ({node}) => node.name.charAt(0).toUpperCase() + node.name.slice(1)
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
          icon: 'src/images/icon.png',
      }
   },
  {
    resolve: `gatsby-plugin-emotion`,
    options: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: `[local]`,
      cssPropOptimization: true,
    },
  },
],
};