import Global from '../Global';
import axios from 'axios';
export default class CartModel extends Global {
    async getProductByUserCode(data) {
        return axios({
            method: 'post',
            url: '/cart/',
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

    async insertCart(data) {
        return axios({
            method: 'post',
            url: '/cart/insert/',
            baseURL: this.getServerUrl(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        })
            .then(function (response) {
                console.log("response.data : ", response.data);
                return response.data
            })
            .catch(function (error) {
                console.log("error : ", error);
                return []
            });
    }

    async updateCart(data) {
        return axios({
            method: 'post',
            url: '/cart/update/',
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

    async deleteCart(data) {
        return axios({
            method: 'post',
            url: '/cart/delete/',
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