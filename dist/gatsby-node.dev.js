"use strict";

/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 15:56:44
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
var path = require("path");

var _require = require("./src/utils/siteConfig"),
    postsPerPage = _require.postsPerPage;

var _require2 = require("gatsby-awesome-pagination"),
    paginate = _require2.paginate;

var themeOptions = require('./src/utils/siteConfig');
/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */


var standardBasePath = "/";

exports.createPages = function _callee(_ref, themeOptions) {
  var actions, createPage, basePath;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          actions = _ref.actions;
          createPage = actions.createPage;
          basePath = themeOptions.basePath || standardBasePath;
          createPage({
            path: basePath,
            component: require.resolve("src/templates/index.js")
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createPages = function _callee2(_ref2) {
  var graphql, actions, createPage, result, tags, authors, pages, posts, indexTemplate, tagsTemplate, authorTemplate, pageTemplate, postTemplate;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          graphql = _ref2.graphql, actions = _ref2.actions;
          createPage = actions.createPage;
          _context2.next = 4;
          return regeneratorRuntime.awrap(graphql("\n        {\n            allGhostPost(sort: { order: ASC, fields: published_at }) {\n                edges {\n                    node {\n                        slug\n                    }\n                }\n            }\n            allGhostTag(sort: { order: ASC, fields: name }) {\n                edges {\n                    node {\n                        slug\n                        url\n                        postCount\n                    }\n                }\n            }\n            allGhostAuthor(sort: { order: ASC, fields: name }) {\n                edges {\n                    node {\n                        slug\n                        url\n                        postCount\n                    }\n                }\n            }\n            allGhostPage(sort: { order: ASC, fields: published_at }) {\n                edges {\n                    node {\n                        slug\n                        url\n                    }\n                }\n            }\n        }\n    "));

        case 4:
          result = _context2.sent;

          if (!result.errors) {
            _context2.next = 7;
            break;
          }

          throw new Error(result.errors);

        case 7:
          // Extract query results
          tags = result.data.allGhostTag.edges;
          authors = result.data.allGhostAuthor.edges;
          pages = result.data.allGhostPage.edges;
          posts = result.data.allGhostPost.edges; // Load templates

          indexTemplate = path.resolve("./src/templates/blog.js");
          tagsTemplate = path.resolve("./src/templates/tag.js");
          authorTemplate = path.resolve("./src/templates/author.js");
          pageTemplate = path.resolve("./src/templates/page.js");
          postTemplate = path.resolve("./src/templates/post.js"); // Create tag pages

          tags.forEach(function (_ref3) {
            var node = _ref3.node;
            var totalPosts = node.postCount !== null ? node.postCount : 0; // This part here defines, that our tag pages will use
            // a `/tag/:slug/` permalink.

            var url = "/tag/".concat(node.slug);
            var items = Array.from({
              length: totalPosts
            }); // Create pagination

            paginate({
              createPage: createPage,
              items: items,
              itemsPerPage: postsPerPage,
              component: tagsTemplate,
              pathPrefix: function pathPrefix(_ref4) {
                var pageNumber = _ref4.pageNumber;
                return pageNumber === 0 ? url : "".concat(url, "/page");
              },
              context: {
                slug: node.slug
              }
            });
          }); // Create author pages

          authors.forEach(function (_ref5) {
            var node = _ref5.node;
            var totalPosts = node.postCount !== null ? node.postCount : 0; // This part here defines, that our author pages will use
            // a `/author/:slug/` permalink.

            var url = "/author/".concat(node.slug);
            var items = Array.from({
              length: totalPosts
            }); // Create pagination

            paginate({
              createPage: createPage,
              items: items,
              itemsPerPage: postsPerPage,
              component: authorTemplate,
              pathPrefix: function pathPrefix(_ref6) {
                var pageNumber = _ref6.pageNumber;
                return pageNumber === 0 ? url : "".concat(url, "/page");
              },
              context: {
                slug: node.slug
              }
            });
          }); // Create pages

          pages.forEach(function (_ref7) {
            var node = _ref7.node;
            // This part here defines, that our pages will use
            // a `/:slug/` permalink.
            node.url = "/".concat(node.slug, "/");
            createPage({
              path: node.url,
              component: pageTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug
              }
            });
          }); // Create post pages

          posts.forEach(function (_ref8) {
            var node = _ref8.node;
            // This part here defines, that our posts will use
            // a `/:slug/` permalink.
            node.url = "/".concat(node.slug, "/");
            createPage({
              path: node.url,
              component: postTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug
              }
            });
          }); // Create pagination

          paginate({
            createPage: createPage,
            items: posts,
            itemsPerPage: postsPerPage,
            component: indexTemplate,
            pathPrefix: function pathPrefix(_ref9) {
              var pageNumber = _ref9.pageNumber;

              if (pageNumber === 0) {
                return "/blog";
              } else {
                return "/page";
              }
            }
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  });
};