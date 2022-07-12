<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="首页菜谱mock数据创建" name="directly">
        shopId：<el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        菜谱信息：<el-input v-model="cookbookId" placeholder="Please input" style="width:400px;max-width:100%;" />
        <el-button type="primary" icon="el-icon-document" @click="handleCopy(inputData,$event)">
          创建
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive

export default {
  name: 'ClipboardDemo',
  directives: {
    clipboard
  },
  data() {
    return {
      activeName: 'directly',
      inputData: '',
      cookbookId: ''
    }
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event)
    },
    clipboardSuccess() {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

