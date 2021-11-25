
//业务相关接口
import {post, get} from '../utils/request'
export default {

    //添加业务
    insert(business){
        return post('/business/insert', business)
    },

    //    修改业务
    updata(business){
        return post('/business/updata', business)
    },

    //    删除业务
    delect(integer){
        return get('/business/delect/' + integer)
    },

    //    默认列表查询业务
    listByAll(page, size){
        return get('/business/findall/' + page +'/'+ size)
    }
}