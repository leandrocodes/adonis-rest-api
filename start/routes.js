'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

// Route.group(() => {
//   Route.get('/', () => {
//     return { message: 'Lista de postagens' }
//   })

//   Route.get('/:id', ({ params }) => {
//     return { message: `Postagem específica ${params.id}` }
//   })

//   Route.post('/', () => {
//     return { message: 'Postado' }
//   })

//   Route.put('/', () => {
//     return { message: 'Atualizado' }
//   })

//   Route.delete('/', () => {
//     return { message: 'Deletado' }
//   })
// }).prefix('/postagens')

Route.get('/', 'TesteController.index')