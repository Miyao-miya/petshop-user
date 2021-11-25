<!--  个人信息-->

<template>
    <div>

        <!--    个人页面头部-->
<!--        个人基础信息 -->
        <IndividualTop v-bind:Users="Users"/>

<!--        帖子重点信息处理 -->
        <Others v-bind:Other="Other"
                style="margin-top: 10px"/>

<!--         个人中心主体-->
        <Subject style="margin-top: 20px"/>
    </div>
</template>

<script>
    import IndividualTop from "./module/IndividualTop";
    import Others from "./module/Others";
    import Subject from "./module/Subject";

    export default {
        name: "Index",
        components: {
            IndividualTop,
            Others,
            Subject
        },
        data() {
            return {
                /**
                 * 用户基础信息
                 * */
                Users: {
                    uId: '1001',
                    uName: '用户1',
                    uGrade: '4',
                    uNote: '',
                    uImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    uSign: '这是一个废物的主页',
                    uBackImg: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                },
                /**
                 * 粉丝数
                 * 获赞数
                 * 阅读数
                * */
                Other:{
                    concerns: "45",
                    pClick: '64',
                    pRead:'45',
                }
            }
        },
        created() {
            // console.log(this.$router)
            // console.log(this.$router.currentRoute.query.userId)

        //    获得个人信息
            let _this = this
            let fkUId = window.sessionStorage.getItem('pkId')
            if (fkUId != null){
                _this.$api.gradeApi.findAllByFkId(fkUId).then(res =>{
                    if (res != null){
                        _this.Users.uId = res.fkId.uid
                        _this.Users.uName = res.fkId.uname
                        _this.Users.uNote = res.fkId.unote
                        _this.Users.uImg = res.fkId.uimg
                        _this.Users.uGrade = res.gnumber
                        if (res.fkId.uinroduc != null){
                            _this.Users.uSign = res.fkId.uinroduc
                        }
                    }
                })

            //    获取等级

            }


        }
    }
</script>

<style scoped>

</style>