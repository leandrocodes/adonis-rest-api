'use strict'

class PostController {
  index() {
    return { greeting: 'Hello World' }
  }

  store({ request }) {
    //console.log(req)
    const { titulo, corpo } = request.all()
    const post = {
      titulo,
      corpo,
    }
    console.log(post)
    return { mensagem: 'Store method by a post request.', post }
  }
}

module.exports = PostController
