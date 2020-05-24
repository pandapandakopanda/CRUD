import axios from 'axios'

export const fillUsersArray = (data) => {
  axios.post('api/fillUsers', data)
}


export const x = 1
