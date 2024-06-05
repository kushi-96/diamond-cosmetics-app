import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import routes from 'routes/routes'


const App: React.FC = () => {

  /* Rendering routes with layout */
  const renderComponent = (
    Component: any,
    Layout?: any,
  ) => {
    if (Layout) {
      return (
        <Layout>
          <Component />
        </Layout>
      )
    }

    return <Component />
  }

  /* Iterate through Routes */
  const routeRender = (
    <Routes>
      {routes.map(
        (
          {
            path,
            layout: Layout,
            component: Component,
          }: any,
          key,
        ) => {
          /* Render Route component */
          return (
            <Route
              path={path}
              key={key}
              element={renderComponent(Component, Layout)}
            />
          )
        },
      )}
    </Routes>
  )

  return <Router>{routeRender}</Router>
}

export default App
