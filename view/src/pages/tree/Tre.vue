<template>
  <div>
    <h3>使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</h3>
    <Tree :data="data1"></Tree>
    <Divider orientation="left">设置属性 show-checkbox 可以对节点进行勾选。</Divider>
    <Tree :data="data2" show-checkbox></Tree>
    <Divider dashed></Divider>
    <TreLoad></TreLoad>
    <Divider dashed />
    <tre-mul></tre-mul>
  </div>
</template>

<script>
import TreLoad from './components/Load'
import TreMul from './components/Mul'
export default {
  name: 'Tre',
  components: {
    TreLoad,
    TreMul
  },
  data () {
    return {
      data1: [
        {
          title: 'parent-1',
          expand: true,
          children: [
            {
              title: 'leaf-1',
              expand: true,
              children: [
                {
                  title: 'leaf-1-1'
                }
              ]
            },
            {
              title: 'leaf-2',
              expand: false,
              children: [
                {
                  title: 'leaf-2-1'
                }
              ]
            }
          ]
        },
        {
          title: 'parent-2',
          expand: true,
          children: [
            {
              title: 'leaf-1',
              expand: true,
              children: [
                {
                  title: 'leaf-1-1'
                }
              ]
            },
            {
              title: 'leaf-2',
              expand: false,
              children: [
                {
                  title: 'leaf-2-2'
                }
              ]
            }
          ]
        }
      ],
      data2: [
        {
          title: '水果',
          expand: true,
          children: [
            {
              title: '苹果',
              expand: false,
              children: [
                {
                  title: '红苹果'
                },
                {title: '黄苹果'}
              ]
            },
            {
              title: '西瓜',
              expand: true,
              children: [
                {title: '金麒麟'},
                {title: '特小凤'},
                {title: '黑美人'}
              ]
            }
          ]
        },
        {
          title: '蔬菜',
          expand: false,
          children: [
            {
              title: '白菜',
              expand: false,
              children: [
                {title: '大白菜'},
                {title: '小白菜'}
              ]
            },
            {
              title: '黄瓜'
            },
            {title: '萝卜'},
            {title: '冬瓜'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
