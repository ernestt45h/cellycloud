import firebase from 'firebase'
import config from '../../configs/firebaseConfigs'

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}
let db = firebase.firestore()
let authentication = firebase.auth()



export default {
    install(Vue, options){
        Vue.prototype.$db = db
        Vue.prototype.$auth = authentication
    }
}