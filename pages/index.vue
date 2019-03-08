<template>
  <Row :gutter="10" class="content" type="flex" justify="center">
    <Col :xs="23" :sm="10" :md="7" :lg="5">
      <pallet/>
    </Col>
    <Col :xs="23" :sm="10" :md="7" :lg="5">
      <pallet/>
    </Col>
    <Col :xs="23" :sm="10" :md="7" :lg="5">
      <pallet/>
    </Col>
    <Col :xs="23" :sm="10" :md="7" :lg="5">
      <pallet/>
    </Col>
  </Row>   
</template>
<script>
import Pallet from '@/components/pallet'
export default {
  components:{Pallet},
  methods:{
    async logout(){
      await this.$auth.signOut()
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  },

  created(){
    
  }
}
</script>
<style scoped>
.content{
  margin-top: 20px
}
</style>


