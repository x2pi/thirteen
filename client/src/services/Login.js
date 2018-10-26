import Api from './Api'

export default {
  sendIdToken (idToken) {
    return Api().post('/login', {idToken: idToken}, {withCredentials: true})
  }
}
