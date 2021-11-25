

import {post, get} from '../utils/request'
export default {

//    添加帖子
    insert(post){
        return post('/post/insert', post)
    },

//    修改帖子
    updata(post){
        return post('/post/updata', post)
    },

//    删除帖子
    delect(integer){
        return get('/post/delect/'+integer)
    },

//    根据ID查询帖子
    select(integer ){
        return get('/post/select/' +integer)
    },

    //    根据标题名查帖子
    findallName(str,page,size){
        return get('/post/findall/pname/' +str +'/' +page+'/' +size)
    },

    //    根据话题查询帖子
    findallTopic(str,page,size){
        return get('/post/findall/topic/' +str +'/' +page+'/' +size)
    },

    //    根据type查询帖子
    findallType(str,page,size){
        return get('/post/findall/topic/' +str +'/' +page+'/' +size)
    },

    //     默认分页查询
    listByAll(page,size){
        return get('/post/findall/'  +page+'/' +size)
    },

//    根据用户 id 查找
    findAllByFkUId(uid, page, size){
        return get('/post/findAllByFkUId/' +uid +'/' +page+'/' +size)
    },

//    根据发布者 id 以点击数对帖子排序
    findAllByFkUIdOrderLike(uid, page, size){
        return get('/post/findAllByFkUIdOrderLike/' +uid +'/' +page+'/' +size)
    },

    //    根据发布者 id 以收藏数对帖子排序
    findAllByFkUIdOrderCollect(uid, page, size){
        return get('/post/findAllByFkUIdOrderCollect/' +uid +'/' +page+'/' +size)
    },

    //以收藏数对帖子排序
    findByAllOrderLike(page, size){
        return get('/post/findByAllOrderLike/' +page+'/' +size)
    },

}