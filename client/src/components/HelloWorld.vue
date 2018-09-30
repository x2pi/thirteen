<template>
  <div class="text-xs-center">
    <div v-if="login" >
      <v-btn color="error" >Gam tiến lên</v-btn>
    </div>
      <div v-else>
        <v-btn color="error"  >Sign in with google</v-btn>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: false
    }
  }
}
</script>
