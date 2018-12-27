<template>
  <div>
    <h3>设置 label 为 Render 函数后，可以自定义标签页的内容。</h3>
    <Tabs value="name1">
      <tab-pane :label="label1" name="name1">content of tab1</tab-pane>
      <tab-pane label="标签2" name="name2">content of tab2</tab-pane>
      <tab-pane :label="label3" name="name3">content of tab3</tab-pane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'TabRender',
  data () {
    return {
      label1: (h) => {
        return h('div', [
          h('span', '标签一'),
          h('Badge', {
            props: {
              count: 6
            }
          })
        ])
      },
      label3: (f) => {
        return f('div', [
          f('span', '标签三'),
          f('Badge', {
            props: {
              count: 9
            }
          })
        ])
      }
    }
  }
}
</script>

<style scoped>

</style>
