<template>
    <div>
        <el-form ref="PhotosForm" :model="formData" :rules="rules" size="medium" label-width="100px">
            <el-form-item label="相册名" prop="pName">
                <el-input v-model="formData.pName" placeholder="请输入相册名" clearable :style="{width: '100%'}"></el-input>
            </el-form-item>
            <el-form-item label="封面上传" prop="pImg" required>
                <el-upload ref="pImg"
                           :file-list="pImgfileList"
                           :action="pImgAction"
                           :limit="1"
                           :before-upload="pImgBeforeUpload"
                           :on-success="pImgUploadImg"
                           list-type="picture-card">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="内容上传" prop="pConent" required>
                <el-upload ref="pConent"
                           :file-list="pConentfileList"
                           :action="pConentAction"
                           :before-upload="pConentBeforeUpload"
                           :on-success="pConentUploadImg"
                           list-type="picture-card">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="选择标签" prop="pType">
                <el-checkbox-group v-model="formData.pType" :max="3" size="medium">
                    <el-checkbox v-for="(item, index) in pTypeOptions" :key="index" :label="item.value"
                                 :disabled="item.disabled">{{item.label}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        components: {},
        props: [],
        data() {
            return {
                formData: {
                    pName: undefined,
                    pImg: null,
                    pConent: null,
                    pType: [1],
                },
                rules: {
                    pName: [{
                        required: true,
                        message: '请输入相册名',
                        trigger: 'blur'
                    }],
                    pType: [{
                        required: true,
                        type: 'array',
                        message: '请至少选择一个pType',
                        trigger: 'change'
                    }],
                },
                pImgAction: 'http://39.105.202.40:8282/upload',
                pImgfileList: [],
                pConentAction: 'http://39.105.202.40:8282/upload',
                pConentfileList: [],
                pTypeOptions: [{
                    "label": "动漫",
                    "value": 1
                }, {
                    "label": "游戏",
                    "value": 2
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
                    _this.pTypeOptions =[]
                    for (let i=0; i<res.length; i++){
                        types.label = res[i].tName
                        types.value = res[i].tId
                        _this.pTypeOptions.push(JSON.parse(JSON.stringify(types)))
                    }
                }
            })

        },
        mounted() {
        },
        methods: {
            submitForm() {
                this.$refs['PhotosForm'].validate(valid => {
                    if (!valid){
                        this.formData.pConent = this.pConentfileList
                        this.formData.pImg =''
                        for (let i=0; i<this.pConentfileList.length; i++){
                            this.formData.pConent = this.pConentfileList[i] + '&' + this.formData.pConent
                        }

                        let type = this.formData.pType
                        let types = ''
                        for (let i = 0; i<type.length; i++){
                            types = types + '-' + type[i]
                        }
                        this.formData.pType = types
                        let _this = this
                        _this.$api.photosApi.insert(_this.formData).then(res =>{
                            if (res == 1){
                                alert("添加成功")
                            }
                        })
                    }

                })
            },
            resetForm() {
                this.$refs['PhotosForm'].resetFields()
            },
            pImgBeforeUpload(file) {
                let isRightSize = file.size / 1024 / 1024 < 4
                if (!isRightSize) {
                    this.$message.error('文件大小超过 4MB')
                }
                return isRightSize
            },
            pConentBeforeUpload(file) {
                let isRightSize = file.size / 1024 / 1024 < 2
                if (!isRightSize) {
                    this.$message.error('文件大小超过 2MB')
                }
                return isRightSize
            },
            pImgUploadImg(response, file, fileList) {
                this.formData.pImg = file.response.msg
            },
            pConentUploadImg(response, file, fileList) {
                // this.formData.pConent = '-' + file.response.msg
                this.pConentfileList.push(file.response.msg)
            },
        }
    }

</script>
<style>
    .el-upload__tip {
        line-height: 1.2;
    }

</style>
