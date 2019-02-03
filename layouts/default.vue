<template>
  <keep-alive>
    <fade-transition>
      <nuxt/>
    </fade-transition>
  </keep-alive>
</template>

<script>
  export default {
    middleware: 'isAuth',
    data(){
      return {
        
      }
    }
  }
</script>
