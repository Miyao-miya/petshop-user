<template>
    <div class="recordTop">
        <el-table
                :data="doctor"
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="mid"
                    label="ID"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="fkUId.uname"
                    label="用户"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="fkBId.fkBcId.bcName"
                    label="类型"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="mdate"
                    label="时间"
                    width="120">
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @prev-click="pageSize(-1)"
                @next-click="pageSize(1)"
                >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "RecordModule",
        props:[
            'dockerId'
        ],
        data() {
            return {
                doctor:'',
                total:'',
                pages:'',
                pageNum: '',
            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },

        //    上一页  下一页
            pageSize(index){

                if (index == 1){
                    this.$api.medicalApi.findAllByFkDId(this.dockerId,this.pageNum+1, size).then(res =>{
                        this.total = res.total
                        this.pages = res.pages
                        this.pageNum = res.pageNum
                        this.doctor = res.list
                    })
                }else if (index == -1){
                    this.$api.medicalApi.findAllByFkDId(this.dockerId,this.pageNum-1, size).then(res =>{
                        this.total = res.total
                        this.pages = res.pages
                        this.pageNum = res.pageNum
                        this.doctor = res.list
                    })
                }

            }
        },
        created() {
            let _this = this
            if (_this.dockerId != null){
                _this.$api.medicalApi.findAllByFkDId(_this.dockerId, 1, 5).then(res =>{
                    _this.doctor = res.list
                    _this.total = res.total
                    _this.pages = res.pages
                    _this.pageNum = res.pageNum
                })
            }
        }
    }
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>