<!--   这是个人中心 的 帖子信息模块-->

<template>
    <div class="top">
        <!--        标题-->
        <h3 style="text-align: center; margin-top: 2%">我的帖子</h3>

        <!--        主体-->
        <div style="margin-top: 10px;">
            <template>
                <el-tabs v-model="display" @tab-click="handleClick">

                    <el-tab-pane v-for="(item, index) in moduleData"
                                 :label=item.name :name="item.name">


                        <PostsA v-for="(items, indexs) in item.content"
                                v-if="item.cite == 'PostsA'"
                                v-bind:moduleData="items"
                                :key="index+indexs"
                                class="posts-module"
                                @click.native="dialogVisible = true"/>


                        <!--                        <p v-else>42222</p>-->
                        <el-button type="primary"
                                   @click.native="postsModuleButton(1)"
                                   class="posts-module-button-left">获得更多
                        </el-button>

                        <el-button type="success" plain
                                   @click.native="reservations"
                                   class="posts-module-button-right">添加帖子
                        </el-button>
                    </el-tab-pane>
                </el-tabs>
            </template>
        </div>


        <!--        提示-->
        <el-dialog
                title="帖子相关操作"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
            <span>需要下架帖子吗</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button @click="offline">下架</el-button>
                <el-button @click="offline">进入帖子详情</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="添加帖子"
                :visible.sync="dialogVisiblePhoto"
                width="70%"
                :before-close="handleClose">

            <PostIssuae/>
            <el-button @click="dialogVisiblePhoto = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisiblePhoto = false">确 定</el-button>
        </el-dialog>

    </div>
</template>

<script>
    import PostsA from "./PostsA";
    import PostIssuae from "./postIssuae";
    import $ from 'jquery'

    export default {
        name: "Index",
        components: {
            PostsA,
            PostIssuae
        },
        props: [],
        data() {
            return {
                dialogVisiblePhoto:false,
                dialogVisible: false,
                activeName: 'first',
                module: "Posts",
                moduleName: "帖子信息",
                display: "最新发布",
                moduleData: [],
                postsO:
                    {
                        name: "最新发布",
                        cite: "PostsA",
                        content: [],
                        total: '0',
                        pageNum: '0',
                        size: '5',
                        pages: '0',
                    },

                postsL:
                    {
                        name: "最多点击",
                        cite: "PostsA",
                        content: [],
                        total: '0',
                        pageNum: '0',
                        size: '5',
                        pages: '0',
                    }
                ,
                postsC:
                    {
                        name: "最多收藏",
                        cite: "PostsA",
                        content: [],
                        total: '0',
                        pageNum: '0',
                        size: '5',
                        pages: '0',
                    }
                ,
                contents: {
                    pName: '第一个帖子',
                    pImg: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    pClick: '16',
                    pDate: '2021-05-06'
                },
            }
        },
        watch: {
            moduleData: {

                handler(val, oldVal) {

                    let _this = this

                    // _this.$api.postLikeApi.countByFkPId(pid).then(res =>{
                    //     val[val.length-1].content[val[val.length-1].content.length-1].pClick = res

                    for (let i = 0; i < val.length; i++) {
                        for (let j = 0; j < val[i].content.length; j++) {
                            // let pid = val[val.length-1].content[val[val.length-1].content.length-1].pid;
                            let pid = val[i].content[j].pid
                            if (pid != null) {
                                _this.$api.postLikeApi.countByFkPId(pid).then(res => {
                                    if (res != 0) {
                                        val[i].content[j].pClick = res
                                    } else {
                                        val[i].content[j].pClick = 0
                                    }
                                })
                            } else {
                                val[i].content[j].pClick = 0
                            }

                        }
                    }

                    // })


                }
            }
        },
        methods: {

            reservations() {
                if (this.dialogVisiblePhoto) {
                    this.dialogVisiblePhoto = false
                    this.openDialog = false
                } else {
                    this.dialogVisiblePhoto = true
                    this.openDialog = true
                }
            },

            handleClick(tab, event) {
                // console.log(tab, event);
            },
            postsModuleButton(index) {


                let tab = $(".el-tabs__item.is-top.is-active")

                for (let i = 0; i < tab.length; i++) {
                    if (tab[i].innerText = '最新发布') {

                        this.postsOm()
                    } else if (tab[i].innerText = '最多点击') {
                        this.postsLm()

                    } else if (tab[i].innerText = '最多收藏') {
                        this.postsCm()

                    } else {

                    }
                }
            },

            offline(){
                alert('下架')
                this.dialogVisible = false
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(res => {
                        done();

                    })
                    .catch(_ => {
                        alert("否")
                    });
            },

            //帖子基本信息    最新发布
            postsOm() {
                let _this = this

                let pages = this.page(_this.postsO.pageNum, _this.postsO.size, _this.postsO.total)

                //帖子基本信息    最新发布
                _this.$api.postApi.findAllByFkUId(window.sessionStorage.getItem('pkId'), pages.nexts, pages.sizes).then(res => {
                    if (res != null) {

                        _this.postsO.content = []
                        for (let j = 0; j < res.list.length; j++) {
                            _this.contents.pName = res.list[j].pname;
                            _this.contents.pImg = res.list[j].pimg;
                            _this.contents.pDate = res.list[j].pdate;
                            _this.contents.pid = res.list[j].pid;

                            _this.postsO.content.push(JSON.parse(JSON.stringify(_this.contents)))
                        }

                        _this.postsO.total = res.total
                        _this.postsO.pages = res.pages
                        _this.postsO.pageNum = res.pageNum
                        // _this.moduleData.push(_this.postsO)
                    }
                })
            },

            postsLm() {
                let _this = this

                let pages = this.page(_this.postsO.pageNum, _this.postsO.size, _this.postsO.total)


                //帖子基本信息    最新发布
                _this.$api.postApi.findAllByFkUIdOrderLike(window.sessionStorage.getItem('pkId'), pages.nexts, pages.sizes).then(res => {
                    if (res != null) {

                        _this.postsL.content = []
                        for (let j = 0; j < res.list.length; j++) {
                            _this.contents.pName = res.list[j].pname;
                            _this.contents.pImg = res.list[j].pimg;
                            _this.contents.pDate = res.list[j].pdate;
                            _this.contents.pid = res.list[j].pid;

                            _this.postsL.content.push(JSON.parse(JSON.stringify(_this.contents)))
                        }

                        _this.postsL.total = res.total
                        _this.postsL.pages = res.pages
                        _this.postsL.pageNum = res.pageNum
                    }
                })
            },

            postsCm() {

                let _this = this

                let pages = this.page(_this.postsO.pageNum, _this.postsO.size, _this.postsO.total)

                //帖子基本信息    最新发布
                _this.$api.postApi.findAllByFkUIdOrderCollect(window.sessionStorage.getItem('pkId'), pages.nexts, pages.sizes).then(res => {
                    if (res != null) {

                        _this.postsC.content = []
                        for (let j = 0; j < res.list.length; j++) {
                            _this.contents.pName = res.list[j].pname;
                            _this.contents.pImg = res.list[j].pimg;
                            _this.contents.pDate = res.list[j].pdate;
                            _this.contents.pid = res.list[j].pid;

                            _this.postsC.content.push(JSON.parse(JSON.stringify(_this.contents)))
                        }

                        _this.postsC.total = res.total
                        _this.postsC.pages = res.pages
                        _this.postsC.pageNum = res.pageNum
                    }
                })
            },

            page(nexta, sizea, toala) {
                let next = 0
                let size = 0
                if ((nexta + 1) * sizea > toala) {
                    if (toala - nexta * sizea < 0) {
                        next = 1;
                        size = sizea;
                    } else {
                        size = toala - nexta * sizea
                        next = nexta + 1
                    }
                } else {
                    next = nexta + 1
                    size = sizea + 1
                }

                let pages = {
                    nexts: next,
                    sizes: size
                }

                return pages
            },

        },
        created() {
            let _this = this


            //帖子基本信息    最新发布
            _this.$api.postApi.findAllByFkUId(window.sessionStorage.getItem('pkId'), 1, 5).then(res => {
                if (res != null) {

                    _this.postsO.content = []
                    for (let j = 0; j < res.list.length; j++) {
                        _this.contents.pName = res.list[j].pname;
                        _this.contents.pImg = res.list[j].pimg;
                        _this.contents.pDate = res.list[j].pdate;
                        _this.contents.pid = res.list[j].pid;

                        _this.postsO.content.push(JSON.parse(JSON.stringify(_this.contents)))
                    }

                    _this.postsO.total = res.total
                    _this.postsO.pages = res.pages
                    _this.postsO.pageNum = res.pageNum
                    _this.moduleData.push(_this.postsO)
                }
            })

            //帖子基本信息    最多点击
            _this.$api.postApi.findAllByFkUIdOrderLike(window.sessionStorage.getItem('pkId'), 1, 5).then(res => {
                if (res != null) {

                    _this.postsL.content = []
                    for (let j = 0; j < res.list.length; j++) {
                        _this.contents.pName = res.list[j].pname;
                        _this.contents.pImg = res.list[j].pimg;
                        _this.contents.pDate = res.list[j].pdate;
                        _this.contents.pid = res.list[j].pid;

                        _this.postsL.content.push(JSON.parse(JSON.stringify(_this.contents)))
                    }

                    _this.postsL.total = res.total
                    _this.postsL.pages = res.pages
                    _this.postsL.pageNum = res.pageNum
                    _this.moduleData.push(_this.postsL)
                }
            })

            //帖子基本信息    最多收藏
            _this.$api.postApi.findAllByFkUIdOrderCollect(window.sessionStorage.getItem('pkId'), 1, 5).then(res => {
                if (res != null) {

                    _this.postsC.content = []
                    for (let j = 0; j < res.list.length; j++) {
                        _this.contents.pName = res.list[j].pname;
                        _this.contents.pImg = res.list[j].pimg;
                        _this.contents.pDate = res.list[j].pdate;
                        _this.contents.pid = res.list[j].pid;

                        _this.postsC.content.push(JSON.parse(JSON.stringify(_this.contents)))
                    }

                    _this.postsC.total = res.total
                    _this.postsC.pages = res.pages
                    _this.postsC.pageNum = res.pageNum
                    _this.moduleData.push(_this.postsC)
                }
            })

        }
    }
</script>

<style scoped>
    >>> .el-tabs__item.is-active {
        color: #13B4E9;
    }

    >>> .el-tabs__active-bar {
        background-color: #13B4E9;
    }

    >>> .el-button--primary {
        color: #FFFFFF;
        background-color: #13B4E9;
        border-color: #13B4E9;
    }

    >>> .el-button:hover, .el-button:focus {
        color: #13B4E9;
        border-color: #b3d9d9;
        background-color: #e6f2f2;
    }

    .top {
        /*width: 100%;*/
        /*height: 120px;*/
        overflow: hidden;
        /*background-color: #d6d6d6;*/
    }

    .posts-module {
        margin-bottom: 6px;
        width: 45%;
        float: left;
        box-shadow: 2px 2px 2px 1px rgba(153, 153, 153, 0.3);
        margin-left: 2.5%;
        margin-right: 2.5%
    }

    .posts-module-button {
        margin-left: 12%;
        margin-top: 6%;
        margin-bottom: 4%;
    }

    .posts-module-button-left {
        float: left;
        margin-left: 12%;
        margin-top: 6%;
        margin-bottom: 4%;
    }

    .posts-module-button-right {
        float: right;
        margin-right: 12%;
        margin-top: 6%;
        margin-bottom: 4%;
    }
</style>