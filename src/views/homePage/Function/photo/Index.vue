<!--  相册-->

<template>
    <div class="photoTop top">

        <li v-for="(item,index) in photos"
            :key="index"
            @click="mindexClick"
            class="doctorLi">
            <MIndex class="mindexCss"
                    v-bind:photo="item"
            :key="(new Date()).getTime()"></MIndex>
        </li>

        <!--        查看更多-->
        <div class="doctorAdd">
            <el-button type="success" plain @click="addPhoto">换一批</el-button>
        </div>

    </div>
</template>

<script>
    import MIndex from "./module/Index";
    import $ from "jquery";

    export default {
        name: "Index",
        components: {
            MIndex
        },
        data() {
            return {
                photos: [
                    {
                        //相册ID
                        pId:"1",
                        //相册名
                        pName:"不知火",
                        //创作名
                        fkUId:"子封",
                        //相册封面
                        pImg:"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        //相册内容
                        pConent:[
                            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                        ],
                        //点赞数据
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 16,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 16
                        },
                        //收藏数据
                        collects:{
                            tf: 1,
                            collectSize: 16,
                            collectsNumber: 21
                        },
                        //观看数据
                        pNumber:"216",
                        //创建时间
                        pDate:"2021-05-06"
                    },
                    {
                        //相册ID
                        pId:"2",
                        //相册名
                        pName:"不知火",
                        //创作名
                        fkUId:"子封",
                        //相册封面
                        pImg:"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        //相册内容
                        pConent:[
                            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                        ],
                        //点赞数据
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 16,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 16
                        },
                        //收藏数据
                        collects:{
                            tf: 1,
                            collectSize: 16,
                            collectsNumber: 21
                        },
                        //观看数据
                        pNumber:"216",
                        //创建时间
                        pDate:"2021-05-06"
                    },
                    {
                        //相册ID
                        pId:"3",
                        //相册名
                        pName:"不知火",
                        //创作名
                        fkUId:"子封",
                        //相册封面
                        pImg:"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        //相册内容
                        pConent:[
                            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                        ],
                        //点赞数据
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 16,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 16
                        },
                        //收藏数据
                        collects:{
                            tf: 1,
                            collectSize: 16,
                            collectsNumber: 21
                        },
                        //观看数据
                        pNumber:"216",
                        //创建时间
                        pDate:"2021-05-06"
                    },
                    {
                        //相册ID
                        pId:"4",
                        //相册名
                        pName:"不知火",
                        //创作名
                        fkUId:"子封",
                        //相册封面
                        pImg:"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                        //相册内容
                        pConent:[
                            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                        ],
                        //点赞数据
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 16,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 16
                        },
                        //收藏数据
                        collects:{
                            tf: 1,
                            collectSize: 16,
                            collectsNumber: 21
                        },
                        //观看数据
                        pNumber:"216",
                        //创建时间
                        pDate:"2021-05-06"
                    },
                ],
                photosCopy: '',

                total: '',
                pageNum: '',
                size: '',
                pages: '',
            }
        },
        mounted() {
            console.log( $(".photoTop").children("li").length)

        },
        methods: {
            //    点击卡片跳转
            mindexClick() {
                // console.log(this.data().doctor[0].dId)
                console.log( $(".photoTop").children("li").length)
            },


            addPhoto(){

                let next = 0
                let size = 0
                if((this.pageNum+1)*this.size>this.total){
                    if (this.total - this.pageNum * this.size <0){
                        next = 1;
                        size = this.size;
                    }else {
                        size = this.total - this.pageNum * this.size
                        next = this.pageNum + 1
                    }
                }else {
                    next = this.pageNum +1
                    size = this.size +1
                }

              this.$api.photosApi.findall(next, size).then(res =>{

                  this.total = res.total
                  this.pages = res.pages
                  this.pageNum = res.pageNum
                  this.photos = res.list


                  setTimeout(() =>{
                      ad()
                  },1)

              })
            },
        },
        created() {
            this.$api.photosApi.findall(1,5).then(res =>{

                this.total = res.total
                this.pages = res.pages
                this.size = res.size
                this.pageNum = res.pageNum
                this.photos = res.list


                setTimeout(() =>{
                    ad()
                },1)
            })

        }
    }

    //卡片位置处理
    function ad() {
            $.each($('.photoTop li'), function (index, e) {

                if ((index + 1) % 3 == 2) {
                    e.classList.add('doctorLi_m')
                }
            })
    }

</script>

<style scoped>
    /*@import "src/css/none.css";*/
    .top {
        /*width: 62.5%;*/
        /*margin-left: 18.75%;*/
        background-color: #50E3CE;
    }

    .doctorLi {
        width: 30%;
        float: left;
        /*margin-left: 2%;*/
        /*margin-right: 2%;*/
        margin-top: 2%;
        /*margin-left: 2%;*/
    }

    .doctorLi_m {
        margin-left: 5%;
        margin-right: 5%;
    }

    .mindexCss {
        /*float: left;*/
    }

    .mindex_m {
        margin-left: 5%;
    }

    .doctorAdd{
        float: left;
        margin-left: 10%;
        margin-top: 10%;
    }
</style>