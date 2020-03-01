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
	
	update({ request }) {
		const { titulo, corpo } = request.all()
		const post = {
			titulo,
			corpo
		}
		return { message: 'Update method by a put request.', post }
	}
}

module.exports = PostController
