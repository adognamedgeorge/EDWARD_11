<template>
  <div>
    <h3>组合使用时可以设置属性type为 button 来应用按钮的样式。</h3>
    <RadioGroup type="button" v-model="label1">
      <Radio label="杭">杭州</Radio>
      <Radio label="衢">衢州</Radio>
      <Radio label="上">上海</Radio>
      <Radio label="东">东莞</Radio>
      <Radio label="北">北京</Radio>
    </RadioGroup>
    <Divider dashed />
    <Divider orientation="left">通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。</Divider>
    <RadioGroup v-model="label2" type="button" size="large">
      <Radio label="杭">杭州</Radio>
      <Radio label="衢">衢州</Radio>
      <Radio label="上">上海</Radio>
      <Radio label="东">东莞</Radio>
      <Radio label="北">北京</Radio>
    </RadioGroup>
    <RadioGroup v-model="label2" type="button" size="small">
      <Radio label="杭">杭州</Radio>
      <Radio label="衢">衢州</Radio>
      <Radio label="上">上海</Radio>
      <Radio label="东">东莞</Radio>
      <Radio label="北">北京</Radio>
    </RadioGroup>
    <Divider dashed></Divider>
    <Divider>按钮样式下 vertical 无效。</Divider>
    <RadioGroup v-model="label2" type="button" vertical>
      <Radio label="杭">杭州</Radio>
      <Radio label="衢">衢州</Radio>
      <Radio label="上">上海</Radio>
      <Radio label="东">东莞</Radio>
      <Radio label="北">北京</Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: 'RadBtn',
  data () {
    return {
      label1: '上',
      label2: '衢'
    }
  }
}
</script>

<style scoped>

</style>
