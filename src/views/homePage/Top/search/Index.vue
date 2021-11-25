<!-- 顶部检索框 -->

<template>
    <div class="top_serch">
        <!--        <p style="text-align: center">搜索框</p>-->
        <div class="serch_input">

            <el-form :inline="true" :model="formInline"
                     class="demo-form-inline serch_input_a">

                <div style="float: left; width: 80%">
                    <el-input
                            v-model="formInline.user"
                            placeholder="审批人"
                            STYLE=""></el-input>
                </div>
                <div style="float: left; width: 20%">
                    <el-button type="success" @click="onSubmit" style="float: left;margin-left: 5%">查询</el-button>
                </div>

            </el-form>

        </div>
        <div class="serch_text">
            <p>{{this.$data.keyWord}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                keyWord: '不知道'
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }

</script>

<style scoped>
    .top_serch {
        width: 55%;
        height: 100%;
        /*!*position: absolute;*!*/
        /*background-color: cyan;*/
    }

    .serch_input {
        height: 80%;
        width: 100%;
        /*background-color: white;*/
    }

    .serch_input_a {
        /* margin: auto; */
        /* margin-left: 10%; */
        width: 100%;
        /*margin-left: 12%;*/
        /* margin-top: 0%; */
        padding-top: 2.5%;
    }

    .serch_text {
        /*height: 15%;*/
        width: 100%;
        /*margin-left: 12%;*/
        color: #d6d6d6;
        /*background-color: #50E3CE;*/
    }

    .serch_text p {
        line-height: 100%;
        tab-size: 12px;
    }


</style>