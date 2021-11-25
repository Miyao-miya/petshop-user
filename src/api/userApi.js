/**
 * 关于用户的接口
 * */
import {post, get} from '../utils/request'
export default {

    //账号登入
    login(user,fkId) {
        console.log(window.sessionStorage.getItem('pkId'))
        if (window.sessionStorage.getItem('pkId') == null){
            return post('/' +fkId + '/users/login',user)
        }else {
            return post( '/users/login',user)
        }

    },

    //    账号注册
    userInsert(user){
      return post('/' +10000 + '/users/insert',user)
    },

    //    账号注销  i 注销用户 j 注销等级
    userDelect(id, index){
        return get('/users/insert/' + id + '/' + index)
    },

    //  忘记密码
    userNote(user){
        return post('/users/note' , user)
    },

    //     修改信息
    updataUser(user){
        return post('/users/update', user)
    },

    //    用户默认输出
    listByAll(page, size){
        return get('/users/findall/'+ page +'/' +size)
    },

    //查询用户信息
    selectUser(integer){
        return get('/users/select/'+integer)
    },

    //    根据用户名查询
    findAllName(name, page, size){
      return get('/users/findAllName/'+ name + '/' + page +'/' +size)
    }

}