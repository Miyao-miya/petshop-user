

//标签
import {post, get} from '../utils/request'
export default {

//    添加标签
    insert(user) {
        return post( '/type/login',user)
    },

//   输出标签列表
    listByAll(){
        return get('/type/listByAll')
    },

}