

//相册相关接口
import {post, get} from '../utils/request'
export default {

    //    添加相册
    insert(photos){
        return post('/photos/insert', photos)
    },

    //    修改相册内容
    updata(photos){
        return post('/photos/updata', photos)
    },

    //    删除相册
    delect(index){
        return get('/photos/delect/' +index)
    },

    //    更据ID查询相册
    select(index){
        return get('/photos/select/' +index)
    },

    //   更据相册名查找相册
    findallName(name, page, size){
        return get('/photos/fiandallname/' +name +'/' +page +'/' +size)
    },

    //    更据相册标签查找相册
    findallType(type, page, size){
        return get('/photos/findalltype/' +type +'/' +page +'/' +size)
    },

    //    默认分页查找相册
    findall(page, size){
        return get('/photos/findall/' +page +'/' +size)
    },

    //    根据用户id 查询相册  按发布时间排序
    findAllByFkUId(uid, page, size){
        return get('/photos/findAllByFkUId/' +uid +'/' +page +'/' +size)
    },

    //    根据用户id 查询相册  按发布时间排序
    findAllByFkUIdGroupCollect(uid, page, size){
        return get('/photos/findAllByFkUIdGroupCollect/' +uid +'/' +page +'/' +size)
    },

    //    根据用户id 查询相册  按发布时间排序
    findAllByFkUIdGroupLike(uid, page, size){
        return get('/photos/findAllByFkUIdGroupLike/' +uid +'/' +page +'/' +size)
    },

}