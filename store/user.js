
export const state = () => ({
    credentials: {
        email: '',
        uid: '',
        phoneNumber: '',
        photoURL: '',
    }
})

export const getters = {
    getEmail(state){
        return state.credentials.email
    },

    isAuth(state){
        return state.credentials.uid ? true : false 
    }
}

export const mutations = {
    setCreds(state, payload){
        state.credentials = payload
    }
}

export const actions = {
    async logout({commit}){
        commit('setCreds', {})
    }
}

export const strict = false

