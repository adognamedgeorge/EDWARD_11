<template>
  <div>
    <p>使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。
      每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p>
    <CheckboxGroup v-model="label">
      <Checkbox label="t">
        <Icon type="logo-twitter"></Icon>
        <span>twitter</span>
      </Checkbox>
      <Checkbox label="g">
        <Icon type="logo-github"></Icon>
        <span>github</span>
      </Checkbox>
      <Checkbox label="f">
        <Icon type="logo-facebook"></Icon>
        <span>facebook</span>
      </Checkbox>
    </CheckboxGroup>
    <h3>通过设置disabled属性来禁用多选框。</h3>
    <CheckboxGroup v-model="label1">
      <Checkbox label="1" disabled>orange</Checkbox>
      <Checkbox label="2">apple</Checkbox>
      <Checkbox label="3">banana</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'CheGro',
  data () {
    return {
      label: ['g', 'f'],
      label1: ['3']
    }
  }
}
</script>

<style scoped>

</style>
