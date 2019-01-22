<template>
  <div>
    <h3>通过给数据 columns 的项设置 fixed 为 left 或 right，可以左右固定需要的列。当横向内容过多时可以使用</h3>
    <Table :columns="columns2" :data="data2" border width="550"></Table>
  </div>
</template>

<script>
export default {
  name: 'ColFixed',
  data () {
    return {
      columns2: [
        {
          title: 'Name',
          key: 'name',
          fixed: 'left',
          width: 100
        },
        {
          title: 'Age',
          key: 'age',
          width: 100
        },
        {
          title: 'Address',
          key: 'address',
          width: 100
        },
        {
          title: 'Tel',
          key: 'tel',
          width: 100
        },
        {
          title: 'Date',
          key: 'date',
          width: 100
        },
        {
          title: 'A',
          key: 'a',
          width: 100
        },
        {
          title: 'B',
          key: 'b',
          width: 100
        },
        {
          title: 'C',
          key: 'c',
          width: 100,
          fixed: 'right'
        }
      ],
      data2: [
        {
          name: '1',
          age: '11',
          address: '111',
          tel: '1111',
          date: '11111',
          a: '111111',
          b: '1111111',
          c: '11111111'
        },
        {
          name: '2',
          age: '22',
          address: '222',
          tel: '2222',
          date: '22222',
          a: '222222',
          b: '2222222',
          c: '22222222'
        },
        {
          name: '3',
          age: '33',
          address: '333',
          tel: '3333',
          date: '33333',
          a: '333333',
          b: '3333333',
          c: '33333333'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
