

//浏览记录相关接口
import {post, get} from '../utils/request'
export default {
    //    增加浏览记录
    insert(photosGlance){
        return post('/photosglance/insert', photosGlance)
    },

    //    修改浏览记录
    updata(photosGlance){
        return post('/photosglance/updata', photosGlance)
    },

    //    删除浏览记录
    delect(indes){
        return get('/photosglance/delect/' +indes)
    },

    //    统计浏览次数
    countFkPId(index){
        return get('/photosglance/countfkpid/' +index)
    },

    //    统计 喜欢/不喜欢 人数
    countByPgTf(fkPId,index){
        return get('/photosglance/countByPgTf/' +fkPId +'/' +index)
    },

    findAllByFkUIdAndFkPId(fkPid){
        return get('/photosglance/selectFkUid/' +fkPid)
    }
}