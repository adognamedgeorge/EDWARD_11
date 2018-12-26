<template>
  <div>
    <Row>
      <i-col span="8">
        <Menu :theme="theme2" active-name="1-2" :open-names="['1']" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
            </template>
            <menu-item name="1-1">文章管理</menu-item>
            <menu-item name="1-2">评论管理</menu-item>
            <menu-item name="1-3">举报管理</menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <menu-item name="2-1">新增用户</menu-item>
            <menu-item name="2-2">活跃用户</menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col span="8">
        <Menu :theme="theme2" active-name="2">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-stats"></Icon>
              aaaa
            </template>
            <menu-item name="1-1">11111</menu-item>
            <menu-item name="1-2">22222</menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-construct"></Icon>
              aaaa
            </template>
            <menu-item name="1-1">11111</menu-item>
            <menu-item name="1-2">22222</menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col span="8">
        <Menu :theme="theme2" active-name="1">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-stats"></Icon>
              aaaa
            </template>
            <menu-item name="1-1">1111</menu-item>
            <menu-item name="1-2">2222</menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-construct"></Icon>
              aaaa
            </template>
            <menu-item name="1-1">333333</menu-item>
            <menu-item name="1-2">444444</menu-item>
          </Submenu>
        </Menu>
      </i-col>
    </Row>
    <br>
    <radio-group v-model="theme2">
      <Radio label="dark"></Radio>
      <Radio label="light"></Radio>
      <Radio label="primary"></Radio>
    </radio-group>
    <br>
    <p>通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题</p>
  </div>
</template>

<script>
export default {
  name: 'MeuSubmeu',
  data () {
    return {
      theme2: 'light'
    }
  }
}
</script>

<style scoped>

</style>
