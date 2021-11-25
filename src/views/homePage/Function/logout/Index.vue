<!--  登出-->

<template>
    <div>

        <el-button type="info"
                   @click="logOut">退出系统
        </el-button>

    </div>
</template>

<script>
    export default {
        name: "Index",
        methods: {
            logOut(){
                window.sessionStorage.removeItem('pkId')
                this.$router.go(0)
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>