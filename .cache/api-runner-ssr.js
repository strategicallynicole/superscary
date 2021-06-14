var plugins = [{
      name: 'gatsby-plugin-theme-ui',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[],"prismPreset":"night-owl","preset":"@theme-ui/tailwind"},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/nic/NewCode/scary"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"minify":false,"displayName":true,"fileName":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/logos/symbol.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"dfb664c57a6a4a9cc498bbdaf2ab91f4"},
    },{
      name: 'gatsby-plugin-ghost-manifest',
      plugin: require('/Users/nic/NewCode/scary/plugins/gatsby-plugin-ghost-manifest/gatsby-ssr'),
      options: {"plugins":[],"short_name":"Ghost","start_url":"/","background_color":"#e9e9e9","theme_color":"#15171A","display":"minimal-ui","icon":"static/favicon.png","legacy":true,"query":"\n                {\n                    allGhostSettings {\n                        edges {\n                            node {\n                                title\n                                description\n                            }\n                        }\n                    }\n                }\n              "},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n                {\n                    allGhostSettings {\n                        edges {\n                            node {\n                                title\n                                description\n                            }\n                        }\n                    }\n                }\n              ","feeds":[{"query":"\n        {\n            allGhostPost(\n                sort: {order: DESC, fields: published_at}\n            ) {\n                edges {\n                    node {\n                        # Main fields\n                        id\n                        title\n                        slug\n                        featured\n                        feature_image\n\n                        # Dates unformatted\n                        created_at\n                        published_at\n                        updated_at\n\n                        # SEO\n                        excerpt\n                        meta_title\n                        meta_description\n\n                        # Authors\n                        authors {\n                            name\n                        }\n                        primary_author {\n                            name\n                        }\n                        tags {\n                            name\n                            visibility\n                        }\n\n                        # Content\n                        html\n\n                        # Additional fields\n                        url\n                        canonical_url\n                    }\n                }\n            }\n        }\n  ","output":"/rss"}]},
    },{
      name: 'gatsby-plugin-advanced-sitemap',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[],"query":"\n                {\n                    allGhostPost {\n                        edges {\n                            node {\n                                id\n                                slug\n                                updated_at\n                                created_at\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostPage {\n                        edges {\n                            node {\n                                id\n                                slug\n                                updated_at\n                                created_at\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostTag {\n                        edges {\n                            node {\n                                id\n                                slug\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostAuthor {\n                        edges {\n                            node {\n                                id\n                                slug\n                                profile_image\n                            }\n                        }\n                    }\n                }","mapping":{"allGhostPost":{"sitemap":"posts"},"allGhostTag":{"sitemap":"tags"},"allGhostAuthor":{"sitemap":"authors"},"allGhostPage":{"sitemap":"pages"}},"exclude":["/dev-404-page","/404","/404.html","/offline-plugin-app-shell-fallback"],"createLinkInHead":true,"addUncaughtPages":true},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/Users/nic/NewCode/scary/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
