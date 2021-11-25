<template>
    <div>
        <span class="Other_span">阅读数：{{pRead}} &nbsp; &nbsp;</span>
        <span class="Other_span">获赞数：{{pClick}} &nbsp; &nbsp;</span>
        <span class="Other_span">粉丝数：{{concerns}} &nbsp; &nbsp;</span>
    </div>
</template>

<script>
    export default {
        name: "Others",
        props: [
            'Other'
        ],
        data(){
          return{
              pRead:0,
              pClick:0,
              concerns:0,
          }
        },
        created() {
            let _this = this
        //    获取阅览数
            _this.$api.postLikeApi.countByFkPIdOrderByFkUId(window.sessionStorage.getItem('pkId')).then(res =>{
                if (res != null){
                    _this.pRead = res
                }
            })

        //    获取点赞数
            _this.$api.postLikeApi.countByFkPIdOrderByFkUIdLike(window.sessionStorage.getItem('pkId')).then(res =>{})
            if (res != null){
                _this.pClick = res
            }
        }
    }
</script>

<style scoped>
.Other_span{
    float: right;
    color: rgba(192,192,192,0.7);
}
</style>