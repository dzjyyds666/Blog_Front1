<template>
  <div style="padding: 250px 0" class="center-sty">
    <div style="height: 96px">
      <a-input-search v-model:value="value" placeholder="请输入要搜索的内容" enter-button @search="onSearch" class="search-input-sty" size="large" :bordered="false" />
    </div>
  </div>

  <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px">
    <div class="div-border-sty" style="width: 80%; margin: 20px auto; background-color: rgba(255, 255, 255, 0.7)">
      <h3 style="padding: 10px">猜你喜欢</h3>
      <div style="width: 90%; margin: auto">
        <a-divider style="height: 2px; margin: 0" />
      </div>
    </div>
    <div style="width: 80%;margin: 20px auto;">
        <div v-for="item in 10" :key="item">
            <div class="div-border-sty transition-sty" style="margin-bottom: 20px; display: flex;background-color: rgba(255, 255, 255, 0.7)">
              <img src="../../assets/img/主页-2.svg" alt="" />
              <div>
                <div style="height: 160px; padding: 15px">
                  <h2 style="height: 34px">
                    title
                    <a-tag :bordered="false" color="success" size="large">
                      <template #icon>
                        <img src="../../assets/img/标签牌.svg" alt="" style="width: 14px" />
                      </template>
                      原创
                    </a-tag>
                  </h2>
                  <p style="text-indent: 2em">
                    一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。
                    一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。

                  </p>
                </div>
                <div>
                  <span>
                    <img src="../../assets/img/时间.svg" alt="" style="width: 30px" />
                    <span style="margin-left: 5px; color: #708090">2024-1-16</span>
                  </span>

                  <span style="float: right; padding: 5px 15px">
                    <span v-for="item in 2">
                      <a-tag :bordered="false" color="magenta">
                        <template #icon>
                          <img src="../../assets/img/文件夹.svg" alt="" style="width: 14px" />
                        </template>
                        magenta
                      </a-tag>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
    </div>

    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
  },
};
</script>

<style scoped>
.center-sty {
  text-align: center;
  justify-content: center;
}
.search-input-sty {
  width: 700px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}
.div-border-sty {
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 1px #999;
}

.transition-sty{
  transition: transform 0.3s ease-in-out;
}

.transition-sty:hover{
  transform:scale(1.01);
}

p {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	overflow: hidden;
}
</style>
