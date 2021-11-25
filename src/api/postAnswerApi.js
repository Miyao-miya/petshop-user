
import {post, get} from '../utils/request'
export default {
    //    增加帖子恢复
    insert(postanswer){
        return post('/postanswer/insert', postanswer)
    },


    //    删除帖子回复
    delect(index, uId ){
        return get('/postanswer/delect/' +index+'/' +uId)
    },


//    根据帖子ID 回复ID 返回回复的回复列表
    findallPidAndPasid(pid,pasid, page,size){
        return get('/postanswer/findall/' +pid +'/' +pasid +'/' +page+'/' +size)
    },

//    返回帖子直接回复列表
    findallNoPasid(pid,page,size){
        return get('/postanswer/findall/' +pid  +'/' +page+'/' +size)
    },

    //    根据帖子ID 统计该帖子浏览数
    countByFkPId(pid){
        return get('/postanswer/countByFkPId/' +pid)
    },
}