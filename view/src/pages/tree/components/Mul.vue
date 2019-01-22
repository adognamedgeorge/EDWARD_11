<template>
  <div>
    <h3>默认展开、选中、勾选和禁用</h3>
    <Divider orientation="right">给节点设置 expand、selected、checked 和 disabled 可以将节点设置为展开、选中、勾选和禁用。</Divider>
    <Divider orientation="left">设置属性 multiple 可进行多选</Divider>
    <Tree :data="data4" show-checkbox multiple></Tree>
  </div>
</template>

<script>
export default {
  name: 'TreMul',
  data () {
    return {
      data4: [
        {
          title: '水果',
          expand: false,
          disabled: false,
          selected: true,
          children: [
            {
              title: '香蕉',
              children: [
                {title: '大香蕉'},
                {
                  title: '小香蕉',
                  checked: true
                }
              ]
            },
            {
              title: '苹果',
              disabled: true
            }
          ]
        },
        {
          title: '蔬菜',
          checked: true,
          children: [
            {title: '茄子'},
            {title: '苦瓜'},
            {title: '丝瓜'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
