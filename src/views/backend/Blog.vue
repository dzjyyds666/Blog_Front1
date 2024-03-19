<template>
  <div class="body-sty">
    <!-- 搜索栏 -->
    <div>
        <div>
            
        </div>
    </div>
    <vxe-table :data="blogData" max-height="80%" >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default{
    data(){
        return{
            blogData:[{
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },{
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
            {
                id:1,
                name:"速成java",
                role:"原创",
            },
        ]
        }
    }
}
</script>

<style scoped>
.body-sty {
  width: 80vw;
  height: 84vh;
  background-color: white;
  margin: 5vh 2.5vw;
  border-radius: 20px;
  padding: 4vh 2vw;
}
</style>
