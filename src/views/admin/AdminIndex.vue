<template>
  <div style="padding: 30px; display: flex; flex-wrap: wrap">
    <div style="display: flex; flex-wrap: wrap">
      <div style="width: 100%; height: 215px"></div>
      <div class="notice-sty" style="background-color: green">
        <img src="../../assets/img/白色_公告配置.svg" alt="" style="width: 40px" />
        <span> 编辑公告 </span>
      </div>
      <div class="notice-sty" style="background-color: blueviolet">
        <img src="../../assets/img/留言－白色.svg" alt="" style="width: 40px" />
        <span> 编辑留言板 </span>
      </div>
    </div>

    <div style="background-color: white; width: 60%; margin: 20px; border-radius: 10px; padding: 10px;box-shadow:  0 0 2px 1px #c7c7c7;">
      <div style="border-bottom: solid 1px #bab7b7; font-size: x-large; font-family: 'maokenwangxingyuan'; padding-bottom: 10px">
        <img src="../../assets/img/备忘录(1).svg" alt="" style="width: 40px; vertical-align: middle" />
        备忘录
        <span style="float: right">
          <a-button type="primary" style="background-color: orange">添加备忘录</a-button>
        </span>
      </div>
      <div style="display: flex; flex-wrap: wrap; height: 212px; overflow: scroll">
        <div v-for="item in message" style="width: 50%; padding: 10px">
          <span v-if="item.states == true">
            <img src="../../assets/img/绿圆点.svg" alt="" style="width: 13px" />
          </span>
          <span v-if="item.states == false">
            <img src="../../assets/img/红圆.svg" alt="" style="width: 13px" />
          </span>
          {{ item.content }}
          <span style="float: right">
            <a-button type="primary" size="small" style="background-color: rgb(147, 240, 6)">
              <template #icon>
                <img src="../../assets/img/对号（白色）.svg" alt="" style="width: 20px" />
              </template>
            </a-button>
            <a-button type="primary" size="small" style="background-color: rgb(209, 0, 0); margin-left: 10px">
              <template #icon>
                <img src="../../assets/img/弹窗叉号白色.svg" alt="" style="width: 20px" />
              </template>
            </a-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [
        {
          content: "111",
          states: true,
        },
        {
          content: "111",
          states: false,
        },
        {
          content: "我要成为java高手",
          states: true,
        },
        {
          content: "111",
          states: true,
        },
        {
          content: "111",
          states: false,
        },
        {
          content: "111",
          states: true,
        },
        {
          content: "111",
          states: false,
        },
        {
          content: "111",
          states: true,
        },
        {
          content: "111",
          states: true,
        },
        {
          content: "111",
          states: true,
        },
        {
          content: "111",
          states: true,
        },
      ],
      states: false,
    };
  },
};
</script>

<style scoped>
.notice-sty {
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;
  margin: 20px;
}
.notice-sty span {
  color: white;
  font-size: large;
  margin-left: 5px;
  vertical-align: middle;
}
</style>
