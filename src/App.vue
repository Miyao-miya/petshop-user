<template>
    <div id="app">
        <!--    登入-->
        <Login v-if="pkId == null || pkId == ''"
               v-bind:pkid="pkId"
               v-on:logins="pkIds($event)"/>
        <!--    主页-->

        <HomePage v-else-if="this.newPage != 'true'"/>

        <PostIndex v-else/>

    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Login from "./views/Login";
    import HomePage from "./views/homePage/HomePage";
    // import PostDetails from "./views/postDetails/PostDetails";
    import PostIndex from "./views/postDetails/Index";

    export default {
        name: 'app',
        components: {
            Login,
            HomePage,
            PostIndex
        },
        data() {
            return {
                newPage: 'false',
                pkId: ''
            }
        },
        watch: {
            pkId:{
                handler(val){
                    console.log(window.sessionStorage.getItem('pkId'))
                    this.pkId = window.sessionStorage.getItem('pkId')
                }
            }
        },
        methods: {
            pkIds(id) {
                this.pkId = id
            }
        },
        created() {
            /**
             * 测试
             * */
            // window.sessionStorage.setItem('pkId',1001)

            this.pkId = window.sessionStorage.getItem('pkId')

            this.newPage = this.$router.currentRoute.query.newPage
        }
    }
</script>

<style>
    @import "./css/none.css";

    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
