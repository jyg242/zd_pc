<template>
    <div class="load">
        <div class="content">
            <img src="http://119.3.17.107/seeyon/fileUpload.do?method=showRTE&type=image&fileId=-7585268485041271763" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.load{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:rgb(39, 39, 39);
    
				opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 300px;
        height: 300px;
        // border-radius: 50%;
        border: 1px solid #ad8757;
        display: flex;
    justify-content: center;
    align-items: center;

    }
    
}
</style>