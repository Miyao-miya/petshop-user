<template>
    <div>
<!--        导航-->
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 10px;margin-left: 10px">
                <el-breadcrumb-item :to="{ path: '/homes' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>帖子列表</el-breadcrumb-item>
                <el-breadcrumb-item>帖子详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

<!--        标题-->
        <div class="postTitle" style="margin-top: 10px;margin-left: 10px">这是一个很水的帖子</div>

<!--        标题下划装饰-->
        <div></div>

<!--        内容-->
        <div style="margin-top: 10px;margin-left: 20px">
            <div id="blogDetail2"><p>&nbsp;</p>

                <p>我跟那些乱来的家伙不一样，我是守规矩的人。</p>

                <p>所以，我是来提建议的。</p>

                <p>&nbsp;</p>

                <p>我建议相关部门和人员，自我反省一下，为什么建议专区变成了“招聘专区”和“问答专区”？</p>

                <p>是有那么一大撮人故意捣乱？</p>

                <p>还是说，你们最初的设想就是让大家乱七八糟的发？</p><p>还是大家找不到相应的专区？</p>

            </div>
        </div>
<!--        底部空间-->
        <div style="margin-top: 10px;margin-left: 10px"></div>
    </div>
</template>

<script>
    export default {
        name: "PostDetails",

    }
</script>

<style scoped>
.postTitle{
    width: 100%;
    text-align: center;
    font-size: 20px;
}
</style>