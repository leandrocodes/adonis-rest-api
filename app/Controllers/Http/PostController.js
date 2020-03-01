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
      corpo
    }
    console.log(post)
    return { message: 'Store method by a post request.', post }
  }

  update({ request, response, params }) {
    return { message: 'Update method by a put request.', id: params.id }
	}
	
  delete({ params }) {
    return { message: 'Delete method by a put request.', id: params.id }
  }
}

module.exports = PostController
