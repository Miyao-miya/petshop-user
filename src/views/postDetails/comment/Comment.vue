<template>
    <div>
        <!--        输入框-->
        <div class="commentCss">
            <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
                <el-form-item label="" prop="field102">
                    <el-input v-model="formData.field102" type="textarea" placeholder="请遵守评论规则"
                              :style="{width: '80%'}" :autosize="{ minRows: 2, maxRows: 6 }"
                              resize="none"></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="success" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!--        评论内容-->
        <ModuleContent class="commentCss" v-for="(item, index) in postAanswerList"
                       v-bind:postAanswer="item" :key="index"/>

        <!--      底部  -->
        <div class="commentCss">

        </div>
    </div>
</template>

<script>
    import ModuleContent from "./moudle/Content";

    export default {
        name: "Comment",
        components: {
            ModuleContent,
        },
        data() {
            return {
                formData: {
                    field102: undefined,
                },
                rules: {
                    field102: [{
                        required: true,
                        message: '未输入信息',
                        trigger: 'blur'
                    }],
                },
                //    评论类容
                postAanswerList: [
                    {
                        user: {
                            uId: '1001',
                            uName: '用户1',
                            uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                            uGrade: '3',
                        },
                        paContent: '<p>我只想水经验</p><p>想睡</p>',
                        paDate: '2021-05-06',
                        paClickA: 'true',
                        paNumber: '202',
                        //点赞
                        likeClick:{
                            like: 0,
                            likeNumber: 17,
                            likeSize: 10,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:1,
                            noLikeSize: 10
                        },
                        postAanswersLists: [
                            {
                                user: {
                                    uId: '1001',
                                    uName: '用户1',
                                    uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                                    uGrade: '3',
                                },
                                userB:{
                                    uId: '1001',
                                    uName: '用户1',
                                },
                                paContent: '<p>我只想水经验</p><p>想睡</p>',
                                paDate: '2021-05-06',
                                paClickA: 'true',
                                paLikes: '201',
                                likeClick:{
                                    like: 1,
                                    likeNumber: 17,
                                    likeSize: 10,
                                },
                                noLikeClike:{
                                    noLike:0,
                                    noLikeSize: 10
                                },
                            },
                            {
                                user: {
                                    uId: '1001',
                                    uName: '用户1',
                                    uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                                    uGrade: '3',
                                },
                                paContent: '<p>我只想水经验</p><p>想睡</p>',
                                paDate: '2021-05-06',
                                paClickA: 'true',
                                likeClick:{
                                    like: 0,
                                    likeNumber: 17,
                                    likeSize: 10,
                                },
                                noLikeClike:{
                                    noLike:1,
                                    noLikeSize: 10
                                },
                            },
                        ],
                    },
                    {
                        user: {
                            uId: '1001',
                            uName: '用户1',
                            uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                            uGrade: '3',
                        },
                        paContent: '<p>我只想水经验</p><p>想睡</p>',
                        paDate: '2021-05-06',
                        paClickA: 'true',
                        paLikes: '201',
                        paNumber: '202',
                        //点赞
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 10,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 10
                        },
                    },
                    {
                        user: {
                            uId: '1001',
                            uName: '用户1',
                            uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                            uGrade: '3',
                        },
                        paContent: '<p>我只想水经验</p><p>想睡</p>',
                        paDate: '2021-05-06',
                        paClickA: 'false',
                        paNumber: '2',
                        //点赞
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 10,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 10
                        },
                    },
                    {
                        user: {
                            uId: '1001',
                            uName: '用户1',
                            uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                            uGrade: '3',
                        },
                        paContent: '<p>我只想水经验</p><p>想睡</p>',
                        paDate: '2021-05-06',
                        paClickA: 'false',
                        paLikes: '201',
                        paNumber: '2',
                        //点赞
                        likeClick:{
                            like: 1,
                            likeNumber: 17,
                            likeSize: 10,
                        },
                        //不喜欢数据
                        noLikeClike:{
                            noLike:0,
                            noLikeSize: 10
                        },
                    },
                ]
            }
        },
        methods: {
            submitForm() {
                this.$refs['elForm'].validate(valid => {
                    if (!valid) return
                    // TODO 提交表单
                })
            },
            resetForm() {
                this.$refs['elForm'].resetFields()
            },
        },
    }
</script>

<style scoped>
    .commentCss {
        border-bottom: 1px solid rgba(214, 214, 214, 0.4);
        margin-top: 10px;

    }
</style>