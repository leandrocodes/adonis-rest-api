'use strict'

class PostController {
  index() {
    return { greeting: 'Hello World' }
  }

  store() {
    return { mensagem: 'Store method by a post request.'}
  }
}

module.exports = PostController
