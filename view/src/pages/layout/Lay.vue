<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout_logo"></div>
          <div class="layout_nav">
            <menu-item name="2">
              <Icon type="ios-navigate"></Icon>
              Item-1
            </menu-item>
            <menu-item name="1">
              <Icon type="ios-keypad"></Icon>
              Item-2
            </menu-item>
            <menu-item name="3">
              <Icon type="ios-analytics"></Icon>
              Item-3
            </menu-item>
            <menu-item name="4">
              <Icon type="ios-paper"></Icon>
              Item-4
            </menu-item>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <breadcrumb-item>Home</breadcrumb-item>
          <breadcrumb-item>Components</breadcrumb-item>
          <breadcrumb-item>Layout</breadcrumb-item>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px">Content</div>
        </Card>
      </Content>
      <Footer>2018/12/25&copy;Edward</Footer>
    </Layout>
    <br>
    <lay-sider></lay-sider>
  </div>
</template>

<script>
import LaySider from './components/Sider'
export default {
  name: 'Lay',
  components: {
    LaySider
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    border: 1px solid #d7dde4;
    overflow: hidden;
    border-radius: 4px;
    background-color: #f5f7f9;
    position: relative;
  }
  .layout_logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout_nav {
    width: 420px;
    margin: 0 auto;
  }
</style>
