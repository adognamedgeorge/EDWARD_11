<template>
  <div>
    <h3>使用 type 属性，可以设置不同的颜色。使用预设的颜色，</h3>
    <h4>可选值为 success、primary、normal、error、warning、info</h4>
    <Badge :count="1" type="success">
      <Icon type="logo-apple" size="30"></Icon>
    </Badge>
    <Badge :count="2" type="primary">
      <Icon type="ios-chatbubbles" size="40"></Icon>
    </Badge>
    <Badge :count="3" type="normal">
      <Icon type="ios-cloud-download" size="50"></Icon>
    </Badge>
    <Badge :count="4" type="error">
      <Icon type="logo-chrome" size="60"></Icon>
    </Badge>
    <Badge :count="5" type="warning">
      <Icon type="md-compass" size="70"></Icon>
    </Badge>
    <Badge :count="6" type="info">
      <Icon type="md-compass" size="80"></Icon>
    </Badge>
  </div>
</template>

<script>
export default {
  name: 'BadgType'
}
</script>

<style scoped>

</style>
