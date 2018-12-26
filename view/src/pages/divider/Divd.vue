<template>
  <div>
    <p>默认为水平分割线</p>
    <Divider/>
    <p>，可在中间加入文字。</p>
    <Divider>the divider</Divider>
    <p>是否虚线</p>
    <Divider dashed/>
    <br>
    <p>使用 type="vertical" 设置为行内的垂直分割线。</p>
    text
    <Divider type="vertical"/>
    <a href="#">novel</a>
    <Divider type="vertical"/>
    <a href="#">book</a>
    <Divider type="vertical"/>
    <br>
    <p>修改分割线标题的位置。</p>
    <Divider orientation="left">left text</Divider>
    <p>修改分割线标题的位置。</p>
    <Divider orientation="right">right text</Divider>
  </div>
</template>

<script>
export default {
  name: 'Divd'
}
</script>

<style scoped>

</style>
