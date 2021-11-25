
<!--  显示 已预约未执行的相关信息-->

<template>
    <div>
        <div>

            <template>
                <el-table
                        :data="moduleData"
                        style="width: 100%; text-align: center">
                    <el-table-column
                            prop="mDate"
                            label="商品名"
                            style="width: 30%; text-align: center">
                    </el-table-column>
                    <el-table-column
                            prop="fkDName"
                            label="价格"
                            style="width: 30%; text-align: center">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            style="width: 40%; text-align: center">
                        <template slot-scope="mContent">
                            <!--                       备注-->
                            <el-popover
                                    placement="top-start"
                                    title="商品描述"
                                    width="200"
                                    trigger="hover"
                                    :content="mContent.row.mContent">
                                <el-button slot="reference" type="success" icon="el-icon-edit" circle></el-button>
                            </el-popover>

                            <!--                        取消预约-->
                            <el-popconfirm
                                    title="你需要将商品移除购物车吗？"
                                    @confirm="as(mContent)">
                                <el-button slot="reference" type="info" icon="el-icon-close" circle
                                           style="margin-left: 5%" ></el-button>
                            </el-popconfirm>

                        </template>


                    </el-table-column>
                </el-table>
            </template>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Rerervation",
        components:{},
        props:[
            'moduleData'
            ],
        data() {
            return {
                loading: true,
                visible: false,
            };
        },
        methods: {
            as(make){

            //    删除预约
                let _this = this
                _this.$api.shopCartApi.delect(make.row.mid).then(res =>{
                    if (res == 1){
                        this.moduleData.splice(make.$index,1)
                    }
                })

            },
        }
    }
</script>

<style scoped>
>>>.cell{
    text-align: center;
}


</style>