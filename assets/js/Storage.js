export default context => ({
    set(key, value){
        context.$cookies.set(key, value) 
    },

    get(key){
        context.$cookies.get(key) || undefined
    }
})