<!--    首页-->

<template>
    <div>

        <div style="width: 100%; height: 20px; float: left; color: #d3dce6"></div>

        <div style="width: 100%; float: left; color: #d3dce6">
            <p style="color: #d3dce6; font-size: 16px">精品帖子</p>
            <Form/>
        </div>

        <div style="width: 100%; height: 20px; float: left; color: #d3dce6"></div>

        <div style="width: 100%; float: left; color: #d3dce6">
            <p style="color: #d3dce6; font-size: 16px">精品相册</p>
            <Photo/>
        </div>


        <div style="width: 100%; height: 20px; float: left; color: #d3dce6"></div>
        <div style="width: 100%; float: left;">
            <P style="color: #d3dce6; font-size: 16px">医生推荐</P>
            <Doctor/>
        </div>

        <div style="width: 100%; height: 20px; float: left; color: #d3dce6"></div>

        <div style="width: 100%; float: left; color: #d3dce6">
            <P style="color: #d3dce6; font-size: 16px">精品商品</P>
            <shop/>
        </div>

    </div>
</template>

<script>
    import Shop from "../shop/Index";
    import Form from "../forum/Index";
    import Photo from "../photo/Index";
    import Doctor from "../doctor/Index";

    export default {
        name: "Index",
        components: {
            Shop,
            Form,
            Photo,
            Doctor,
        },
    }
</script>

<style scoped>

</style>