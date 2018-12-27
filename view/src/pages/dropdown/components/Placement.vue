<template>
  <div>
    <h3>
      通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向
      可选值为top|top-start|top-end|bottom|bottom-start|bottom-end|left|left-start|left-end|right|right-start|right-end,
      下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。
    </h3>
    <Dropdown trigger="contextMenu" placement="top-start">
      <a href="#">
        右键触发
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>111</DropdownItem>
        <DropdownItem>222</DropdownItem>
        <Dropdown placement="right-start">
          <DropdownItem>
            333
            <Icon type="ios-arrow-forward"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem>333-1</DropdownItem>
            <DropdownItem>333-2</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <DropdownItem>444</DropdownItem>
        <DropdownItem>555</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropPlacement'
}
</script>

<style scoped>

</style>
