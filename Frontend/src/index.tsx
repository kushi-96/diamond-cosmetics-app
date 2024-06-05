import * as React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './styles/index.scss'
import 'remixicon/fonts/remixicon.css'
import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient()


const renderApp = () => {

  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  )

}

// Initial render
renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
