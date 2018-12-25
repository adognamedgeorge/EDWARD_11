<template>
  <div>
    <h3>四个响应尺寸：xs sm md lg</h3>
    <Row>
      <i-col :xs="2" :sm="4" :md="6" :lg="8">1</i-col>
      <i-col :xs="20" :sm="16" :md="12" :lg="8">2</i-col>
      <i-col :xs="2" :sm="4" :md="6" :lg="8">3</i-col>
    </Row>
    <br>
    <Row>
      <i-col :xs="8" :sm="8" :md="8" :lg="8">a</i-col>
      <i-col :xs="8" :sm="8" :md="8" :lg="8">b</i-col>
      <i-col :xs="8" :sm="8" :md="8" :lg="8">c</i-col>
    </Row>
    <br>
    <Row>
      <i-col :xs="{span:5, offset: 1}" :lg="{span:6, offset: 2}">1111</i-col>
      <i-col :xs="{span:11, offset: 1}" :lg="{span:6, offset: 2}">2222</i-col>
      <i-col :xs="{span:5, offset: 1}" :lg="{span:6, offset: 2}">3333</i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'HomeResponse'
}
</script>

<style lang="scss" scoped>
  .ivu-col:nth-child(2n+1) {
    background-color: #edff5c;
  }
  .ivu-col:nth-child(2n+2) {
    background-color: #ff4b12;
  }
  .ivu-col:nth-child(2n+3) {
    background-color: #4b806d;
  }
</style>
