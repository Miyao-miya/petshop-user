

//商品相关接口
import {post, get} from '../utils/request'
export default {

    //      添加商品
    goodsinsert(goods){
        return post('/goods/insert', goods)
    },

    //      删除商品
    goodsdelete(index){
        return get('/goods/delect/' +index)
    },

    //    修改商品信息
    goodsUpdata(goods){
        return post('/goods/updata', goods)
    },

    //    根基Id查找商品
    selectByPrimaryKey(indes){
        return get('/goods/select/' +index)
    },

    //    根据商品名查询商品
    findAllByGName(name){
        return get('/goods/select/gname/' +name)
    },

    //    分页查看商品列表   宠物图片列表
    goodsPageInfo(page, size){
        return get('/goods/findall/' +page +'/' +size)
    },

    //    根据商品分类查找
    goodsCategoryPageInfo(gc, page, size){
        return get('/goods/findall/gc/'+ gc +'/' +page +'/' +size)
    },

    //    根据商品type查找
    findAllByFkTypeId(type, page, size){
        return get('/goods/findall/type/'+ type +'/' +page +'/' +size)
    }
}