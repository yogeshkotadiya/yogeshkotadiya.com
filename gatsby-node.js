const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ _, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        Images: path.resolve(__dirname, "static/Images"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`./src/templates/blog-post.js`);
  const { data, errors } = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                editBlog
              }
              frontmatter {
                title
              }
              code {
                scope
              }
            }
          }
        }
      }
    `
  );

  if (errors) {
    return Promise.reject(errors);
  }
  //reate blog posts pages.
  const posts = data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    let slug = node.frontmatter.slug || createFilePath({ node, getNode });
    slug = slug.replace(/\/$/g, "");
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${slug}`,
    });
    createNodeField({
      name: `editBlog`,
      node,
      value: `https://github.com/yogeshkotadiya/yogeshkotadiya.com/edit/master${node.fileAbsolutePath.replace(
        __dirname,
        ""
      )}`,
    });
  }
};
