<!--  帖子簡述模块-->

<template>
    <div class="top">
          <!--        头像-->
          <div class="userImge">
              <IndividualTop v-bind:Users="postData.user"/>
          </div>

          <!--    内容-->
          <div class="ueserPost" @click="toPostDetails">
              <el-row>
                  <el-card :body-style="{padding: '0px'}">
                      <!--  标题-->
                      <p style="margin-top: 10px;margin-left: 10px">
                          {{postData.post.pName}}
                      </p>

                      <!--   封面图片-->
                      <el-image
                              style="height: 120px; margin-top: 10px; margin-left: 10px"
                              :src="postData.post.pImg"
                              fit="contain"></el-image>

                      <!--  type-->
                      <p>
                          <el-tag v-for="(item,index) in postData.post.pType"
                                  @click.stop="toTypePostList(item)"
                                  type="warning"
                                  style="color: aqua;margin-top: 10px;margin-left: 10px"> {{item}}
                          </el-tag>
                      </p>


                      <!--   底部-->
                      <p>
                          <!--  发布时间-->
                          <i class="el-icon-time"
                             style="margin-top: 10px;margin-left: 10px; color: #d6d6d6">
                              <span style="margin-left: 4px">{{postData.post.pDate}}</span>
                          </i>

                          <!--   观看数量-->
                          <i class="el-icon-view"
                             style="margin-top: 10px;margin-left: 10px; color: #d6d6d6">
                              <span style="margin-left: 4px">{{postData.post.pView}}</span>
                          </i>

                          <!--  评论数量-->
                          <i class="el-icon-chat-line-square"
                             style="margin-top: 10px;margin-left: 10px; color: #d6d6d6">
                              <span style="margin-left: 4px">{{postData.post.pAnswer}}</span>
                          </i>
                      </p>

                      <p style="margin-bottom: 6px"></p>
                  </el-card>
              </el-row>
          </div>


    </div>

</template>

<script>
    import IndividualTop from "../../../../utils/IndividualTop";

    export default {
        name: "Index",
        components: {
            IndividualTop
        },
        props:[
            'postData'
        ],
        data() {
            return {

            }
        },
        methods: {
            //    跳转帖子详情
            toPostDetails() {
                console.log("帖子详情")
                let { href } =this.$router.resolve({
                    path:'/postdetails',
                    query:{
                        newPage:'true'
                    }
                });
                window.open(href, '_blank')
            },

            //    跳转至对应 type帖子列 页面
            toTypePostList(item) {
                console.log(item)
            },
        },
        watch:{

            // postData: {
            //     handler(val, oldVal) {
            //
            //     }
            // }
        },
        created() {

            let _this = this

            //阅读数
            _this.$api.postLikeApi.countByFkPId(_this.postData.post.pId).then(res =>{
                if (res != null){
                    _this.postData.post.pView = res
                }
            })

        //   回复数
            _this.$api.postAnswerApi.countByFkPId(_this.postData.post.pId).then(res =>{
                if (res != null){
                    _this.postData.post.pAnswer = res
                }
            })

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

    .top{
        width: 100%;
    }

    .userImge {
        float: left;
        /*background-color: #13B4E9;*/
    }

    .ueserPost {
        width: 90%;
        float: right;
        /*background-color: #57d4c3;*/
        box-shadow: -6px -10px 5px rgba(153, 153, 153, 0.4);
    }
</style>