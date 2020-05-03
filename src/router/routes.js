
const routes = [
  { path: '/', name: 'Main', component: () => import('pages/Users.vue') },
  { path: '/register', name: 'Register', component: () => import('pages/Index.vue') },
  { path: '/all', name: 'All', component: () => import('pages/All.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
