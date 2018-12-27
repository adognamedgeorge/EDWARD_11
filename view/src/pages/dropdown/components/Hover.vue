<template>
  <div>
    <h3>
      通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义),右键。
      触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。
    </h3>
    <br>
    <Dropdown trigger="click">
      <a href="#">
        click下拉
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>111</DropdownItem>
        <DropdownItem>222</DropdownItem>
        <DropdownItem>333</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="custom" :visible="visible">
      <a href="#" @click="handleOpen">
        custom触发
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>aaa</DropdownItem>
        <DropdownItem>bbb</DropdownItem>
        <DropdownItem>
          ccc
          <Button type="primary" @click="handleClose" size="small">Close</Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="contextMenu">
      <a href="#">
        右键触发
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>111</DropdownItem>
        <DropdownItem>222</DropdownItem>
        <DropdownItem>333</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropHover',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleOpen () {
      this.visible = true
    },
    handleClose () {
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>
