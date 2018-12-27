<template>
  <div>
    <h3>基本的分页，页数过多时会自动折叠。</h3>
    <Page :total="200" />
    <Divider>show-sizer可以切换每页显示的数量。</Divider>
    <Page :total="100" show-sizer />
    <Divider>show-elevator快速跳转到某一页。</Divider>
    <Page :total="300" show-elevator />
    <Divider>show-total显示总共多少条数据，接受 slot 来自定义内容</Divider>
    <!--默认显示共{{ total }}条-->
    <Page :total="400" show-total></Page>
    <Divider>设置size为small使用迷你型，迷你型拥有普通的所有功能。</Divider>
    <Page :total="500" size="small" />
    <Page :total="500" size="small" show-sizer show-elevator show-total />
    <Divider orientation="right">分割线</Divider>
    <h3>
      设置simple属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，
      或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。
    </h3>
    <Page :total="500" :current="6" simple />
    <Divider>使用属性 prev-text 和 next-text，替代图标显示为文字。</Divider>
    <Page :total="600" prev-text="上一页" next-text="下一页" />
  </div>
</template>

<script>
export default {
  name: 'Paging'
}
</script>

<style scoped>

</style>
