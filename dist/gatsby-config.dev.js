"use strict";

/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 14:47:39
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
var path = require('path');

var themeOptions = require('./src/utils/siteConfig.js');

var config = require('./src/utils/siteConfig.js');

var generateRSSFeed = require('./src/utils/rss/generate-feed');

var ghostConfig;

try {
  ghostConfig = require('./.ghost');
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY
    }
  };
} finally {
  var _ref = process.env.NODE_ENV === 'development' ? ghostConfig.development : ghostConfig.production,
      apiUrl = _ref.apiUrl,
      contentApiKey = _ref.contentApiKey;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error("GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README."); // eslint-disable-line
  }
}

if (process.env.NODE_ENV === 'production' && config.siteUrl === 'http://localhost:8000' && !process.env.SITEURL) {
  throw new Error("siteUrl can't be localhost and needs to be configured in siteConfig. Check the README."); // eslint-disable-line
}
/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/


var standardBasePath = '/';
var basePath = themeOptions.basePath || standardBasePath;
module.exports = {
  siteMetadata: {
    siteTitle: 'Cara',
    siteTitleAlt: 'Cara - ',
    siteHeadline: 'Cara - Gatsby Theme from @lekoarts',
    siteUrl: process.env.SITEURL || config.siteUrl,
    siteDescription: 'Playful and Colorful One-Page portfolio featuring Parallax effects and animations',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: '@lekoarts_de',
    basePath: basePath,
    language: 'english',
    image: '/banner.jpg',
    headline: 'hello',
    titleAlt: 'hello'
  },
  plugins: [{
    resolve: 'gatsby-source-ghost',
    options: {
      apiUrl: 'https://blog.oakwave.com',
      contentApiKey: '2c90a741e13ea16e4390cdb820'
    }
  }, {
    resolve: 'gatsby-plugin-theme-ui',
    options: {
      prismPreset: 'night-owl',
      preset: '@theme-ui/tailwind'
    }
  }, 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-plugin-sass',
    options: {
      sassOptions: {
        includePaths: ['./src']
      },
      useResolveUrlLoader: true,
      implementation: require('sass'),
      postCssPlugins: [require('postcss-preset-env'), require('postcss-import'), require('tailwindcss'), require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
      require('autoprefixer')]
    }
  }, 'gatsby-plugin-mdx',
  /**
       *  Content Plugins
       */
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: path.join(__dirname, 'src', 'pages'),
      name: 'pages'
    }
  }, // Setup for optimised images.
  // See https://www.gatsbyjs.org/packages/gatsby-image/
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: path.join(__dirname, 'src', 'images'),
      name: 'images'
    }
  }, {
    resolve: 'gatsby-source-ghost',
    options: process.env.NODE_ENV === 'development' ? ghostConfig.development : ghostConfig.production
  },
  /**
       *  Utility Plugins
       */
  'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-styled-components',
    options: {
      minify: false
    }
  }, {
    resolve: 'gatsby-plugin-anchor-links',
    options: {
      offset: -50
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: "".concat(__dirname, "/src/assets/images")
    }
  }, 'gatsby-transformer-sharp', 'gatsby-plugin-sharp', {
    resolve: 'gatsby-plugin-module-resolver',
    options: {
      root: './src',
      aliases: {
        assets: './assets',
        components: './components',
        sections: './sections',
        reusecore: './reusecore',
        theme: './theme'
      }
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/logos/symbol.png' // This path is relative to the root of the site.

    }
  }, {
    resolve: 'gatsby-plugin-ghost-manifest',
    options: {
      short_name: config.shortTitle,
      start_url: '/',
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: 'minimal-ui',
      icon: "static/".concat(config.siteIcon),
      legacy: true,
      query: "\n                {\n                    allGhostSettings {\n                        edges {\n                            node {\n                                title\n                                description\n                            }\n                        }\n                    }\n                }\n              "
    }
  }, {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: "\n                {\n                    allGhostSettings {\n                        edges {\n                            node {\n                                title\n                                description\n                            }\n                        }\n                    }\n                }\n              ",
      feeds: [generateRSSFeed(config)]
    }
  }, {
    resolve: 'gatsby-plugin-advanced-sitemap',
    options: {
      query: "\n                {\n                    allGhostPost {\n                        edges {\n                            node {\n                                id\n                                slug\n                                updated_at\n                                created_at\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostPage {\n                        edges {\n                            node {\n                                id\n                                slug\n                                updated_at\n                                created_at\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostTag {\n                        edges {\n                            node {\n                                id\n                                slug\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostAuthor {\n                        edges {\n                            node {\n                                id\n                                slug\n                                profile_image\n                            }\n                        }\n                    }\n                }",
      mapping: {
        allGhostPost: {
          sitemap: 'posts'
        },
        allGhostTag: {
          sitemap: 'tags'
        },
        allGhostAuthor: {
          sitemap: 'authors'
        },
        allGhostPage: {
          sitemap: 'pages'
        }
      },
      exclude: ['/dev-404-page', '/404', '/404.html', '/offline-plugin-app-shell-fallback'],
      createLinkInHead: true,
      addUncaughtPages: true
    }
  }, 'gatsby-plugin-catch-links', 'gatsby-plugin-react-helmet', 'gatsby-plugin-force-trailing-slashes', 'gatsby-plugin-offline'],
  flags: {
    FAST_DEV: false,
    LMDB_STORE: false
  }
};