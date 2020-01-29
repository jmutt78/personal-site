const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
query GET_POSTS($first: Int $after: String){
wpgraphql {
posts(
first: $first
after: $after
where: {
  categoryName: "my story"
}
) {
  pageInfo {
    endCursor
    hasNextPage
  }
  nodes {
    id
    uri
    postId
    title
  }
}
}
}
`

  const { createPage } = actions
  const allPosts = []

  const fetchPages = async varables =>
    await graphql(GET_POSTS, varables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        return fetchPages({ first: varables.first, after: endCursor })
      }
      return allPosts
    })

  await fetchPages({ first: 100, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    allPosts.map(post => {
      console.log(`create page: ${post.uri}`)
      createPage({
        path: `/${post.uri}`,
        component: postTemplate,
        context: post,
      })
    })
  })
}
