import AppConfig from '../configs/app'
import axios from 'axios'

let Api_host = AppConfig.api_host

export default class AxiosService {
    constructor(){
        this.http = axios.create({
            baseURL: Api_host,
        })
    }
}