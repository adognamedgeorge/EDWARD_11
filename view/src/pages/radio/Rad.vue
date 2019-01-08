<template>
  <div>
    <h3>Radio基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</h3>
    <Divider>使用 v-model 可以双向绑定数据。</Divider>
    <Radio v-model="single">radio</Radio>
    <h3>{{single}}</h3>
    <Divider dashed />
    <Divider>使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。</Divider>
    <Divider>每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</Divider>
    <RadioGroup v-model="label">
      <Radio label="apple">1</Radio>
      <Radio label="banana">
        <Icon type="logo-apple"></Icon>
        <span>ban</span>
      </Radio>
      <Radio label="pear"></Radio>
    </RadioGroup>
    <Divider dashed />
    <Divider orientation="left">通过设置disabled属性来禁用单选框。</Divider>
    <RadioGroup v-model="label2">
      <Radio label="watermelon" disabled></Radio>
      <Radio label="strawberry"></Radio>
      <Radio label="pomelo"></Radio>
    </RadioGroup>
    <Divider dashed />
    <rad-vert></rad-vert>
    <Divider dashed />
    <rad-btn></rad-btn>
  </div>
</template>

<script>
import RadVert from './components/Vert'
import RadBtn from './components/Btn'
export default {
  name: 'Rad',
  components: {
    RadVert,
    RadBtn
  },
  data () {
    return {
      single: false,
      label: 'banana',
      label2: 'strawberry'
    }
  }
}
</script>

<style scoped>

</style>
