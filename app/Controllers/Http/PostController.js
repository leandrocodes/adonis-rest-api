'use strict'

class PostController {
  async index() {
    return { message: 'Post route test.' }
	}
	
	async show({ params }) {
    return { message: 'Show method by a get request.', id: params.id }
	}
	
  async store({ request }) {
    //console.log(req)
    const { title, body } = request.all()
    const post = {
      title,
      body
    }
    return { message: 'Store method by a post request.', post }
  }

  async update({ params }) {
    return { message: 'Update method by a put request.', id: params.id }
	}
	
  async destroy({ params }) {
    return { message: 'Delete method by a delete request.', id: params.id }
  }
}

module.exports = PostController
