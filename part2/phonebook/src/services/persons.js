import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObject => {
    return axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
    return axios.post(`${baseURL}/${id}`, newObject)
}

const put = () => {

}

const remove = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

export default (getAll, create, update, remove, put)