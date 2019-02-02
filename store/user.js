
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
    }
}

export const mutations = {
    setCreds(state, payload){
        state.credentials = payload
    }
}

export const strict = false

