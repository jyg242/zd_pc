import Cookies from 'js-cookie'
//令牌key
const TokenKey='Admin-Token'
export function getToken(){
    return localStorage.getItem('jygToken') || null
}