<template>
  <div>
    <h3>Alert警告提示:静态地呈现一些警告信息，可手动关闭。</h3>
    <Divider>基本使用方法，有四种样式可以选择info、success、warning、error。</Divider>
    <Alert>An info prompt</Alert>
    <Alert type="success">A success prompt</Alert>
    <Alert type="warning">A warning prompt</Alert>
    <Alert type="error">An error prompt</Alert>
    <Divider dashed/>
    <Divider orientation="left">自定义slot name="desc"描述内容。</Divider>
  </div>
</template>

<script>
export default {
  name: 'Ale'
}
</script>

<style scoped>

</style>
