
import {post, get} from '../utils/request'
export default {

    //    添加浏览信息
    insert(postlike){
        return post('/postlike/insert',postlike)
    },

    //    修改浏览信息
    updata(postlike){
        return post('/postlike/updata',postlike)
    },

    //    删除浏览信息
    delect(integer){
        return get ('/postlike/delect/'+integer)
    },

    //    查看浏览记录
    findall(page, size){
        return get('/postlike/findall/' +page+'/' +size)
    },

//    统计帖子浏览次数
    countByFkPId(index){
        return get('/postlike/countByFkPId/' + index)
    },

    //    根据发布者ID 获取其帖子浏览数
    countByFkPIdOrderByFkUId(index){
        return get('/postlike/countByFkPIdOrderByFkUId/' + index)
    },

    //    根据发布者ID 获取其帖子浏览数
    countByFkPIdOrderByFkUIdLike(index){
        return get('/postlike/countByFkPIdOrderByFkUIdLike/' + index)
    }
}