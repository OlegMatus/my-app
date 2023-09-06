import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'

const authService = {
    async login(user) {
       const {data} = await apiService.post(urls.auth.login, user);
       this.setTokens(data)
        const {data:me} = await this.me();
       return me
    },
    async refresh() {
        const refresh = this.getRefreshToken()
        const {data} = await apiService.post(urls.auth.refresh, {refresh});
        this.setTokens(data)
    },
    me() {
        return apiService.get(urls.auth.me)
    },
    setTokens({access, refresh}) {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken() {
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken() {
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens() {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
};

export {
    authService
}