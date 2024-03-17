<template>
  <div>
    <div style="margin: 250px 0">
      <h1 style="color: white; text-align: center">
        <!-- //TODO:添加分类图标 -->
        分类
        <br />
        <span style="font-size: small"> 在生活的分类中，我们找到了自己的位置，也理解了别人的不易。 </span>
      </h1>
    </div>

    <div style="background-color: rgba(255,255,255,0.7);padding: 20px;">
      <div class="div-border-sty">
        <img src="../../assets/img/文件夹 (1).svg" alt="" style="width: 40px;">
        <a-divider style="margin: 10px;"/>
        <a-button type="text" >
          <!-- //TODO:分类图标 -->
          <img src="../../assets/img/文件夹 (1).svg" alt="" style="width: 15px;">
          java
        </a-button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 20px auto;
  width: 80%;
  padding: 10px;
}
</style>
