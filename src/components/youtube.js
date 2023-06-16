import axios from 'axios'
const KEY = "Your_Api_Key"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        key: KEY
    },
    headers:{}
})
