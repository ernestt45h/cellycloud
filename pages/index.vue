<template>
  <h1>Welcome <Button @click="logout">Logout</Button></h1>
</template>
<script>
export default {
  methods:{
    async logout(){
      await this.$auth.signOut()
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>

