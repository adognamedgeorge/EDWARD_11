<template>
  <div>
    <h3>使用 load-data 属性可以异步加载子节点，需要给数据增加 loading 来标识当前是否在加载中。</h3>
    <Divider orientation="left">load-data 第一个参数为当前节点信息；</Divider>
    <Divider orientation="right">执行 load-data 的第二个参数，将需要添加的数据传入。</Divider>
    <Divider orientation="left">如果某节点不包含 loading 和 children 字段，则不会应用异步加载效果。</Divider>
    <Tree :data="data3" show-checkbox :load-data="loadData"></Tree>
  </div>
</template>

<script>
export default {
  name: 'TreLoad',
  data () {
    return {
      data3: [
        {
          title: 'parent',
          loading: false,
          children: []
        }
      ]
    }
  },
  methods: {
    loadData (it, callBack) {
      setTimeout(() => {
        const data = [
          {
            title: 'children',
            loading: false,
            children: []
          },
          {
            title: 'child',
            loading: true,
            children: []
          }
        ]
        callBack(data)
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
