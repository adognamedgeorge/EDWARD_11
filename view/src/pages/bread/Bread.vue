<template>
  <div>
    <h3>显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。</h3>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/card">Card</BreadcrumbItem>
      <BreadcrumbItem>Bread</BreadcrumbItem>
    </Breadcrumb>
    <Divider>可自定义每项的内容，比如带有一个图标。</Divider>
    <Breadcrumb>
      <BreadcrumbItem to="/">
        <Icon type="ios-home-outline"></Icon>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem to="cell">
        <Icon type="logo-buffer"></Icon>
        Cell
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon type="ios-cafe"></Icon>
        Bread
      </BreadcrumbItem>
    </Breadcrumb>
    <Divider>通过设置separator属性来自定义分隔符，比如 > ，也可以接受自定义的HTML字符串。</Divider>
    <Breadcrumb separator=">>>">
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="menu">Menu</BreadcrumbItem>
      <BreadcrumbItem>Bread</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Bread'
}
</script>

<style scoped>

</style>
