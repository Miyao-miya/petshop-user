

//支付账号管理
//医生相关接口
import {post, get} from '../utils/request'
export default {

    //支付账号验证
    findAllByFkUIdAndFPassword(fkuid, password){
      return   get('/fun/findAllByFkUIdAndFPassword/' +fkuid +'/' +password)
    }

}