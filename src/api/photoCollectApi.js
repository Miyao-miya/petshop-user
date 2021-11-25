

//帖子收藏
import {post, get} from '../utils/request'
export default {

    //    增加帖子收藏
    insert(photocollect){
        return post('/photocollect/insert', photocollect)
    },

    //    修改帖子收藏信息
    updata(photocollect){
        return post('/photocollect/updata', photocollect)
    },

    //    取消收藏
    delect(index){
        return get('/photocollect/delect/' +index)
    },

    //    根据ID查询帖子收藏信息
    select(index){
        return get('/photocollect/select/' +index)
    },

    //    收藏分页
    findall(page, size){
        return get('/photocollect/findall/' +page +'/' +size)
    },

//  是否收藏
    findAllByFkUIdAndFkPgId(fkPgId){
        return get('/photocollect/findAllByFkUIdAndFkPgId/' +fkPgId)
    },

    //计算该相册的收藏数
    countByFkPgId(fkPgId){
        return get('/photocollect/countByFkPgId/' +fkPgId)
    },

    //计算该相册的收藏数
    deleteByFkUIdAndFkPgId(fkPgId){
        return get('/photocollect/deleteByFkUIdAndFkPgId/' +fkPgId)
    },

}