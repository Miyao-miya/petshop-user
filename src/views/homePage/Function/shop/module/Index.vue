<template>

    <!--    医生展示卡片-->

    <div>


        <el-row>
            <el-col>
                <el-card :body-style="{ padding: '0px'}">
                    <!--                    图片-->
                    <el-image
                            style="width: 100%; height: 100%"
                            :src="doctor.dImg"
                            fit="contain"></el-image>
                    <!--                    输出数据-->
                    <div style="padding: 14px;">

                        <p style="font-size: 16px; ">
                            <span>商品编号：{{doctor.dId}}</span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>{{doctor.dName}}</span>
                        </p>

                        <p style="float: right">
                            <span style="font-size: 14px; color: #99a9bf">价格：</span>
                            <span style="font-size: 14px; color: #99a9bf">{{doctor.dGprice}}</span>
                        </p>

                        <p>
                            <span style="font-size: 14px; color: #99a9bf">介绍：</span>
                            <span style="color: #d3dce6">{{doctor.dGcontent}}</span>
                        </p>

                        <p>&nbsp;</p>
                        <el-row>

                            <el-popover
                                    placement="bottom"
                                    title="加入购物车"
                                    width="210"
                                    trigger="hover">


                                <p style="font-size: 14px; color: #99a9bf;margin-left: 20px">商品名：{{doctor.dName}}</p>
                                <p style="color: #d3dce6; margin-left: 20px">介绍：{{doctor.dGcontent}}</p>
                                <p style="color: #d3dce6;  margin-left: 20px">介格：{{doctor.dGprice}}</p>

                                <p>&nbsp;</p>
                                <p style="color: #d3dce6;  margin-left: 20px">加入数量：</p>
                                <p>&nbsp;</p>
                                <p>
                                    <el-input-number
                                            v-model="num"
                                            @change="handleChange"
                                            :min="1" :max="10"
                                            label="购买数量"></el-input-number>
                                </p>
                                <p>&nbsp;</p>
                                <el-button type="success"
                                           style="float: right"
                                            @click ="shopCarts">确认</el-button>
                                <el-button slot="reference"
                                           type="primary"
                                           @click.stop="record"
                                           class="module_button_left">购物车
                                </el-button>
                            </el-popover>


                            <el-popover
                                    placement="bottom"
                                    title="购买"
                                    width="210"
                                    trigger="hover">


                                <p style="font-size: 14px; color: #99a9bf;margin-left: 20px">商品名：{{doctor.dName}}</p>
                                <p style="color: #d3dce6; margin-left: 20px">介绍：{{doctor.dGcontent}}</p>
                                <p style="color: #d3dce6;  margin-left: 20px">介格：{{doctor.dGprice}}</p>

                                <p>&nbsp;</p>
                                <p style="color: #d3dce6;  margin-left: 20px">加入数量：</p>
                                <p>&nbsp;</p>
                                <p>
                                    <el-input-number
                                            v-model="numOrder"
                                            @change="handleChange"
                                            :min="1" :max="10"
                                            label="购买数量"></el-input-number>
                                </p>
                                <p>&nbsp;</p>

                                <el-input placeholder="请输入支付密码" v-model="orderPassword" show-password></el-input>

                                <p>&nbsp;</p>
                                <el-button type="success"
                                           style="float: right"
                                           @click ="orders">确认</el-button>
                                <el-button slot="reference"
                                           type="success"
                                           @click.stop="reservations"
                                           class="module_button_right">购买
                                </el-button>
                            </el-popover>



                        </el-row>

                    </div>
                </el-card>
            </el-col>
        </el-row>




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
                porderTf:false,
                orderPassword:'',
                num: 1,
                numOrder: 1,
                currentDate: new Date(),
                reservationsTxt: '',
                openDialog: false,
                dialogTableVisible:false,
            };
        },
        watch:{
            porderTf:{
                handler(val){
                    let order = {
                        fkGId: this.doctor.dId,
                        fkUId: window.sessionStorage.getItem('pkId'),
                        oPrice: this.numOrder * this.doctor.dGprice
                    }

                    let shopOrderVo ={
                        fkUId: window.sessionStorage.getItem('pkId'),
                        password: this.orderPassword,
                        orders: order,
                    }

                    let _this = this
                    _this.$api.ordersApi.shopOrder(shopOrderVo).then(res =>{
                        if (res == 1){
                            alert("购买成功")
                        }else if (-1) {
                            alert("资金不足")
                        }else {
                            alert("购买错误，请联系管理员")
                        }
                    })
                }
            }
        },
        methods: {

            //生成购物单
            orders(){

                let _this = this
                if (_this.orderPassword != null && _this.orderPassword != ''){
                    _this.$api.funApi.findAllByFkUIdAndFPassword(window.sessionStorage.getItem('pkId'),_this.orderPassword).then(res =>{
                        if (res!= null && res ==1){
                            _this.porderTf = true;
                        }else {
                            alert("密码错误")
                        }
                    })
                }else {
                    alert("请输入密码")
                }

            },

            //加入购物车
            shopCarts(){

                let shopcart = {
                    fkUId: window.sessionStorage.getItem('pkId'),
                    fkGId: this.doctor.dId,
                    scNumber: this.num,
                }

                let _this = this
                _this.$api.shopCartApi.insert(shopcart).then(res =>{
                    if (res == 1){
                        alert("已加入购物车")
                    }
                })
            },

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