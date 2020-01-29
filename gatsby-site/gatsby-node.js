/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const createPosts = require(`./gatsby/createPosts.js`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
}
