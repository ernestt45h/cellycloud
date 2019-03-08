<template>
    <div>
        Parent
        <nuxt-link :to="{name: 'admin'}"><Button>To Admin</Button></nuxt-link>
        <nuxt-child />
    </div>
</template>
<script>
export default {
    created() {
         console.log(
            this.$route
        );
    },
}
</script>
