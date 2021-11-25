<template>
    <div>
        <el-dialog
                :visible.sync="dialogTableVisible"
                :modal="true"
                :close-on-click-modal="true"
                :close-on-press-escape="true"
                :show-close="true"
                @open="onOpen"
                @close="close"
                title="预约">
            <el-row :gutter="15">
                <el-form ref="makeForm" :model="formData" :rules="rules" size="medium" label-width="100px">
                    <el-col :span="24">
                        <el-form-item label="预约选择" prop="fkBId">
                            <el-cascader v-model="formData.fkBId" :options="business" :props="fkBIdProps"
                                         :style="{width: '100%'}" placeholder="请选择预约选择" clearable></el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="日期选择" prop="mDatea">
                            <el-date-picker v-model="formData.field104" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                                            :style="{width: '100%'}" placeholder="请选择日期选择" clearable></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="时间选择" prop="mDateb">
                            <el-time-picker v-model="formData.mDateb" format="HH:mm:ss" value-format="HH:mm:ss"
                                            :picker-options='{"selectableRange":"00:00:00-23:59:59"}'
                                            :style="{width: '100%'}"
                                            placeholder="请选择时间选择" clearable></el-time-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="添加备注" prop="mContent">
                            <el-input v-model="formData.mContent" type="textarea" placeholder="请输入添加备注"
                                      :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <div slot="footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="handelConfirm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import businessApi from "../../../../../api/businessApi";

    export default {
        inheritAttrs: false,
        components: {},
        props: [
            'dialogTableVisible',
            'doctor',
            'reservationsTxt'],
        data() {
            return {
                business: [],
                formData: {
                    fkBId: [1, 2],
                    field104: '2021-10-27',
                    mDateb: '23:57:27',
                    mContent: undefined,
                },
                rules: {
                    fkBId: [{
                        required: true,
                        type: 'array',
                        message: '请至少选择一个fkBId',
                        trigger: 'change'
                    }],
                    mDatea: [{
                        required: true,
                        message: '请选择日期选择',
                        trigger: 'change'
                    }],
                    mDateb: [{
                        required: true,
                        message: '请选择时间选择',
                        trigger: 'change'
                    }],
                    mContent: [],
                },
                fkBIdOptions: [],
                fkBIdProps: {
                    "multiple": false
                },
            }
        },
        computed: {},
        watch: {},
        created() {
            // 获取业务类型
            let _this = this
            _this.$api.businessApi.listByAll(1, 5).then(res => {
                _this.total = res.total
                _this.pages = res.pages
                _this.size = res.size
                _this.pageNum = res.pageNum
                let arr = res.list
                for (let j = 0, len = arr.length; j < len; j++) {
                    let leiXi = {
                        value: arr[j].fkBcId.bcId,
                        label: arr[j].bname,
                    }
                    _this.business.push(leiXi)
                }

            })
        },
        mounted() {
        },
        methods: {
            onOpen() {
            },
            onClose() {
                // this.$refs['makeForm'].resetFields()
                // this.dialogTableVisible = false;
            },
            close() {
                // this.$emit('update:visible', false)
                this.$emit("reservations")
            },
            handelConfirm() {
                let _this = this
                this.$refs['makeForm'].validate(valid => {
                    if (!valid) {
                        console.log(valid)
                        let makeform = {
                            fkBId: this.formData.fkBId[0],
                            fkUId: window.sessionStorage.getItem("pkId"),
                            fkDId: this.doctor,
                            mDate: this.formData.field104 + ' ' + this.formData.mDateb,
                            mContent: this.formData.mContent,
                        }

                        _this.$api.makeApi.insert(makeform).then(res => {
                            if (res == 1) {
                                alert("预约成功")
                            }
                        })
                    }
                    this.close()
                })
            },
            getFkBIdOptions() {
                // TODO 发起请求获取数据
                this.fkBIdOptions
            },
        }
    }

</script>
<style>
</style>
