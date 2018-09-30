import Api from '@/services/Api'

export default {
  sendIdToken (idToken) {
    return Api().post('/users', {idToken: idToken}, {withCredentials: true})
  }
}
