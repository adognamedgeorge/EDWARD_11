<template>
  <div>
    <h3>设置 slot extra 可以在页签右边添加附加操作。</h3>
    <Tabs type="card">
      <tab-pane v-for="tab in tabs" :key="tab" :label="'标签'+ tab">标签{{tab}}</tab-pane>
      <Button slot="extra" @click="addTab" size="small">增加</Button>
    </Tabs>
    <Divider orientation="left">分割线</Divider>
    <h3>通过设置属性 animated 为 false 可以禁用动画。</h3>
    <Tabs :animated="false">
      <tab-pane label="标签a">content of label_a</tab-pane>
      <tab-pane label="标签b">content of label_b</tab-pane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'TabSlot',
  data () {
    return {
      tabs: 2
    }
  },
  methods: {
    addTab () {
      this.tabs++
    }
  }
}
</script>

<style scoped>

</style>
