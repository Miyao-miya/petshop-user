--  关于开发团队-->

<template>
    <div>
        <el-row>
            <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0?1 : 0" >
                <el-card :body-style="{ padding: '20px'}">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="image">
                    <div style="padding: 14px;">
                        <span>易建平</span>
                        <div class="bottom clearfix">
                            <span>负责前后端及文档30%</span>
                            <el-button type="text" class="button">查看简介</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0 ?3 : 0">
                <el-card :body-style="{ padding: '20px' }">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="image">
                    <div style="padding: 14px;">
                        <span>李林旺</span>
                        <div class="bottom clearfix">
                            <span>负责前后端及文档25%</span>
                            <el-button type="text" class="button">查看简介</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0 ?3 : 0">
                <el-card :body-style="{ padding: '20px' }">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="image">
                    <div style="padding: 14px;">
                        <span>赵忠祥</span>
                        <div class="bottom clearfix">
                            <span>负责前后端及文档15%</span>
                            <el-button type="text" class="button">查看简介</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0 ?3 : 0">
                <el-card :body-style="{ padding: '20px' }">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="image">
                    <div style="padding: 14px;">
                        <span>黄联宗</span>
                        <div class="bottom clearfix">
                            <span>负责前后端及文档15%</span>
                            <el-button type="text" class="button">查看简介</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" v-for="(o, index) in 1" :key="o" :offset="index > 0 ?3 : 0">
                <el-card :body-style="{ padding: '20px' }">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="image">
                    <div style="padding: 14px;">
                        <span>吴程辉</span>
                        <div class="bottom clearfix">
                            <span>负责前后端及文档15%</span>
                            <el-button type="text" class="button">查看简介</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>

        </el-row>


    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>

<style scoped>

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>