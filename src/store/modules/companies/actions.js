import axios from 'axios'
import { API_VERSION } from '../../../configs/api'

const RESOURCE = 'companies'

const actions = {
    getCompanies ({ commit }) {
        return axios.get(`${API_VERSION}/${RESOURCE}`)
                    .then(response => {
                        commit('SET_COMPANY',response.data)
                    })
    }
}

export default actions