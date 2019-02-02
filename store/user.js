
export const state = () => ({
    credentials: {}
})

export const getters = {
    getEmail(state){
        return state.credentials.email
    }
}

export const mutations = {
    setCreds(state, payload){
        state.credentials = payload
    }
}

export const strict = false

