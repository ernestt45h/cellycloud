<template>
  <Row type="flex">
    <app-nav style="position: fixed" width="65px"/>
    <div class="wrapper">
      <top-nav class="fixed-top"/>
      <div class="routes">
        <keep-alive>
          <fade-transition>
            <nuxt/>
          </fade-transition>
        </keep-alive>
      </div>
    </div>
  </Row>
</template>

<script>
import AppNav from '@/components/navigation/navbar'
import TopNav from '@/components/navigation/topbar'
  export default {
    components:{AppNav, TopNav},
    middleware: 'isAuth',
    data(){
      return {
        
      }
    }
  }
</script>
<style scoped>
.wrapper{
  margin-left: 65px;
  width: calc(100vw);
}

.fixed-top{
  position: fixed;
  margin-left: 0;
  width: calc(100vw - 50px)
}

.routes{
  margin-top: 100px;
}
</style>

