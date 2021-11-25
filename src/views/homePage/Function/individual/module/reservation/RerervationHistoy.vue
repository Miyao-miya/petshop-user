
<!--  显示 预约（以执行）的历史记录 -->

<template>
    <div>
        <div>
            <template>
                <el-table
                        :data="moduleData"
                        style="width: 100%; text-align: center">
                    <el-table-column
                            prop="mDate"
                            label="时间"
                            style="width: 30%; text-align: center">
                    </el-table-column>
                    <el-table-column
                            prop="fkDName"
                            label="医生"
                            style="width: 30%; text-align: center">
                    </el-table-column>
                    <el-table-column
                            prop="mContent"
                            label="备注"
                            style="width: 40%; text-align: center">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RerervationHistoy",
        props:[
            'moduleData'
        ],
        data() {
            return {
                loading: true
            };
        }
    }
</script>

<style scoped>
    >>>.cell{
        text-align: center;
    }
</style>