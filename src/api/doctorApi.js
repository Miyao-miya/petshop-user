

//医生相关接口
import {post, get} from '../utils/request'
export default {
    //    医生账号注册
    doctorinsert(doctor){
        return post('/dockor/insert', doctor)
    },

    //    修改医生信息
    updateByPrimaryKeySelective(doctor){
        return post('/dockor/update', doctor)
    },

    //    删除医生
    doctordelect(integer){
        return get('/dockor/delect/'+ integer)
    },

    //     查询医生
    doctorselect(index){
        return get('/dockor/select/'+ index)
    },

    //    返回医生分页列表
    findAll(page, size){
        return get('/dockor/findall/'+ page + '/' + size)
    },

}