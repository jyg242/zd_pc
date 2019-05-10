import Cookies from 'js-cookie'
//令牌key
const TokenKey='Admin-Token'
export function getToken(){
    return sessionStorage.getItem('adminID') || '5637242'
}