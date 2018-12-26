<template>
  <div>
    <Menu mode="horizontal" active-name="1" :theme="theme1">
      <menu-item name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
      </menu-item>
      <menu-item name="2">
        <Icon type="ios-people"></Icon>
        用户管理
      </menu-item>
      <!--<menu-item name="3">-->
        <!--<Icon type="ios-stats"></Icon>-->
        <!--统计分析-->
      <!--</menu-item>-->
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats"></Icon>
          统计分析
        </template>
        <menu-group title="使用">
          <menu-item name="3-1">ddddd</menu-item>
          <menu-item name="3-2">dddcc</menu-item>
          <menu-item name="3-3">eeeeee</menu-item>
        </menu-group>
        <menu-group title="留存">
          <menu-item name="3-4">使用用户</menu-item>
          <menu-item name="3-5">流失用户</menu-item>
        </menu-group>
      </Submenu>
      <menu-item name="4">
        <Icon type="ios-construct"></Icon>
        综合设置
      </menu-item>
    </Menu>
    <br>
    <radio-group v-model="theme1">
      <Radio label="light"></Radio>
      <Radio label="primary"></Radio>
      <Radio label="dark"></Radio>
    </radio-group>
    <br><br>
    <meu-submeu></meu-submeu>
  </div>
</template>

<script>
import MeuSubmeu from './components/Submeu'
export default {
  name: 'Meu',
  components: {
    MeuSubmeu
  },
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>

<style scoped>

</style>
