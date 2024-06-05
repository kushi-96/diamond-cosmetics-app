import { MainLayout } from "components/layouts/MainLayout"
import { Home } from "components/pages/Home"
import { ProductDetailsPage } from "components/pages/ProductDetailsPage"



interface Route {
  path: string
  component?: any
  layout?: any
}

export const routes: Route[] = [
  {
    path: '/',
    component: Home,
    layout: MainLayout
  },
  {
    path: '/product/:id',
    component: ProductDetailsPage,
    layout: MainLayout
  },
]

export default routes
