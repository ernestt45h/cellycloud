<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.name = this.$route.params.route
    },
}
</script>