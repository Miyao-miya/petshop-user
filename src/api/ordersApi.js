

//订单相关
import {post, get} from '../utils/request'
export default {

    //    添加订单
    insert(orders){
        return post('/orders/insert', orders)
    },
    //    修改订单信息
    updata(orders){
        return post('/orders/updata', orders)
    },

    //    删除订单新
    delect(index){
        return get('/orders/delect/' +index)
    },

    //    根据ID查看订单
    select(index){
        return get('/orders/select/' +index)
    },

    //    查看订单列表
    ordersPage(page, size){
        return get('/orders/findall/' +page +'/' +size)
    },

    //    根据用户Id查询订单
    findAllByFkUId(uid, page, size){
        return get('/orders/findAllUid/' +uid +'/' +page +'/' +size)
    },

    //    根据用户Id查询订单
    findAllByFkUIdIng(uid, page, size){
        return get('/orders/findAllByFkUIdIng/' +uid +'/' +page +'/' +size)
    },

    //    根据用户Id查询订单
    findAllByFkUIdEd(uid, page, size){
        return get('/orders/findAllByFkUIdEd/' +uid +'/' +page +'/' +size)
    },

    //    修改订单信息
    shopOrder(shopOrderVo){
        return post('/orders/shopOrderVo', shopOrderVo)
    },

}