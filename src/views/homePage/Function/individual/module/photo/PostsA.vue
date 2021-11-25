
<!--  这个卡片是 个人中心 用来 展示帖子的简易卡片-->

<template>
    <div>
<!--        {{posts}}-->
        <el-card :body-style="{ padding: '0px' }" style="width: 100%">
            <h4 style="padding: 6px;">
                <span>{{moduleData.pName}}</span>
            </h4>
            <div class="image-div">
                <img :src="moduleData.pImg" class="image">
            </div>
            <div style="padding: 6px;">
                <span style="float: left; color: rgba(153,153,153,0.5)">
                    <i class="el-icon-view"/>
                    {{moduleData.pClick}}</span>
                <span style="float: right; color: rgba(153,153,153,0.5)">
                    <i class="el-icon-time"/>
                    {{moduleData.pDate}}</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "PostsA",
        props:[
            'moduleData'
        ],
    }
</script>

<style scoped>
    .top{
        width: 100%;
    }

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
    .image-div{
        width: 100%;
        height: 60px;
    }
    .image {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /*display: block;*/
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>