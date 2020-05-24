import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import App from './components/App'
import createRouter from './create-router'
import { Provider } from 'mobx-react'
import rootStore from './core/RootStore'

// import 'normalize.css'
import './index.scss'

const router = createRouter(true)
const app = (
  <RouterProvider router={router}>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </RouterProvider>
)

router.start(() => {
  ReactDOM.render(
    app,
    document.querySelector('#root'),
  )
})
