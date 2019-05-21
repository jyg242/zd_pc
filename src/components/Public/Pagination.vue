<template>
  <a-pagination v-model="current" :total="this.$store.state.pageAll" :pageSize="pageSize"/>
</template>
<script>
  export default {
    data() {
      return {
        current: 1,
        pageSize:5
        // total:this.$store.state.pageAll
      }
    },
    watch:{
        current:{
            handler(item){
                this.$store.commit('setPageSize',item)
            }
        }
    }
  }
</script>
