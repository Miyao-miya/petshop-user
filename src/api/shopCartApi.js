
import {post, get} from '../utils/request'
export default {

    //    加入购物车
    insert(shopcart){
        return post('/shopcart/insert', shopcart)
    },

    //    移出购物车
    delect(integer){
        return get('/shopcart/delect'+integer)
    },

    //   根据ID查看购物车
    select(integer){
        return get('/shopcart/select/'+integer)
    },

    //   查看购物车列表
    shopCartPage(page, size){
        return get('/shopcart/findall/'+page+'/'+ size)
    },

    //   根据用户Id 查找购物车
    findAllByFkUId(uid,page, size){
        return get('/shopcart/findAllByFkUId/'+uid+'/'+page+'/'+ size)
    },
}