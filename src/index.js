import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import { Provider } from 'mobx-react'
import App from './components/App'
import createRouter from './create-router'
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


const res = 'Res from const'

new Promise((resolve, reject) => {
  console.log('Promise :')
  setTimeout(() => {
    reject('FAILED')
    resolve('done')
  }, 1000)
}).then(
  (result) => {
    console.log('result from resolve:', result)
    return 'done2'
  },
  (rejectResult) => {
    console.log('rejectResult: ', rejectResult)
    return new Promise((resolve, reject) => {
      console.log('Promise N2:')
      setTimeout(() => {
        reject(res)
        resolve('DONE Resolve N2')
      }, 1000)
    }).then((result2) => {
      console.log(result2)
    })
  },
).then((resultFromThen) => {
  console.log('resultFromThen: ', resultFromThen)
})
