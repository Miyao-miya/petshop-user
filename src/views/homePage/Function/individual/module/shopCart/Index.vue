<!--  个人中心的 预约相关模块-->

<template>
    <div class="top">
        <!--        标题-->
        <h3 style="text-align: center; margin-top: 2%">{{moduleName}}</h3>
        <!--        预约  预约历史 目录-->
        <div style="margin-top: 20px;">
            <template>
                <el-tabs v-model="display" type="card" @tab-click="handleClick">
                    <el-tab-pane v-for="(item, index) in moduleData"
                                 :label=item.name :name="item.name">
                        <Rerervation v-if="item.cite == 'Rerervation'"
                                     v-bind:moduleData="item.content"
                                     :key="(new Date()).getTime()"/>
                        <RerervationHistoy v-else-if="item.cite == 'RerervationHistoy'"
                                           v-bind:moduleData="item.content"
                                           :key="(new Date()).getTime()"/>
                        <p v-else>42222</p>
                    </el-tab-pane>
                </el-tabs>
            </template>
        </div>

    </div>
</template>

<script>
    import Rerervation from "./Rerervation";
    import RerervationHistoy from "./RerervationHistoy";


    export default {
        name: "Index",
        components: {
            Rerervation,
            RerervationHistoy
        },
        props: [

        ],

        data() {
            return {
                activeName: '',
                moduleName: "购物管理",
                display: "购物车管理",
                moduleData: [

                ],
                Rerervation:
                    {
                        name: "购物车管理",
                        cite: "Rerervation",
                        content: []
                    },

                RerervationHistoy:
                    {
                        name: "购买记录",
                        cite: "RerervationHistoy",
                        content: []
                    }
                ,
                contents:{
                    mDate: '2016-05-04',
                    fkDName: '王小虎',
                    mContent: '上海市普陀区金沙江路 1518 弄'
                },
            };
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        created() {
            let _this = this

            _this.$api.shopCartApi.findAllByFkUId(window.sessionStorage.getItem('pkId'), 1, 5).then(res =>{
                    if (res != null) {

                       setTimeout(()=>{
                           _this.Rerervation.content = []
                           for (let j = 0; j < res.list.length; j++) {
                               _this.contents.mDate = res.list[j].fkGId.gname;
                               _this.contents.fkDName = res.list[j].fkGId.gprice;
                               _this.contents.mContent = res.list[j].fkGId.gcontent;
                               // _this.contents.dId = res.list[j].fkDId.did;
                               _this.contents.mid = res.list[j].scId;

                               _this.Rerervation.content.push(JSON.parse(JSON.stringify(_this.contents)))
                           }

                           _this.moduleData.push(_this.Rerervation)
                       },2)

                    }

            })

            _this.$api.ordersApi.findAllByFkUIdEd(window.sessionStorage.getItem('pkId'), 1, 5).then(res =>{
                if (res != null) {
                    _this.RerervationHistoy.content = []
                    for (let j = 0; j < res.list.length; j++) {
                        _this.contents.mDate = res.list[j].odateb;
                        _this.contents.fkDName = res.list[j].fkGId.gname;
                        _this.contents.mContent = res.list[j].oprice;
                        _this.contents.dId = res.list[j].fkGId.gid;
                        _this.contents.mid = res.list[j].oid;

                        _this.RerervationHistoy.content.push(JSON.parse(JSON.stringify(_this.contents)))
                    }

                    _this.moduleData.push(_this.RerervationHistoy)

                }

            })


        }
    }
</script>

<style scoped>
    >>> .el-tabs__item.is-active {
        color: #13B4E9;
    }


    .top {
        /*width: 100%;*/
        /*height: 120px;*/
        overflow: hidden;
        /*background-color: #d6d6d6;*/
    }
</style>