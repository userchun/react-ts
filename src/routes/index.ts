import { lazy } from 'react'
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
      // {
      //   path: '/',
      //   component: Login,
      //   exact: true,
      //   auth: 0,
      // },
      {
        path: '/login',
        component: Login,
        auth: 0,
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
            auth: 1,
          },
          {
            path: '*',
            exact: true,
            auth: 0,
            component: NotFound,
          },
        ],
      },
      {
        path: '*',
        component: NotFound,
        auth: 0,
        exact: true,
      },
    ],
  },
]
const auth: number = Number(localStorage.getItem('auth'))
const fliterFun = (routes: any[]) => {
  routes = routes.filter((v) => {
    if ('routes' in v) {
      fliterFun(v.routes)
    }
    return v.auth === auth || v.auth === 0
  })
  return routes
}

const exRoutes: any[] = fliterFun(routes)

export default exRoutes
