import axios from 'axios'
import router from '@/router'
import accessor from 'local-storage'

const
Http = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    //'X-CSRF-TOKEN'    : window.csrfToken,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

class client extends Http {

  static rememberMe = false

  static setRememberMe(rememberMe)
  {
    this.rememberMe  = rememberMe
    return this
  }

  static setAuth(token)
  {
    this.defaults.headers.Authorization = token
    return this
  }

  static setBasicAuth(username, password)
  {
    this.setAuth('Basic '+btoa(username + ":" + password))
    return this
  }

  static setBearerAuth(token)
  {
    this.setAuth('Bearer '+token)
    return this
  }

  static unauthRedirect(error)
  {
    if (error.response && error.response.status === 401)
    {
      console.log('kiss kiss bye bye');
      router.push(process.env.VUE_APP_LOGIN_ACTION)
    }

    return Promise.reject(error)
  }

  static extractHeaderToken(response)
  {
    if(response.headers['x-token'])
    {
      this.setBearerAuth(response.headers['x-token']);
      if(this.rememberMe) accessor.set('token', response.headers['x-token'])
    }
    return response;
  }

  static post(url, data, config)
  {
    return new Promise((resolve, reject) =>
    {
      super.post(url, data, config).then(response1 => resolve(response1)).catch(error1 => reject(error1))
    })
  }
}

// mange token & 401 error
client.interceptors.response.use(response => client.extractHeaderToken(response), error => client.unauthRedirect(error));
if(accessor.get('token')) client.setBearerAuth(accessor.get('token'))

const
//client = new Api(),
parseError = function(response)
{
  return {
    data:null
  }
},

parseResponse = function(response)
{
  return {
    data: response.data.data// expecting object with ID
  }
}

export { client, parseResponse, parseError }
