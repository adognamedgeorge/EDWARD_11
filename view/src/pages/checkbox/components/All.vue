<template>
  <div>
    <h2>在实现全选效果时，你可能会用到 indeterminate 属性</h2>
    <h3>设置 indeterminate 状态，只负责样式控制</h3>
    <h4>on-change只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</h4>
    <Divider dashed />
    <div>
      <Checkbox
        :value="checkAll"
        :indeterminate="indeterminate"
        @click.prevent.native="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="label" @on-change="checkAllChange">
      <Checkbox label="a">apple</Checkbox>
      <Checkbox label="o">orange</Checkbox>
      <Checkbox label="p">peach</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'CheAll',
  data () {
    return {
      checkAll: false,
      indeterminate: true,
      label: ['a', 'o']
    }
  },
  methods: {
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.label = ['a', 'o', 'p']
      } else {
        this.label = []
      }
    },
    checkAllChange (data) {
      console.log(data)
      if (data.length === 3) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
    }
  }
}
</script>

<style scoped>

</style>
