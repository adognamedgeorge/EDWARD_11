<template>
  <div style="padding: 15px;background: #cdf93f">
    <Card title="选项" :padding="0" shadow icon="ios-options" style="width: 100%;">
      <cell-group>
        <Cell title="只显示标题"></Cell>
        <Cell title="title为左侧标题" label="label为标题下方的描述信息"></Cell>
        <Cell title="显示右侧内容" extra="extra为右侧额外内容"></Cell>
        <Cell title="to跳转的链接，支持 vue-router 对象" extra="详细信息" to="../../card"></Cell>
        <Cell title="新窗口打开链接" to="collapse" target="_blank"></Cell>
        <Cell title="disabled禁用该项" disabled></Cell>
        <Cell title="标记该项为选中状态" selected></Cell>
        <Cell title="显示徽标">
          <Badge slot="extra" :count="9"></Badge>
        </Cell>
        <Cell title="开关">
          <Switch slot="extra" v-model="switchValue"></Switch>
        </Cell>
      </cell-group>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'CelCe',
  data () {
    return {
      switchValue: false
    }
  }
}
</script>

<style scoped>

</style>
