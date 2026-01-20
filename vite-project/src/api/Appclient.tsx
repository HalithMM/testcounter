import axios from "axios";

const ApiClient = axios.create({
 baseURL:'https://jsonplaceholder.typicode.com/',
 timeout:5000,
})

export default ApiClient