<template>
  <div class="text-xs-center">
    <div v-if="login" >
      <v-btn color="error" class = "mt-3" >Gam tiến lên</v-btn>
	  <v-btn href="#" class = 'mt-3' onclick="signOut();">Sign out</v-btn>
    </div>
      <div v-else>
        <button id = "my-signin2" class="mt-3" ></button>
      </div>
  </div>
</template>
<script>
import Login from '../services/Login.js'

export default {
  data () {
    return {
      login: false
    }
  },

  mounted () {
    this.addGoogleApi()
  },

  methods: {
    async addGoogleApi () {
	let that = this
      let metaClientId = document.createElement('meta')
      metaClientId.setAttribute('name', 'google-signin-client_id')
      metaClientId.setAttribute('content', '569063036843-v7f9qvobmakicec5c0idjoq8vd4p6iof.apps.googleusercontent.com')
      document.head.appendChild(metaClientId)
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://apis.google.com/js/platform.js?onload=renderButton')
      document.head.appendChild(recaptchaScript)

      window.onSuccess = async function (googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName())
        let idToken = googleUser.getAuthResponse().id_token
        const response = await Login.sendIdToken(idToken)
		if(response.data.email) that.login = true;
        console.log(response.data)
      }
      window.onFailure = function (error) {
        console.log(error)
      }
	 window.signOut = function () {
		var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function () {
			console.log('User signed out.');
		});
		location.reload();
	}
      window.renderButton = function () {
        gapi.signin2.render('my-signin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
        })
      }
    }
  }
}
</script>
