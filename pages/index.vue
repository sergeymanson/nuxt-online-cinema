<template>
  <main>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    </main>
</template>

<script>
export default {
  name: 'index-page',
  layout: 'default',
  components: { },
  data () {
    return {
      visible: false
    }
  }

}
</script>
