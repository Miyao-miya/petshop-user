<!--  个人页面头部-->

<template>
    <div class="ITop"
         :style="{background: 'url(' +Users.uBackImg + ') no-repeat'}">
        <!--        头像-->
        <div class="heade_a">
<!--            头像图片>-->
                <img class="avatar-img"
                     :src="Users.uImg"
                />
<!--            等级-->
            <div class="avatar-img_b"> {{Users.uGrade}} </div>

        </div>
<!--        基础信息： 姓名、个性签名-->
        <div class="heade_data">
            <p style="font-weight: bold">{{Users.uName}}</p>
            <p>{{Users.uSign}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndividualTop",
        props: [
            'Users'
        ],
        data() {
            return {
                url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                uName: '用户1',
                uGrade: '2',
                uSign: '这是一个废物的主页'
            }
        },

    }
</script>

<style scoped>
    .ITop {
        width: 100%;
        height: 150px;
        /*background-color: #13B4E9;*/
        overflow: hidden;
        background: url("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg") no-repeat;
        background-size: 100%;
        object-fit: cover;
        display: block;
    }

    .heade_a {
        width: 65px;
        height: 65px;
        overflow: hidden;
        border-radius: 50%;
        margin-top: 60px;
        margin-left: 5%;
        float: left;
        background-color: #d6d6d6;
    }

    .heade_b {
        width: 90%;
        height: 90%;
        margin-left: 5%;
        margin-top: 5%;
        background-color: #d6d6d6;
        border-radius: 50%;
    }

    .avatar-img {
        width: 94%;
        height: 94%;
        margin-left: 3%;
        margin-top: 3%;
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }

    .avatar-img_b {
        width: 40%;
        height: 40%;
        margin-left: 60%;
        margin-top: -50%;
        text-align: center;
        line-height: 20px;
        background-color: #070707;
        color: #ffffff;
        font-size: 15px;
        font-weight: bold;
    }

    .heade_data{
        margin-top: 90px;
        margin-left: 2%;
        float: left;
        color: white;
    }
</style>