'use strict'

class PostController {
  index() {
    return { message: 'Post route test.' }
	}
	
	show({ params }) {
    return { message: 'Show method by a get request.', id: params.id }
	}
	
  store({ request }) {
    //console.log(req)
    const { titulo, corpo } = request.all()
    const post = {
      titulo,
      corpo
    }
    return { message: 'Store method by a post request.', post }
  }

  update({ params }) {
    return { message: 'Update method by a put request.', id: params.id }
	}
	
  delete({ params }) {
    return { message: 'Delete method by a delete request.', id: params.id }
  }
}

module.exports = PostController
