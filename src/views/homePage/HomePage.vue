<template>
    <div class="homePage">

        <!--        头部-->

<!--        <Index/>-->

        <!--        主体-->

        <div>

            <el-container style="width: 100% ; border: 1px solid #eee; margin-top: 10px">


                <el-menu class="el-menu-demo"
                         mode="horizontal"
                         :default-active="$router.options.routes[1].path"
                         router
                         background-color="rgba(192,192,192,0)"
                         active-text-color="orange"
                         style="width: 100%; font-weight: bold;">

                    <el-menu-item v-for="(item_a, index_a) in $router.options.routes"
                                  v-if="tFif(index_a)"
                                  :index="item_a.path"
                                  :key="index_a"
                                  :class="$route.path == item_a.path ? 'is-active':''"
                                  style="text-align: center; height: 30px; line-height: 30px"
                                  :style="elemuCss()">{{item_a.name}}
                    </el-menu-item>

                </el-menu>

            </el-container>

            <router-view style="margin-top: 10px; width: 62.5%; margin-left: 18.75%;"/>

        </div>


    </div>
</template>

<script>
    import Index from "./Top/Index";
    import $ from 'jquery';

    export default {
        name: "HomePage",
        components: {
            Index
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {

            //设置主目录样式
            elemuCss() {
                let v = 1 / (this.$router.options.routes.length - 2)
                return "width: " + Number(v * 100).toFixed(1) + '%' + ";"
            },

            /**
             * 对人员是否登入进行判断， 并生成相应的主目录
             * */
            tFif(index) {
                if (index != 0) {

                    if (window.sessionStorage.getItem('pkId') != null && index == this.$router.options.routes.length - 2) {
                        return false
                    } else if (window.sessionStorage.getItem('pkId') == null && index == this.$router.options.routes.length - 1) {
                        return false
                    }

                    return true
                } else return false
            }

        },
        created() {
            // let tab = $(".el-menu-item")
            // //.is-active
            //
            // for (let i = 0; i < tab.length; i++) {
            //     if (tab[i].innerText = '商店') {
            //         tab[i].addClass('.is-active')
            //         location.reload('http://localhost:8080/homes')
            //     }else if (tab[i].innerText = '登出'){
            //         tab[i].removeClass('.is-active')
            //     }
            // }
        }
    }


</script>

<style scoped>
    .homePage {
        min-width: 1200px;
        width: 100vw;
        /*background-color: ;*/
    }
</style>