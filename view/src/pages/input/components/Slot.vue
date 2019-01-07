<template>
  <div style="background-color: palegoldenrod">
    <Divider orientation="left">复合型输入框:通过前置和后置的 slot 可以实现复合型的输入框。</Divider>
    <i-input v-model="value1" placeholder="prepend..." style="width: 80%">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
    </i-input>
    <br>
    <i-input v-model="value1" style="width: 80%">
      <Select slot="prepend" v-model="select1" style="width: 100px">
        <Option value="http">http://</Option>
        <Option value="https">https://</Option>
      </Select>
      <Select slot="append" v-model="select2" style="width: 100px">
        <Option value="com">.com</Option>
        <Option value="org">.org</Option>
        <Option value="io">.io</Option>
      </Select>
    </i-input>
    <br>
    <i-input>
      <Select slot="prepend" v-model="select3" style="width: 100px">
        <Option value="1">Month</Option>
        <Option value="2">Day</Option>
      </Select>
      <Button slot="append" icon="ios-search"></Button>
    </i-input>
  </div>
</template>

<script>
export default {
  name: 'InpSlot',
  data () {
    return {
      value1: '',
      select1: 'https',
      select2: 'com',
      select3: '2'
    }
  }
}
</script>

<style scoped>

</style>
