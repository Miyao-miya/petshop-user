
<!-- 评论框-->

<template>
    <div class="commentCss">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
            <el-form-item label="" prop="field102">
                <el-input v-model="formData.field102" type="textarea" placeholder="请遵守评论规则"
                          :style="{width: '80%'}" :autosize="{ minRows: 2, maxRows: 6 }"
                          resize="none"></el-input>
            </el-form-item>

            <el-form-item size="large" style="width: 20%">
                <el-button type="success" @click.stop="commentSubmitForm">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "CommentFarme",
        props:[
          'commentFarme'
        ],
        data() {
            return {
                formData: {
                    field102: undefined,
                    commentFarme:this.commentFarme,
                },
                rules: {
                    field102: [{
                        required: true,
                        message: '未输入信息',
                        trigger: 'blur'
                    }],
                },
            }
        },
        watch:{

        },
        methods:{
            commentSubmitForm() {

                this.$emit('update:commentFarme', 'false')

                this.$refs['elForm'].validate(valid => {
                    if (!valid) return
                    // TODO 提交表单
                })

            },

        },
    }
</script>

<style scoped>

</style>