import Vue from 'vue'
import axios from 'axios'
import CryptoJS from 'crypto-js'

export default function (){
    axios.interceptors.request.use((request)=>{
        const token = localStorage.getItem("token")
        if(token){
            const originalToken = CryptoJS.AES.decrypt(token,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);      
            request.headers["Authorization"] = "Bearer "+originalToken
        }
      return request
    })
}
Vue.prototype.$axios = axios