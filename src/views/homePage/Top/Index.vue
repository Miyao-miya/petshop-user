<template>
    <div class="top">
        <LIndex class="top_float"/>
        <SIndex class="top_float serch_maergin"/>
        <RIndex class="top_float"/>
    </div>
</template>

<script>
    import LIndex from "./left/Index";
    import RIndex from "./right/Index";
    import SIndex from "./search/Index";
    export default {
        name: "Index",
        components:{
            LIndex,
            RIndex,
            SIndex
        }
    }
</script>

<style scoped>
    .top {
        width: 62.5%;
        height: 90px;
        margin-left: 18.75%;
        margin-top: 2%;
        /*margin-top: 10px;*/
        /*background-color: #13B4E9;*/
    }
    .top_float{
        float: left;
    }
    .serch_maergin{
        margin-left:2.5%;
        margin-right: 2.5%;
    }
</style>