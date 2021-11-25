
//等级相关信息接口

import {post, get} from '../utils/request'
export default {

    //    修改等级信息
    updata(grade){
        return post('/Grade/updata', grade)
    },

    //    修改等级信息
    findAllByFkId(integer){
        return get('/Grade/findAllByFkId/' +integer)
    },

}