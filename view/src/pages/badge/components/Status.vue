<template>
  <div>
    <h3>status设置 Badge 为状态点，可选值为 success、processing、default、error、warning</h3>
    <Badge status="success">
      <Icon type="logo-apple" size="30"></Icon>
    </Badge>
    <Badge status="processing">
      <Icon type="ios-chatbubbles" size="40"></Icon>
    </Badge>
    <Badge status="default">
      <Icon type="ios-cloud-download" size="50"></Icon>
    </Badge>
    <Badge status="error">
      <Icon type="logo-chrome" size="60"></Icon>
    </Badge>
    <Badge status="warning">
      <Icon type="md-compass" size="70"></Icon>
    </Badge>
  </div>
</template>

<script>
export default {
  name: 'BadgStatus'
}
</script>

<style scoped>

</style>
