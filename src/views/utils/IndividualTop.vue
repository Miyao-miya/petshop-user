<!--  个人页面头部-->

<template>
    <div class="ITop" @click="toIndividual">
        <!--        头像-->


        <el-popover
            placement="top-start"
            trigger="hover">
            <p STYLE="color: #d3dce6">用户名: {{Users.uName}}</p>
            <p STYLE="color: #d3dce6">用户ID: {{Users.uId}}</p>
            <div class="heade_a" slot="reference">
                <!--            头像图片>-->
                <img class="avatar-img"
                     :src="Users.uImg"
                />
                <!--            等级-->
                <div class="avatar-img_b"> {{Users.uGrade}} </div>

            </div>

        </el-popover>

<!--&lt;!&ndash;        基础信息： 姓名、个性签名&ndash;&gt;-->
<!--        <div class="heade_data">-->
<!--            <p style="font-weight: bold">{{Users.uName}}</p>-->
<!--            <p>&nbsp;</p>-->
<!--            <p>{{Users.uSign}}</p>-->
<!--        </div>-->
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

            }
        },
        methods:{
            toIndividual(){
                console.log("跳转")
            //    跳转到个人信息页
                this.$router.push({path:'/individual', query:{userId: this.Users.uId}})
            }
        },
        created() {
        //    同步等级
            let _this = this
            _this.$api.gradeApi.findAllByFkId(_this.Users.uId).then(res =>{
                if (res != null){
                    _this.Users.uGrade = res.gnumber
                }
            })
        }

    }
</script>

<style scoped>
    .ITop {
        /*background-color: #13B4E9;*/
        overflow: hidden;
        /*background: url("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg") no-repeat;*/
        background-size: 100%;
        object-fit: cover;
        display: block;
    }

    .heade_a {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;

        float: left;
        background-color: #d6d6d6;
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
        font-size: 12px;
        font-weight: bold;
    }

</style>