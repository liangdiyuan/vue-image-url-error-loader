<template>
  <div>
    <h1>页面上基础结构</h1>
    <div>
      <img :class="1" />
    </div>
    <img :class="{2:true}" :src="imgUrl" />
    <div id="root"></div>
    <img class="3" src v-on:error="this.src ='1.png'" />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      imgUrl: "2.png"
    };
  }
};
</script>
<style scoped>
</style>