<!--  商店-->

<template>
    <div class="doctorTop top">

        <li v-for="(item,index) in doctor"
            :key="index"
            @click="mindexClick"
            class="doctorLi">
            <MIndex class="mindexCss"
                    v-bind:doctor="item"
                    :key="(new Date()).getTime()"></MIndex>
        </li>

        <!--        查看更多-->
        <div class="doctorAdd">
            <el-button type="success" plain @click="addDoctor">换一批</el-button>
        </div>
    </div>

</template>

<script>
    import $ from 'jquery';
    import MIndex from "./module/Index";

    export default {
        name: "Index",
        components: {
            MIndex
        },
        data() {
            return {
                doctor: [
                    {
                        dId: "10001",
                        dName: "医生1",
                        dImg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                        dGrade: "2"
                    },
                    {
                        dId: "10001",
                        dName: "医生1",
                        dImg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                        dGrade: "2"
                    },
                    {
                        dId: "10001",
                        dName: "医生1",
                        dImg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                        dGrade: "2"
                    },
                    {
                        dId: "10001",
                        dName: "医生1",
                        dImg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                        dGrade: "2"
                    },
                    {
                        dId: "10001",
                        dName: "医生1",
                        dImg: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                        dGrade: "2"
                    },
                ],
                total: '',
                pageNum: '',
                size: '',
                pages: '',
            }
        },
        mounted() {
            ad()
        },
        methods: {
            //    点击卡片跳转
            mindexClick() {
                // console.log(this.doctor[0].dId)
            },

            //换一批
            addDoctor(){
                let next = 0
                let size = 0
                if((this.pageNum+1)*this.size>this.total){
                    if (this.total - this.pageNum * this.size <0){
                        next = 1;
                        size = this.size;
                    }else {
                        size = this.total - this.pageNum * this.size
                        next = this.pageNum + 1
                    }
                }else {
                    next = this.pageNum +1
                    size = this.size +1
                }

                let goods = {
                    dId:'',
                    dName:'',
                    dImg:'',
                    dImgs:[],
                    dGprice:'',
                    dGcontent:'',
                }

                let goodsS = []

                this.$api.goodsApi.goodsPageInfo(next, size).then(res =>{

                    this.total = res.total
                    this.pages = res.pages
                    this.pageNum = res.pageNum
                    // this.doctor = res.list

                    for (let i=0; i<res.list.length; i++){
                        goods.dId = res.list[i].gid
                        goods.dName = res.list[i].gname
                        goods.dImg = res.list[i].gimg
                        goods.dImgs = res.list[i].gimgs
                        goods.dGprice = res.list[i].gprice
                        goods.dGcontent = res.list[i].gcontent

                        goodsS.push(JSON.parse(JSON.stringify(goods)))
                    }


                    _this.doctor = goodsS

                })
            },
        },
        created() {
            let _this = this

            let goods = {
                dId:'',
                dName:'',
                dImg:'',
                dImgs:[],
                dGprice:'',
                dGcontent:'',
            }

            let goodsS = []

            //    获取医生列表
            this.$api.goodsApi.goodsPageInfo(1, 5).then(res =>{


                this.total = res.total
                this.pages = res.pages
                this.pageNum = res.pageNum
                // this.doctor = res.list

                for (let i=0; i<res.list.length; i++){

                    goods.dId = res.list[i].gid
                    goods.dName = res.list[i].gname
                    goods.dImg = res.list[i].gimg
                    goods.dImgs = res.list[i].gimgs
                    goods.dGprice = res.list[i].gprice
                    goods.dGcontent = res.list[i].gcontent

                    goodsS.push(JSON.parse(JSON.stringify(goods)))
                }


                _this.doctor = goodsS

            })

        }
    }

    //卡片位置处理
    function ad() {
        $.each($('.doctorTop li'), function (index, e) {
            if ((index + 1) % 3 == 2) {
                e.classList.add('doctorLi_m')
            }
        })
    }


</script>

<style scoped>
    /*@import "src/css/none.css";*/
    .top {
        /*width: 62.5%;*/
        /*margin-left: 18.75%;*/
        background-color: #50E3CE;
    }

    .doctorLi {
        width: 30%;
        float: left;
        /*margin-left: 2%;*/
        /*margin-right: 2%;*/
        margin-top: 2%;
        /*margin-left: 2%;*/
    }

    .doctorLi_m {
        margin-left: 5%;
        margin-right: 5%;
    }

    .mindexCss {
        /*float: left;*/
    }

    .mindex_m {
        margin-left: 5%;
    }

    .doctorAdd{
        float: left;
        margin-left: 10%;
        margin-top: 10%;
    }
</style>