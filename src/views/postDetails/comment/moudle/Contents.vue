<!--  帖子簡述模块-->

<template>
    <div class="top">

        <div class="tops">

            <!--        头像-->
            <div class="userImge" style="margin-top:  25px">
                <IndividualTop v-bind:Users="postAanswers.user"/>
            </div>

            <!--    内容-->
            <div class="ueserPost">

                <el-row style="" :body-style="{padding: '0px'}">

                    <!--                    @其他用户-->
                    <div>
                        <p v-if="postAanswers.userB != null" class="toUserB">
                            @{{postAanswersCopy.userB.uName}}
                        </p>
                    </div>

                    <!--  评论内容-->
                    <div style="margin-top: 10px;margin-left: 20px"
                         v-html="postAanswersCopy.paContent">

                    </div>

                    <!--   底部-->
                    <div>
                        <!--                        点赞-->
                        <div @click="onLikeClick(0)" style="margin-top: 10px;margin-left: 10px;">
                            <Like v-bind:likeClick="postAanswersCopy.likeClick"
                                  @click="onLikeClick"/>
                        </div>
                        <!--                        不喜欢-->
                        <div @click="onLikeClick(1)" style="margin-top: 10px;margin-left: 10px;">
                            <NoLike v-bind:noLikeClike="postAanswersCopy.noLikeClike"/>
                        </div>
                        <!--  发布时间-->
                        <i class="el-icon-time"
                           style="margin-top: 10px;margin-left: 20px; color: #d6d6d6">
                            <span style="margin-left: 4px">{{postAanswersCopy.paDate}}</span>
                        </i>

                        <!--  评论数量-->
                        <i class="el-icon-chat-line-square"
                           @click.stop="comment"
                           style="margin-top: 10px;margin-left: 10px; color: #d6d6d6">
                        </i>

                    </div>

                        <!--                        <Contents v-bind:postAanswer="postAanswerLists[0]"/>-->

                        <p style="margin-bottom: 6px"></p>
                </el-row>

            </div>

        </div>

        <div style="margin-top: 10px"></div>
    </div>

</template>

<script>
    import IndividualTop from "../../../utils/IndividualTop";
    import Like from "../../../utils/levelicon/Like";
    import NoLike from "../../../utils/levelicon/NoLike";


    export default {
        name: "Contents",
        components: {
            IndividualTop,
            Like,
            NoLike,
        },
        props: [
            'postAanswers',
            'commentFarme',
        ],
        data() {
            return {
                postAanswersCopy:'',
            }
        },
        methods: {
            //输入评论
            comment(){
                console.log(this.commentFarme)

                if (this.commentFarme == 'false'){
                    this.$emit('update:commentFarme', 'true')
                }else {
                    this.$emit('update:commentFarme', 'false')
                }
            },


            //    跳转至对应 type帖子列 页面
            toTypePostList(item) {
                console.log(item)
            },

            onLikeClick(index) {
                if (index == 0) {

                    if (this.postAanswersCopy.likeClick.like == 0) {
                        this.postAanswersCopy.likeClick.like = 1
                        this.postAanswersCopy.noLikeClike.noLike = 0
                    } else {
                        this.postAanswersCopy.likeClick.like = 0
                    }
                } else if (index == 1) {
                    if (this.postAanswersCopy.noLikeClike.noLike == 0) {
                        this.postAanswersCopy.likeClick.like = 0
                        this.postAanswersCopy.noLikeClike.noLike = 1
                    } else {
                        this.postAanswersCopy.noLikeClike.noLike = 0
                    }
                }
            }
        },
        created() {
            //拷貝

            if (this.postAanswersCopy != null){
                this.postAanswersCopy = JSON.parse(JSON.stringify(this.postAanswers))
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
        float: left;
        margin-left: 5%;
        /*background-color: #57d4c3;*/
        /*border-radius: 10px;*/
        /*box-shadow: 4px 4px 5px 3px rgba(153, 153, 153, 0.4);*/
    }

    .toUserB {
        color: #13B4E9;
    }
</style>