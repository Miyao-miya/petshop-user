<!--   论坛-->
<template>
    <div style="width: 100%; height: 100%; ">
        <!--        轮播图-->
        <template>
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="(item, index) in urls" :key="item">
                    <h3 class="medium"
                        :key="(new Date()).getTime()">
                        <el-image
                                style="width: 100%; height: 100%"
                                :src="item.pimg"
                                fit="contain"></el-image>
                    </h3>
                </el-carousel-item>
            </el-carousel>
        </template>

        <!--        帖子分类-->

        <!--        模块-->
        <MIndex v-for="(item, index) in postLists"
                :key="(new Date()).getTime() + index"
                v-bind:postData="item"
                style="overflow: hidden; margin-bottom: 20px;"/>

    </div>
</template>

<script>
    import MIndex from "./module/PostModule";

    export default {
        name: "Index",
        components: {
            MIndex
        },
        data() {
            // 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            return {
                urls: '',
                postLists: [],
                postListsData: {
                    user: '',
                    post: '',
                },
                user: {
                    uId: '1001',
                    uName: '用户1',
                    uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                    uGrade: '3',
                },
                post: {
                    pId: '1',
                    pName: '这是一个很水的帖子',
                    pType: [
                        '动漫',
                        '宠物'
                    ],
                    pImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                    pDate: '2021-06-05',
                    pView: '216',
                    pAnswer: '2456'
                },
                url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            }
        },
        watch:{

        },
        created() {
            let _this = this

            //    获取轮播图  图片为阅读量最多的图书
            _this.$api.postApi.findByAllOrderLike(1, 5).then(res => {
                if (res != null) {
                    _this.urls = res.list
                }
            })

            //    获取帖子列表
            _this.$api.postApi.listByAll(1, 5).then(res => {
                if (res != null) {

                    let userCopy = JSON.parse(JSON.stringify(_this.user))
                    let postCopy = JSON.parse(JSON.stringify(_this.post))
                    let postListsDataCopy = JSON.parse(JSON.stringify(_this.postListsData))


                    for (let i = 0; i < res.list.length; i++) {

                        userCopy.uId = res.list[i].fkUId.uid
                        userCopy.uName = res.list[i].fkUId.uname
                        userCopy.uImg = res.list[i].fkUId.uimg

                        postCopy.pId = res.list[i].pid
                        postCopy.pName = res.list[i].pname

                        postCopy.pType = []
                        for (let j = 0; j < res.list[i].fkTypeId.length; j++) {
                            postCopy.pType.push(res.list[i].fkTypeId[j].tName)
                        }

                        postCopy.pImg = res.list[i].pimg
                        postCopy.pDate = res.list[i].pdate

                        postListsDataCopy.user = userCopy
                        postListsDataCopy.post = postCopy

                        _this.postLists.push(JSON.parse(JSON.stringify(postListsDataCopy)))

                    }

                }
            })
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>