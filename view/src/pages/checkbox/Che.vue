<template>
  <div>
    <h3>基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</h3>
    <h4>使用 v-model 可以双向绑定数据。</h4>
    <Checkbox v-model="single"></Checkbox>
    <p>{{single}}</p>
    <Divider dashed />
    <che-gro></che-gro>
    <Divider dashed />
    <che-connect></che-connect>
    <Divider dashed />
    <che-all></che-all>
  </div>
</template>

<script>
import CheGro from './components/Gro'
import CheConnect from './components/Connect'
import CheAll from './components/All'
export default {
  name: 'Che',
  components: {
    CheGro,
    CheConnect,
    CheAll
  },
  data () {
    return {
      single: false
    }
  }
}
</script>

<style scoped>

</style>
