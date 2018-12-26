<template>
  <div>
    <h4>
      value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。
      可以使用 v-model 双向绑定数据。
    </h4>
    <Tabs value="tab1">
      <tab-pane name="tab1" label="标签1">content of tab1</tab-pane>
      <tab-pane name="tab2" label="标签2">content of tab2</tab-pane>
      <tab-pane name="tab3" label="标签3">content of tab3</tab-pane>
    </Tabs>
    <Divider orientation="right">分割线</Divider>
    <h3>禁用某一项-disabled</h3>
    <Tabs value="tab2">
      <tab-pane name="tab1" label="aaa">aaa</tab-pane>
      <tab-pane name="tab2" label="bbb">bbb</tab-pane>
      <tab-pane name="tab3" label="ccc" disabled>ccc</tab-pane>
    </Tabs>
    <Divider orientation="left">分割线</Divider>
    <h3>通过设置属性 icon，可以显示一个图标。</h3>
    <Tabs>
      <tab-pane icon="logo-apple" label="macOS">macOS</tab-pane>
      <tab-pane icon="logo-windows" label="Windows">Windows</tab-pane>
      <tab-pane icon="logo-tux" label="Linux">Linux</tab-pane>
    </Tabs>
    <Divider orientation="right">分割线</Divider>
    <h3>设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。</h3>
    <Tabs size="small">
      <tab-pane label="标签1">aaa</tab-pane>
      <tab-pane label="标签2">bbb</tab-pane>
      <tab-pane label="标签3">ccc</tab-pane>
    </Tabs>
    <Divider orientation="left">分割线</Divider>
    <h3>设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。</h3>
    <Tabs type="card">
      <tab-pane label="标签1">ddd</tab-pane>
      <tab-pane label="标签2">eeee</tab-pane>
      <tab-pane label="标签3">fff</tab-pane>
    </Tabs>
    <Divider orientation="right">分割线</Divider>
    <h3>
      通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。
      需结合 @on-tab-remove 事件手动关闭标签页。
    </h3>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
      <tab-pane label="标签1" v-if="tab0">ddd</tab-pane>
      <tab-pane label="标签2" v-if="tab1">eeee</tab-pane>
      <tab-pane label="标签3" v-if="tab2">fff</tab-pane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      tab0: true,
      tab1: true,
      tab2: true
    }
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    }
  }
}
</script>

<style scoped>

</style>
