<template>
  <div>
    <Badge :count="6">
      <a href="#" class="demo_badge">X</a>
    </Badge>
    <Divider orientation="left">dot小红点,如需隐藏 dot ，需要设置count为 0</Divider>
    <Badge dot :count="0">
      <a href="#" class="demo_badge"></a>
    </Badge>
    <Divider  type="vertical" />
    <Badge dot>
      <Icon type="ios-notifications-outline" size="30"></Icon>
    </Badge>
    <Divider type="vertical"></Divider>
    <Badge dot>
      <a href="#">可以是一个链接</a>
    </Badge>
    <Divider orientation="right">通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+</Divider>
    <Badge :count="100">
      <a href="#" class="demo_badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
      <a href="#" class="demo_badge"></a>
    </Badge>
    <Divider orientation="left">独立使用及自定义样式 # 可以没有 slot 独立展示。</Divider>
    <Badge :count="9"></Badge>
    <Badge :count="99"></Badge>
    <Divider orientation="right">设置 text 属性，可以自定义显示内容。</Divider>
    <Badge text="hot">
      <a href="#" class="demo_badge"></a>
    </Badge>
    <Divider type="vertical"></Divider>
    <Badge text="fuck">
      <Icon type="ios-notifications-outline" size="50"></Icon>
    </Badge>
    <Badge text="new">
      <a href="#" class="demo_badge"></a>
    </Badge>
    <Divider orientation="left">分割线</Divider>
    <badg-status></badg-status>
    <Divider orientation="right">分割线</Divider>
    <badg-type></badg-type>
  </div>
</template>

<script>
import BadgStatus from './components/Status'
import BadgType from './components/Type'
export default {
  name: 'Badg',
  components: {
    BadgStatus,
    BadgType
  }
}
</script>

<style scoped>
  .demo_badge {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-color: bisque;
    border-radius: 10px;
  }
</style>
