<template>

    <!--    医生展示卡片-->

    <div>
        <el-col>
            <el-card :body-style="{ padding: '0px'}">
                <!--                    图片-->

                {{thoto}}

                <el-image
                        style="width: 100%; height: 100%"
                        :src="photo.pimg"
                        :preview-src-list="photo.pconent"
                        fit="contain"
                        @click="insertCollect">
                </el-image>

                <!--                    输出数据-->
                <div style="padding: 14px;">
                    <span style="font-size: 16px">{{photo.pname}}</span>

                    <p>&nbsp;</p>
                    <p>
                        <span>发布ID：{{photo.fkUId.uid}}</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>照片数量：{{photo.pconent.length}}</span>
                    </p>

                    <p>&nbsp;</p>

                    <p>
                        <!--                        &nbsp;点赞-->
                        <span @click="onLikeClick(0)">
                            <Like v-bind:likeClick="likeClick"

                                  @click="onLikeClick"/>
                        </span>
                        <!--                        不喜欢-->
                        <span @click="onLikeClick(1)">
                            <NoLike v-bind:noLikeClike="noLikeClike"
                                    style="margin-left: 20px"/>
                        </span>

                        <!--                        收藏-->
                        <span @click="onCollect">
                            <Collect v-bind:collects="collects"
                                     style="margin-left: 20px"/>
                        </span>

                    </p>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>
                         <span style="float: left; color: rgba(153,153,153,0.5)">
                    <i class="el-icon-view"/>
                    {{viewNumber}}</span>
                        <span style="float: right; color: rgba(153,153,153,0.5)">
                    <i class="el-icon-time"/>
                    {{photo.pdate}}</span>
                    </p>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script>
    import Like from "../../../../../utils/verticalIcon/Like";
    import NoLike from "../../../../../utils/verticalIcon/NoLike";
    import Collect from "../../../../../utils/Collect";

    export default {
        name: "Index",
        props: [
            'photo'
        ],
        components: {
            Like,
            NoLike,
            Collect
        },
        data() {
            return {
                onces: '1',
                iconSize: 16,
                viewNumber: '',
                likeClick: {
                    like: 1,
                    likeNumber: 16,
                    likeSize: 16,
                },
                noLikeClike: {
                    noLike: 0,
                    noLikeSize: 16,
                },
                collects: {
                    tf: 0,
                    collectSize: 16,
                    collectsNumber: 0
                },
            };
        },
        watch: {
            photo: {
                handler(n, o) {
                    this.init()
                },
                deep: true
            }
        },
        methods: {

            //喜欢  不喜欢
            onLikeClick(index) {
                if (index == 0) {
                    if (this.likeClick.like == 0) {
                        this.likeClick.like = 1
                        this.noLikeClike.noLike = 0
                    } else {
                        this.likeClick.like = 0
                        this.noLikeClike.noLike = 0
                    }
                } else if (index == 1) {
                    if (this.noLikeClike.noLike == 0) {
                        this.likeClick.like = 0
                        this.noLikeClike.noLike = 1
                    } else {
                        this.noLikeClike.noLike = 0
                        this.likeClick.like = 0
                    }
                }

                //  同步后台数据
                let photosGlance = {
                    fkPId: this.photo.pid,
                    fkUId: window.sessionStorage.getItem('pkId'),
                    pgTf: 0
                }
                if (this.likeClick.like == 1) {
                    photosGlance.pgTf = 1
                } else if (this.noLikeClike.noLike == 1) {
                    photosGlance.pgTf = 2
                } else {
                    photosGlance.pgTf = 0
                }

                let _this = this
                _this.$api.photosGlanceApi.updata(photosGlance).then(res => {
                    if (res == 1) {
                        console.log("成功")
                    } else console.log("失败")
                })

            },

            //    收藏
            onCollect() {
                let _this = this
                let photoCollect = {
                    fkUId: window.sessionStorage.getItem('pkId'),
                    fkPgId: _this.photo.pid
                }

                if (this.collects.tf == 0) {
                    this.collects.tf = 1
                    _this.$api.photoCollectApi.insert(photoCollect).then(res => {
                        console.log("收藏")
                    })
                } else {
                    this.collects.tf = 0
                    _this.$api.photoCollectApi.deleteByFkUIdAndFkPgId(_this.photo.pid).then(res => {
                        console.log("取消收藏")
                    })
                }


            },

            //    添加浏览记录
            insertCollect() {

                console.log("pkid")
                console.log(window.sessionStorage.getItem('pkId'))
                let _this = this
                //  同步后台数据
                let photosGlance = {
                    fkPId: this.photo.pid,
                    fkUId: window.sessionStorage.getItem('pkId'),
                    pgTf: 0
                }
                if (this.likeClick.like == 1) {
                    photosGlance.pgTf = 1
                } else if (this.noLikeClike.noLike == 1) {
                    photosGlance.pgTf = 2
                } else {
                    photosGlance.pgTf = 0
                }

                _this.$api.photosGlanceApi.insert(photosGlance)

            }

        },
        mounted() {
            //将渲染至于任务线程，确保渲染不会错误


        },
        created() {

            let _this = this

            //浏览数
            _this.$api.photosGlanceApi.countFkPId(this.photo.pid).then(res => {
                if (res == 0) {
                    _this.viewNumber = 0
                } else _this.viewNumber = res
            })

            //点赞数量
            _this.$api.photosGlanceApi.countByPgTf(_this.photo.pid, 1).then(res => {
                _this.likeClick.likeNumber = res
            })

            //点赞 不点赞
            if (_this.photo.pid != null || _this.photo.pid != 'NaN') {
                _this.$api.photosGlanceApi.findAllByFkUIdAndFkPId(_this.photo.pid).then(res => {
                    if (res == 1) {
                        this.likeClick.like = 1
                        this.noLikeClike.noLike = 0
                    } else if (res == 2) {
                        this.likeClick.like = 0
                        this.noLikeClike.noLike = 1
                    } else if (res == 0 || res == null) {
                        this.likeClick.like = 0
                        this.noLikeClike.noLike = 0
                    }
                })
            }

            //    判断是否收藏
            _this.$api.photoCollectApi.findAllByFkUIdAndFkPgId(_this.photo.pid).then(res => {
                _this.collects.tf = res
            })

            //    判断收藏数量
            _this.$api.photoCollectApi.countByFkPgId(_this.photo.pid).then(res => {
                _this.collects.collectsNumber = res
            })

        }
    }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .module_button_left {
        width: 40%;
        background-color: #13B4E9;
        border-color: #13B4E9;
        float: left
    }

    .module_button_left:hover {
        background-color: aqua;
        border-color: aqua;
    }

    .module_button_right {
        width: 40%;
        float: right;
    }
</style>