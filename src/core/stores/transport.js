import axios from 'axios'

export const getServerData = () => axios.get('api/getUsers')
  .then((res) => res.data)

export const checkLoginData = (data) => axios.post('api/checkLogin', data)
  .then((res) => res.data)

export const fillUsersArray = (users) => {
  axios.post('api/fillUsers', users)
}
