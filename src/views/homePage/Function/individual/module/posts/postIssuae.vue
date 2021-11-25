<template>
    <div>
        <el-row :gutter="15">
            <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
                <el-col :span="12">
                    <el-form-item label="标题" prop="pName">
                        <el-input v-model="formData.pName" placeholder="请输入标题" clearable :style="{width: '100%'}">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24" style="margin-bottom: 62px">
                    <el-form-item label="内容" prop="pContent">
                        <EditorQuillEditor v-model="formData.pContent"
                                           :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%',float:'left'}"/>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="type" prop="type">
                        <el-checkbox-group v-model="formData.type" size="medium">
                            <el-checkbox v-for="(item, index) in typeOptions" :key="index" :label="item.value"
                                         :disabled="item.disabled">{{item.label}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="封面上传" prop="pImg" required>
                        <el-upload ref="pImg"
                                   :file-list="pImgfileList"
                                   :action="pImgAction"
                                   :on-success="pImgUploadImg"
                                   :before-upload="pImgBeforeUpload">
                            <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="发布时间" prop="field105">
                        <el-date-picker v-model="formData.field105" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                                        :style="{width: '100%'}" placeholder="请选择发布时间" clearable></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item size="large">
                        <el-button type="primary" @click="submitForm">提交</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-row>
    </div>
</template>
<script>
    // import EditorQuillEditor from "../../../utils/EditorQuillEditor";
    import EditorQuillEditor from "../../../../../utils/EditorQuillEditor";

    export default {
        components: {EditorQuillEditor},
        props: [],
        data() {
            return {
                formData: {
                    pName: undefined,
                    pContent: undefined,
                    type: [1],
                    pImg: null,
                    field105: null,
                },
                rules: {
                    pName: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    pContent: [{
                        required: true,
                        message: '请输入内容',
                        trigger: 'blur'
                    }],
                    type: [],
                    field105: [],
                },
                pImgAction: 'http://39.105.202.40:8282/upload',
                pImgfileList: [],
                typeOptions: [{
                    "label": "动漫",
                    "value": "动漫"
                }, {
                    "label": "宠物",
                    "value": "宠物"
                }],
            }
        },
        computed: {},
        watch: {},
        created() {
            let _this = this

            let types ={
                label:'',
                value:'',
            }


            _this.$api.typeApi.listByAll().then(res =>{
                if (res != null){
                    _this.typeOptions =[]
                    for (let i=0; i<res.length; i++){
                        types.label = res[i].tName
                        types.value = res[i].tId
                        _this.typeOptions.push(JSON.parse(JSON.stringify(types)))
                    }
                }
            })
        },
        mounted() {
        },
        methods: {
            submitForm() {
                this.$refs['elForm'].validate(valid => {
                    if (!valid) console.log(this.formData)
                    // return
                    // TODO 提交表单
                })
            },
            resetForm() {
                this.$refs['elForm'].resetFields()
            },
            pImgBeforeUpload(file) {
                let isRightSize = file.size / 1024 / 1024 < 2
                if (!isRightSize) {
                    this.$message.error('文件大小超过 2MB')
                }
                return isRightSize
            },

            pImgUploadImg(response, file, fileList) {
                // this.formData.pConent = '-' + file.response.msg
                this.formData.pImg(file.response.msg)
            },
        }
    }

</script>
<style>
    .el-upload__tip {
        line-height: 1.2;
    }


    .el-button--primary {
        color: #FFFFFF;
        background-color: #00BFFF;
        border-color: #00BFFF;
    }

    .el-button--primary:hover {
        color: #00BFFF;
        background-color: #FFFFFF;
        border-color: #00BFFF;
    }

    .el-button--primary:active {
        color: #00BFFF;
        background-color: #FFFFFF;
        border-color: #00BFFF;
    }

</style>
