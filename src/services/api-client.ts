import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'0a2e4cafb77c48a680d648e8719c53b2'
    }
})