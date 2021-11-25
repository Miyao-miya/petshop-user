
//预约相关接口
import {post, get} from '../utils/request'
export default {
    //    添加预约
    insert(make){
        return post('/make/insert', make)
    },

    //    修改预约
    updata(make){
        return post('/make/updata', make)
    },

    //    删除预约
    delect(index){
        return get('/make/delect/' +index)
    },

    //    根据ID查询预约
    select(index){
        return get('/make/select/' +index)
    },

    //    分页查询预约
    listByAll(page, size){
      return get('/make/findall/' +page +'/' +size)
    },

//    根据用户ID查找预约
    findallUid(uid,page, size){
        return get('/make/findalUid/' +uid +'/' +page +'/' +size)
    },


    //    验证用户是否已经预约过该医生
    findAllByFkUIdAndFkDId(fkBI){
        return get('/make/findAllByFkUIdAndFkDId/' +fkBI)
    }


}