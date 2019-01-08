<template>
  <div>
    <h3>设置属性 vertical 可以垂直显示，按钮样式下无效。</h3>
    <RadioGroup vertical v-model="label">
      <Radio label="pe">peach</Radio>
      <Radio label="le">lemon</Radio>
      <Radio label="pea">pear</Radio>
      <Radio label="gr">grape</Radio>
      <Radio label="pl">plum</Radio>
      <Radio label="ne">nectarine</Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: 'RadVert',
  data () {
    return {
      label: 'pea'
    }
  }
}
</script>

<style scoped>

</style>
