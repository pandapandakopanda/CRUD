import axios from 'axios'

export const getServerData = () => {
  axios.get('api/getUser')
    .then((res) => res.data)
}
export const checkLoginData = (data) => {
  axios.post('api/checkLogin', data)
    .then((res) => res.data)
}

export const x = 0
