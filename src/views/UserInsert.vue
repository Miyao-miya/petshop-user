<template>
  <div>
    <el-form ref="UsersForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="密码" prop="uPassword">
        <el-input v-model="formData.uPassword" placeholder="请输入密码" clearable show-password
          :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="支付密码" prop="uPassword">
        <el-input v-model="formData.funPassword" placeholder="请输入支付密码" clearable show-password
                  :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="uName">
        <el-input v-model="formData.uName" placeholder="请输入用户名" clearable :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="自我介绍" prop="uInroduce">
        <el-input v-model="formData.uInroduce" type="textarea" placeholder="请输入自我介绍"
          :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="头像上传" prop="uImg" required>
        <el-upload ref="uImg"
                   :file-list="uImgfileList"
                   :action="uImgAction"
                   :before-upload="uImgBeforeUpload"
                   :on-success="pImgUploadImg"
          list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="备注" prop="uNote">
        <el-input v-model="formData.uNote" type="textarea" placeholder="请输入备注"
          :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
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
        uPassword: undefined,
        uName: undefined,
        uInroduce: undefined,
        uImg: null,
        uNote: undefined,
        funPassword: undefined,
      },
      rules: {
        uPassword: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        uName: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        uInroduce: [{
          required: true,
          message: '请输入自我介绍',
          trigger: 'blur'
        }],
        uNote: [{
          required: true,
          message: '请输入备注',
          trigger: 'blur'
        }],
      },
      uImgAction: 'http://39.105.202.40:8282/upload',
      uImgfileList: [],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    pImgUploadImg(response, file, fileList) {
      this.formData.uImg = file.response.msg
      console.log(this.formData.uImg)
    },
    submitForm() {
      this.$refs['UsersForm'].validate(valid => {
        if (!valid){

        }else {
          console.log(111)

          let _this = this
          let user ={
            uPassword: _this.formData.uPassword,
            uName:_this.formData.uName,
            uImg: _this.formData.uImg,
            uInroduce: _this.formData.uInroduce,
            uNote: _this.formData.uNote,
            uTf: 1,
          }

          let unserIndertVO = {
            users: user,
            password: _this.formData.funPassword,
            number: 0,
          }

          console.log(2222)
          _this.$api.userApi.userInsert(unserIndertVO).then(res =>{
            console.log(3333)
            if (res == -1){
              alert("注册失败，请联系管理员")
            }else if (res == 0){
              alert("备注重复")
            }else {
              console.log(3333555)
              alert("注册成功")
              alert("请记住你的账号:" +res)
              window.sessionStorage.setItem('pkId',res)
              alert(window.sessionStorage.getItem('pkId'))
              this.$emit(window.sessionStorage.getItem('pkId'))
              this.$router.go(0)
            }
          })
        }

        console.log(6666)
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['UsersForm'].resetFields()
    },
    uImgBeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 4
      if (!isRightSize) {
        this.$message.error('文件大小超过 4MB')
      }
      return isRightSize
    },
  }
}

</script>
<style>
.el-upload__tip {
  line-height: 1.2;
}

</style>
