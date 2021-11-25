

//医疗记录先关接口
//预约相关接口
import {post, get} from '../utils/request'
export default {
    //    添加医疗记录
    insert(medical){
        return post('/Medical/insert', medical)
    },

    //     修改医疗记录
    update(medical){
        return post('/Medical/update', medical)
    },

    //     删除医疗记录
    delect(integer){
        return post('/Medical/delect/'+ integer)
    },

    //    根据 id 查找医疗记录
    select(integer){
        return get('/Medical/select/'+ integer)
    },

    //    根据用户 id 查找列表
    findAllByFkUId(integer, page, size){
        return get('/Medical/findAllByFkUId/'+integer +'/' +page +'/' +size)
    },

    //    根据医生 id 查找列表
    findAllByFkDId(integer, page, size){
        return get('/Medical/findAllByFkDId/'+integer +'/' +page +'/' +size)
    },

    //   默认 查询列表
    listByAll(page, size){
        return get('/Medical/listByAll/'  +page +'/' +size)
    },

    //    判断是否预约过该医生
    findAllByFkUIdAndFkDId(fkDId){
        return get("/Medical/findAllByFkUIdAndFkDId/" +fkDId)
    }
}