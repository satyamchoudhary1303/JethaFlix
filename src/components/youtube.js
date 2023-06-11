import axios from 'axios'
const KEY = "AIzaSyAp_eeUiHii9ECfGC_rDjmbW-Am1Z64siw"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        key: KEY
    },
    headers:{}
})