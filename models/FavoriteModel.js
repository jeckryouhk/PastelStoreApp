import Global from '../Global';
import axios from 'axios';
export default class FavoriteModel extends Global {
    async getProductByUserCode(data) {
        return axios({
            method: 'post',
            url: '/favorite/',
            baseURL: this.getServerUrl(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
                return []
            });
    }

    async insertFavorite(data) {
        return axios({
            method: 'post',
            url: '/favorite/insert/',
            baseURL: this.getServerUrl(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        })
            .then(function (response) {  
                return response.data
            })
            .catch(function (error) {
                console.log("error : ", error); 
                return []
            });
    }

    async deleteFavorite(data) {
        return axios({
            method: 'post',
            url: '/favorite/delete/',
            baseURL: this.getServerUrl(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        })
            .then(function (response) {  
                return response.data
            })
            .catch(function (error) {
                console.log("error : ", error);
                return []
            });
    }

}