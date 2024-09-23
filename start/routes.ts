/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/login', async ( { view }) => {
    const html = await view.render('pages/login/login')
    return html
})

router.get('/cadastro/cliente', async ({ view }) => {
    const html = await view.render('pages/cadastro/cadastro_user')
    return html
})

router.get('/carrinho', async ({ view }) => {
    const html = await view.render('pages/carrinho/carrinho')
    return html
})

