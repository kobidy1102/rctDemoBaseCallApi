import apisauce from 'apisauce'
import Config from 'react-native-config'

const create = (baseURL = Config.API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 10000
  })
  const getUser = username => api.get('search/users', {q: username})

  console.log(baseURL);
  console.log(api);
  const postLogin = (body) => api.post('token', body)

  //Fake data
  const getFakeData = () => {
    return 'Fake data'
  }

  return {
    getFakeData,
    getUser,
    postLogin
  }
}

export default {
  create
}
