<!-- 帖子详细信息-->
<template>
    <div class="top">

<!--        头像相关-->
        <Individual class="individualCss" />
<!--        文章内容-->
        <PostDetails class="postDetailsCss" />
<!--        评论-->
        <Comment class="postComment" />

    </div>
</template>

<script>
    import Individual from "./Individual/Individual";
    import PostDetails from "./PostDetails/PostDetails";
    import Comment from "./comment/Comment";

    export default {
        name: "Index",
        components: {
            PostDetails,
            Individual,
            Comment
        }
    }
</script>

<style scoped>
    .top {
        min-width: 1200px;
        width: 100vw;
    }

    .individualCss {
        float: left;
        width: 18%;
        margin-left: 9.375%;
        margin-top: 10px;
        box-shadow: 4px 4px 5px 3px rgba(153, 153, 153, 0.4);
        border-radius: 20px;
    }

    .postDetailsCss {
        float: left;
        width: 62.5%;
        margin-left: 0.75%;
        margin-top: 10px;
        box-shadow: 4px 4px 5px 3px rgba(153, 153, 153, 0.4);
        border-radius: 20px;
    }

    .postComment{
        float: left;
        width: 62.5%;
        margin-left: 28.125%;
        margin-top: 10px;
        box-shadow: 4px 4px 5px 3px rgba(153, 153, 153, 0.4);
        border-radius: 10px;
    }
</style>