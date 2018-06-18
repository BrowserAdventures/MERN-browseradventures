import axios from 'axios'

const setAuthToken=(token)=>
{
    if(!token) {
        return delete axios.defaults.headers.common['Authorization']
    }

    axios.defaults.headers.common['Authorization'] = token
}

export default setAuthToken
