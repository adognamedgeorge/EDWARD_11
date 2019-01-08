<template>
  <div>
    <h3>与其它组件进行数据联动。</h3>
    <Checkbox v-model="checked" :disabled="disabled">
      <span v-if="checked">checked</span>
      <span v-else>unchecked</span>
      -
      <span v-if="!disabled">usable</span>
      <span v-else>disabled</span>
    </Checkbox>
    <br>
    <Button type="primary" @click="checked = !checked">
      <span v-if="!checked">Checked</span>
      <span v-else>Unchecked</span>
    </Button>
    <Button type="primary" @click="disabled = !disabled">
      <span v-if="disabled">Usable</span>
      <span v-else>Disabled</span>
    </Button>
  </div>
</template>

<script>
export default {
  name: 'CheConnect',
  data () {
    return {
      checked: true,
      disabled: false
    }
  }
}
</script>

<style scoped>

</style>
