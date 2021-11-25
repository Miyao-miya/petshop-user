<template>

    <!--    医生展示卡片-->

    <div>


        <el-row>
            <el-col>
                <el-card :body-style="{ padding: '0px'}">
                    <!--                    图片-->
                    <el-image
                            style="width: 100%; height: 100%"
                            :src="doctor.dimg"
                            fit="contain"></el-image>
                    <!--                    输出数据-->
                    <div style="padding: 14px;">

                        <p style="font-size: 16px; ">
                            <span>工号：{{doctor.did}}</span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>{{doctor.dname}}</span>
                        </p>

                        <p>
                            <span style="font-size: 14px; color: #99a9bf">个人介绍：</span>
                            <span style="color: #d3dce6">{{doctor.dinroduce}}</span>
                        </p>

                        <p>&nbsp;</p>
                        <el-row>

                            <el-popover
                                    placement="bottom"
                                    title="医疗记录"
                                    width="420"
                                    trigger="hover">
                                <RecordModule :dockerId="doctor.did"/>
                                <el-button slot="reference"
                                           type="primary"
                                           @click.stop="record"
                                           class="module_button_left">记录
                                </el-button>
                            </el-popover>


                            <el-button v-if="reservationsTxt == 0"
                                       type="success"
                                       @click.stop="reservations"
                                       class="module_button_right">预约
                            </el-button>


                            <el-popover v-else-if="reservationsTxt == 1"
                                        placement="top-start"
                                        width="120"
                                        trigger="hover"
                                        content="您已经预约了该医生。">
                                <el-button slot="reference"
                                           type="info"
                                           class="module_button_right">预约
                                </el-button>
                            </el-popover>


                        </el-row>

                    </div>
                </el-card>
            </el-col>
        </el-row>



        <MakeMoudule v-if="openDialog"
                     v-bind:dialogTableVisible = "dialogTableVisible"
                     v-bind:reservationsTxt = "reservationsTxt"
                     @reservations="reservations"
        v-bind:doctor = "doctor.did"/>


    </div>
</template>

<script>
    import RecordModule from "./RecordModule";
    import MakeMoudule from "./MakeMoudule";


    export default {
        name: "Index",
        components: {
            RecordModule,
            MakeMoudule,
        },
        props: ['doctor']
        ,
        data() {
            return {
                currentDate: new Date(),
                reservationsTxt: '',
                openDialog: false,
                dialogTableVisible:false,
            };
        },
        methods: {
            //    记录
            record() {
                // console.log("记录")
            },

            //    预约
            reservations() {

                if (this.openDialog == false){
                    this.openDialog = true;
                    this.dialogTableVisible = true
                }else {
                    this.openDialog = false;
                    this.dialogTableVisible = false
                    this.reservationsTxt = 1
                }
            },

            handleDialog() {
                this.openDialog = true;
                this.$nextTick(() => {
                    this.$refs.testDialog.init(2);
                });
            }
        },
        created() {
            //    判断是否有预约
            if (this.doctor.did != null) {
                this.$api.makeApi.findAllByFkUIdAndFkDId(this.doctor.did).then(res => {
                    this.reservationsTxt = res
                })
            }
        }
    }
</script>

<style scoped>
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

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .module_button_left {
        width: 40%;
        background-color: #13B4E9;
        border-color: #13B4E9;
        float: left
    }

    .module_button_left:hover {
        background-color: aqua;
        border-color: aqua;
    }

    .module_button_right {
        width: 40%;
        float: right;
    }
</style>