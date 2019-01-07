<template>
  <div style="background-color: red">
    <Divider>设置属性 autosize，文本域会自动适应高度的变化。</Divider>
    <Input v-model="value8" placeholder="autosize..." type="textarea" :autosize="true" style="width: auto; margin-bottom: 10px;"/>
    <Divider orientation="left">autosize也可以设定为一个对象，指定最小行数minRows和最大行数maxRows。</Divider>
    <Input v-model="value8" placeholder="minRows&&maxRows" type="textarea" :autosize="{minRows: 2, maxRows: 6}"
           style="width: auto; margin-bottom: 50px"/>
    <Divider orientation="right">通过添加disabled属性可设置为不可用状态。</Divider>
    <Input v-model="value9" placeholder="disabled..." style="width: auto" disabled />
  </div>
</template>

<script>
export default {
  name: 'InpAutosize',
  data () {
    return {
      value8: '',
      value9: ''
    }
  }
}
</script>

<style scoped>

</style>
