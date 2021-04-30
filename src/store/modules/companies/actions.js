import axios from 'axios'
import { API_VERSION } from '../../../configs/api'

const actions = {
    getCompanies ({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER','Carregando as empresas')

        setTimeout(() => {
        return axios.get(`${API_VERSION}/companies`)
                    .then(response =>  commit('SET_COMPANIES',response.data))
                    .finally(() => commit('SET_PRELOADER', false))}, 1000)
    },

    getCategoriesByCompany ({ commit }, uuid) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER','Carregando as categorias')

        setTimeout(() => {
        return axios.get(`${API_VERSION}/categories?uuid=f556cdcd-342c-4361-92e7-1fdc98391079`)
                    .then(response =>  commit('SET_CATEGORIES_COMPANY',response.data))
                    .finally(() => commit('SET_PRELOADER', false))}, 1000)
    }
}

export default actions