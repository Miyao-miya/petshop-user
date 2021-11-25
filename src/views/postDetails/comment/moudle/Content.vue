<!--  帖子簡述模块-->

<template>
    <div class="top">

        <div class="tops">

            <!--        头像-->
            <div class="userImge">
                <IndividualTop v-bind:Users="postAanswerCopy.user" style="padding-bottom: 6px;padding-top: 6px"/>
            </div>

            <!--    内容-->
            <div class="ueserPost" style="overflow: hidden;">
                <el-row style="padding-top: 6px;padding-bottom: 6px">
                    <el-card style="border-radius: 20px;box-shadow: 3px 3px 4px 2px rgba(153, 153, 153, 0.4);"
                             :body-style="{padding: '0px'}">

                        <!--  评论内容-->
                        <div style="margin-top: 10px;margin-left: 20px"
                             v-html="postAanswerCopy.paContent">

                        </div>

                        <!--                        帖主觉得很棒-->
                        <p v-if="postAanswerCopy.paClickA == 'true'"
                           style="margin-left: 20px; color: rgba(214,214,214,0.7);">
                            帖主觉得很棒
                        </p>


                        <!--   底部-->
                        <div>

                            <!--                        点赞-->
                            <div @click="onLikeClick(0)" style="margin-top: 10px;margin-left: 20px;">
                                <Like v-bind:likeClick="postAanswerCopy.likeClick"/>
                            </div>
                            <!--                        不喜欢-->
                            <div @click="onLikeClick(1)" style="margin-top: 10px;margin-left: 10px;">
                                <NoLike v-bind:noLikeClike="postAanswerCopy.noLikeClike"/>
                            </div>

                            <!--  发布时间-->
                            <i class="el-icon-time"
                               style="margin-top: 10px;margin-left: 20px; color: #d6d6d6">
                                <span style="margin-left: 4px">{{postAanswerCopy.paDate}}</span>
                            </i>

                            <!--  评论数量-->
                            <i class="el-icon-chat-line-square"
                               @click="commentFarmeButton"
                               style="margin-top: 10px;margin-left: 10px; color: #d6d6d6">
                                <span style="margin-left: 4px">{{postAanswerCopy.paNumber}}</span>
                            </i>
                        </div>

                        <!--                        {{postAanswerLists[0]}}-->
                        <Contents v-for="(item, index) in postAanswerCopy.postAanswersLists"
                                  v-bind:postAanswers="item"
                                  :commentFarme.sync="commentFarme"/>

                        <div style="margin-left: 20px">
                            <p v-if="postAanswer.paNumber>3 && !launch "
                               @click="launchs"
                               style="color: #13B4E9">
                                查看更多...
                            </p>


                            <el-pagination
                                    layout="prev, pager, next"
                                    :page-size="6"
                                    :total="totalCount"
                                    :current-page="currentPageNum"
                                    v-else>
                            </el-pagination>

                        </div>

                        <!--                        输入框-->
                        <CommentFarme v-if="commentFarme == 'true'"
                                      :commentFarme.sync="commentFarme"/>

                        <p style="margin-bottom: 6px"></p>
                    </el-card>
                </el-row>
            </div>

        </div>

        <div style="margin-top: 10px"></div>
    </div>

</template>

<script>
    import IndividualTop from "../../../utils/IndividualTop";
    import Contents from "./Contents";
    import Like from "../../../utils/levelicon/Like";
    import NoLike from "../../../utils/levelicon/NoLike";
    import CommentFarme from "./CommentFarme";

    export default {
        name: "Content",
        components: {
            IndividualTop,
            Contents,
            Like,
            NoLike,
            CommentFarme,
        },
        props: [
            'postAanswer'
        ],
        data() {
            return {
                commentFarme: 'false',

                postAanswerCopy: '',
                launch: false,
                //总页数
                totalCount: 60,
                //当前页
                currentPageNum: 2,

            }
        },
        methods: {
            //  展开评论
            launchs() {
                if (!this.launch) {
                    this.launch = true
                } else this.launch = false
            },

            //    跳转至对应 type帖子列 页面
            toTypePostList(item) {
                console.log(item)
            },

            //喜欢  不喜欢
            onLikeClick(index) {

                if (index == 0) {

                    if (this.postAanswerCopy.likeClick.like == 0) {
                        this.postAanswerCopy.likeClick.like = 1
                        this.postAanswerCopy.noLikeClike.noLike = 0
                    } else {
                        this.postAanswerCopy.likeClick.like = 0
                    }
                } else if (index == 1) {
                    if (this.postAanswerCopy.noLikeClike.noLike == 0) {
                        this.postAanswerCopy.likeClick.like = 0
                        this.postAanswerCopy.noLikeClike.noLike = 1
                    } else {
                        this.postAanswerCopy.noLikeClike.noLike = 0
                    }
                }

                //    添加对接后台数据

            },

            //    评论框处理
            commentFarmeButton() {
                if (this.commentFarme == "false") {
                    this.commentFarme = 'true'
                } else {
                    this.commentFarme = 'false'
                }
            }
        },
        created() {
            //拷贝数据
            if (this.postAanswerCopy != null) {
                this.postAanswerCopy = JSON.parse(JSON.stringify(this.postAanswer))
            }


        }
    }
</script>

<style scoped>

    >>> .el-tag {
        /*color: aqua;*/
        font-size: 10px;
        height: 20px;
        line-height: 20px;
    }

    >>> .el-pager li {

        font-size: 12px;
        /* min-width: 35.5px; */
        height: 24px;
        /* line-height: 28px; */;
    }

    >>> .el-pager li.active {
        color: #13B4E9;
    }

    .top {
        width: 100%;

    }

    .tops {
        width: 90%;
        margin-left: 5%;
        overflow: hidden;
    }

    .userImge {
        float: left;
        /*background-color: #13B4E9;*/
    }

    .ueserPost {
        width: 85%;
        float: right;
        margin-right: 5%;

        /*background-color: #57d4c3;*/
        /*border-radius: 10px;*/
        /*box-shadow: 4px 4px 5px 3px rgba(153, 153, 153, 0.4);*/
    }
</style>