import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '85f16b6cf1814ba5b1cd917dbc60fc65'
  }
})