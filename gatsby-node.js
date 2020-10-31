const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      get_lollies {
        getLollies {
          color1
          color2
          color3
          link
          sender
          reciever
          message
        }
      }
    }
  `)

  data.get_lollies.getLollies.forEach(node => {
    createPage({
      path: `lolly/${node.link}`,
      component: path.resolve("./src/templates/template.tsx"),
      context: {
        color1: node.color1,
        color2: node.color2,
        color3: node.color3,
        link: node.link,
        message: node.message,
        sender: node.sender,
        reciever: node.reciever,
      },
    })
  })
}
