
<!--  个人信息-->
<template>
    <div class="topModule">
<!--        个人头像-->
        <IndividualTop v-bind:Users="user" class="topImg" style="margin-left: 45%" />

<!--        :style="{'margin-left': + topImgmove() + 'px'}"-->

<!--       私信-->
        <div style="margin-left: 20%;width: 80%">
            <el-button type="success" round style="margin-top: 10px">私信</el-button>
            <el-button type="info" round style="margin-top: 10px">关注</el-button>
        </div>

        <p style="margin-top: 10px"></p>
    </div>
</template>

<script>

    import IndividualTop from "../../utils/IndividualTop";


    import $ from 'jquery'

    export default {
        name: "Individual",
        components:{
           IndividualTop
        },
        data(){
            return{
                user: {
                    uId: '1001',
                    uName: '用户1',
                    uImg: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
                    uGrade: '3',
                },
            }
        },
        methods:{
            topImgmove(){
              return   ($(".topModule").width/2 - $(".heade_a").height()/2)
            },
        },
    }

    function topImgMove(){
       return ($(".topModule").width()/2 - $(".heade_a").width()/2)
    }

</script>

<style scoped>
>>>.el-button--primary {
    color: #FFFFFF;
    background-color: #00BFFF;
    border-color: #00BFFF;
}

>>>.el-button--primary:hover {
    color: #00BFFF;
    background-color: #FFFFFF;
    border-color: #00BFFF;
}

    >>>.el-button {
        line-height: 4px;
    }


    .topImg{

    }
</style>