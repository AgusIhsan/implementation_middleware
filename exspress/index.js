const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")

const {Router} = require("express")
const router = Router()
const dotenv = require("dotenv")
dotenv.config({
    path: ".env." + process.env.NODE_ENV
})
const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use((request, response, next) => {
    axios.defaults.baseURL = process.env.BASE_URL_API
    if(request.headers.authorization){
        axios.defaults.headers.common["authorization"] = request.headers.authorization
    }else{
        axios.defaults.headers.common["authorization"] = ""
    }
    next();
})

router.post("/auth/login", (request, response) => {
    axios.post(request.path, request.body)
    .then(res => {
        return response.json({
            code: res.data.code,
            status: res.status,
            data: res.data,
            message: res.message
        })
    }).catch(err => {
        return response.json({
            code: 500,
            status: "error",
            message: err,
            data: []
        })
    })
})

app.use(router)

module.exports = {
    base: process.env.BASE_URL_HASH,
    handler: app
}