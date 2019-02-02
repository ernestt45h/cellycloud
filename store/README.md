# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory activate the option in the framework automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

# Example

The name of the .js file is the name of a module in the store
eg. user.js

    export const state = () => ({
        counter: 1
    })

    export const getters = {
        getNumber(state){
            return state.counter
        }
    }

    export const mutations = {
        increment (state) {
            state.counter++
        }
    }

