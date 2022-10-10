// we define our routes in this file

import LandingPage from 'pages/Landing'

const routes = [
  {
    path: '/',
    component: () => import('../App')
  }
]

export default routes
