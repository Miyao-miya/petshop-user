<!--  个人中心的主体-->

<template>
    <div class="top" @click="moudleFloat">


        <!--        &lt;!&ndash;       预约相关模块 &ndash;&gt;-->
        <!--        <Reservation class="subject-module"/>-->

        <!--        &lt;!&ndash;        帖子相关模块&ndash;&gt;-->

        <!--        <Posts class="subject-module"/>-->


        <!--        &lt;!&ndash;        购物车/购买历史&ndash;&gt;-->
        <!--        <shopcat class="subject-module"/>-->


        <!--        &lt;!&ndash;        购买记录模块&ndash;&gt;-->


<!--        <span v-for="(item, incex) in moduleData">-->
<!--            <Reservation class="subject-module"-->
<!--                         v-if="item.module == 'Reservation'"-->
<!--                         v-bind:moduleData="item.moduleData"-->
<!--                         v-bind:moduleName="item.moduleName"-->
<!--                         v-bind:display="item.display"/>-->


<!--            <Posts class="subject-module"-->
<!--                   v-else-if="item.module == 'Posts'"-->
<!--                   v-bind:moduleData="item.moduleData"-->
<!--                   v-bind:moduleName="item.moduleName"-->
<!--                   v-bind:display="item.display"/>-->
<!--        </span>-->

        <Reservation  class="subject-module"/>

        <Posts  class="subject-module"/>

        <shopcat  class="subject-module"/>

        <photo class="subject-module"/>

    </div>
</template>

<script>

    //引入模块
    import Reservation from "./reservation/Index";
    import Posts from "./posts/Index";
    import shopcat from "./shopCart/Index";
    import Photo from "./photo/Index"

    //引入插件
    import $ from 'jquery'

    export default {
        name: "Subject",
        components: {
            Reservation,
            Posts,
            shopcat,
            Photo,
        },
        data() {
            return {
                //左边模块高度
                leftModuleH: 0,
                //右边模块高度
                rightModuleH: 0,

                modules_a: {
                    module: "Reservation",
                    moduleName: "就诊管理",
                    display: "预约管理",
                    moduleData: [],
                },

                moduleDatas_a: {
                    name: "预约管理",
                    cite: "Rerervation",
                    content: [],
                },

                contents_a: {
                    dId: '',
                    mDate: '2016-05-04',
                    fkDName: '王小虎',
                    mContent: '上海市普陀区金沙江路 1518 弄'
                },


                //    个人页面模块
                moduleData: [
                    {
                        module: "Reservation",
                        moduleName: "就诊管理",
                        display: "预约管理",
                        moduleData: [
                            {
                                name: "预约管理",
                                cite: "Rerervation",
                                content: [{
                                    mDate: '2016-05-03',
                                    fkDName: '王小虎',
                                    mContent: '上海市普陀区金沙江路 1518 弄'
                                }, {
                                    mDate: '2016-05-04',
                                    fkDName: '王小虎',
                                    mContent: '上海市普陀区金沙江路 1518 弄'
                                }, {
                                    mDate: '2016-05-05',
                                    fkDName: '王ss',
                                    mContent: '上海市普陀区金沙江路 1518 弄'
                                }]
                            },
                            {
                                name: "理疗记录",
                                cite: "RerervationHistoy",
                                content: [{
                                    mDate: '2016-05-03',
                                    fkDName: '张小白',
                                    mContent: '上海市普陀区金沙江路 1518 弄'
                                }, {
                                    mDate: '2016-05-04',
                                    fkDName: '王小虎',
                                    mContent: '上海市普陀区金沙江路 1518 弄'
                                }, {
                                    mDate: '2016-05-05',
                                    fkDName: '王小虎',
                                    mContent: '上海市普陀区金沙江路 1518 弄'
                                }]
                            }
                        ]
                    },
                    {
                        module: "Posts",
                        moduleName: "帖子信息",
                        display: "最新发布",
                        moduleData: [
                            {
                                name: "最新发布",
                                cite: "PostsA",
                                content: [
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    },
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    },
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    }
                                ]
                            },
                            {
                                name: "最多点击",
                                cite: "PostsA",
                                content: [
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    },
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    },
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    }
                                ]
                            },
                            {
                                name: "最多收藏",
                                cite: "PostsA",
                                content: [
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    },
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    },
                                    {
                                        pName: '第一个帖子',
                                        pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                                        pClick: '16',
                                        pDate: '2021-05-06'
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }

        },
        methods: {
            //用于控制模块的偏移
            moudleFloat() {
                moduleF()
            }

        },
        mounted() {
            //将渲染至于任务线程，确保渲染不会错误
            setTimeout(() => {
                moduleF()
            }, 6)
            // moduleFs()
        },
        updated() {
            // moduleF()


        },
        created() {

        }
    }


    //    jq 使用
    //移动模块
    function moduleF() {
        // console.log($(".top").children(".subject-module").length)
        // $(".top").children(".subject-module").CLASS(".floatCssA")
        let lh;
        let rh;
        $.each($('.top .subject-module'), function (index, e) {

            //去除旧的偏移

            e.classList.remove("floatCssA")

            e.classList.remove("floatCssB")

            if (index == 0) {
                e.classList.add("floatCssA")
                lh = $(e).height()
            } else if (index == 1) {
                e.classList.add("floatCssB")
                rh = $(e).height()
            } else {
                if (lh > rh) {
                    e.classList.add("floatCssB")
                    rh += $(e).height()
                } else {
                    e.classList.add("floatCssA")
                    lh += $(e).height()
                }
            }

        })
    }

    //    class样式检验
    function calssTset(className, classLet) {
        $.each($(classLet).classList, function (index, e) {
            if (e == className) {
                return true
            }
        })
        return false
    }

</script>

<style scoped>

    .top::after {
        content: '';
        display: block;
        clear: both;
    }

    .subject-module {
        width: 45%;
        /*float: left;*/
        /*margin-left: 2.5%;*/
        /*margin-right: 2.5%;*/
        margin-top: 20px;
        box-shadow: 4px 4px 5px 3px rgba(153, 153, 153, 0.4);
    }

    .floatCssA {
        float: left;
        /*height: px;*/
    }

    .floatCssB {
        float: right;
    }
</style>