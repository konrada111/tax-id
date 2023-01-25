import axios from "axios"
export default axios.create({
  baseURL: `http://apilayer.net/api/validate?access_key=${process.env.REACT_APP_PRIVATE_KEY}`,
})
