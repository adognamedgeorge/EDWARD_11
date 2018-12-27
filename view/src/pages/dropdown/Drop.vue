<template>
  <div>
    <h3>
      需要配合 DropdownMenu 和 DropdownItem 两个组件来使用，
      并且给列表设置具名 slot 为 list。
      触发对象可以是链接、按钮等各种元素。
    </h3>
    <Dropdown>
      <a href="#">
        下拉菜单
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>绿豆糕</DropdownItem>
        <DropdownItem disabled>驴打滚</DropdownItem>
        <dropdown-item divided>狗打滚</dropdown-item>
      </DropdownMenu>
    </Dropdown>
    <Dropdown>
      <Button type="primary">
        dropdown
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem>aaa</DropdownItem>
        <DropdownItem disabled>bbb</DropdownItem>
        <DropdownItem>cccc</DropdownItem>
        <DropdownItem divided>dddd</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Divider orientation="right">分割线</Divider>
    <drop-hover></drop-hover>
    <Divider orientation="left">分割线</Divider>
    <drop-placement></drop-placement>
  </div>
</template>

<script>
import DropHover from './components/Hover'
import DropPlacement from './components/Placement'
export default {
  name: 'Drop',
  components: {
    DropHover,
    DropPlacement
  }
}
</script>

<style scoped>

</style>
