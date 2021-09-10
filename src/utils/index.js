import './rem'
import header from '@/components/header'

export default{
    install(Vue){
        Vue.component('navigation',header)
    }
}