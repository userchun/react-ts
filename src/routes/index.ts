import { lazy } from 'react'
import { getItem } from '../utils'

const Login = lazy(() => import('../views/Login'))
const Home = lazy(() => import('../views/Home'))
const Teacher = lazy(() => import('../views/Teacher'))
const Student = lazy(() => import('../views/Student'))
const NotFound = lazy(() => import('../views/NotFound'))
const AllViews = lazy(() => import('../views'))

const routes: any[] = [
  {
    path: '/',
    component: AllViews,
    auth: 0,
    routes: [
      {
        path: '/login',
        component: Login,
        exact: true,
        auth: 0,
        routes: [],
      },
      {
        path: '/home',
        component: Home,
        auth: 1,
        routes: [
          {
            path: '/home',
            component: Teacher,
            exact: true,
            routes: [],
            auth: 1,
          },
          {
            path: '/home/teacher',
            component: Teacher,
            routes: [],
            auth: 1,
          },
          {
            path: '/home/student',
            component: Student,
            routes: [],
            auth: 2,
          },
          {
            path: '*',
            auth: 0,
            component: NotFound,
          },
        ],
      },
      {
        path: '*',
        component: NotFound,
        auth: 0,
      },
    ],
  },
]
const auth: number = Number(getItem('auth'))
const filterRoute = (routes: any[]) => {
  routes.forEach((item, i) => {
    if (item.routes && item.routes.length > 0) {
      filterRoute(item.routes)
    }
    if (item.auth !== 0 && item.auth !== auth) {
      routes.splice(i, 1)
    }
  })
}
if (auth) {
  filterRoute(routes)
}
export default routes
