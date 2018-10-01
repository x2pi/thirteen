import Api from '@/services/Api'

export default {
  sendIdToken (idToken) {
    return Api().post('/login', {idToken: idToken}, {withCredentials: true})
  }
}
