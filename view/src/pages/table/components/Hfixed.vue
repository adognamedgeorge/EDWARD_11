<template>
  <div>
    <h3>同时应用上述两个属性(height && fixed)，可以同时固定表头和列。</h3>
    <Table height="200" width="200" border :columns="columns3" :data="data3" highlight-row ref="currentRow"></Table>
    <Button @click="handleClear" type="primary" size="large">Clear</Button>
    <Divider orientation="left">通过设置属性 highlight-row，可以选中某一行。</Divider>
    <Divider orientation="right">调用 clearCurrentRow 方法可以手动清除选中项。</Divider>
  </div>
</template>

<script>
export default {
  name: 'ColHfixed',
  data () {
    return {
      columns3: [
        {
          title: 'Name',
          key: 'name',
          width: 100,
          fixed: 'left'
        },
        {
          title: 'Age',
          key: 'age',
          width: 100
        },
        {
          title: 'Address',
          key: 'address',
          width: 100,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'Btn1'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'Btn2')
            ])
          }
        }
      ],
      data3: [
        {
          name: '11',
          age: '111',
          address: '1111'
        },
        {
          name: '22',
          age: '222',
          address: '2222'
        },
        {
          name: '33',
          age: '333',
          address: '3333'
        },
        {
          name: '44',
          age: '444',
          address: '4444'
        }
      ]
    }
  },
  methods: {
    handleClear () {
      this.$refs.currentRow.clearCurrentRow()
    }
  }
}
</script>

<style scoped>

</style>
