<template>
  <div>
    <h3>注意：非 template/render 模式下，需使用 i-table。</h3>
    <Divider>Table 从 3.2.0 版本开始，支持 slot-scope</Divider>
    <Table :columns="col" :data="dat"></Table>
    <Divider dashed />
    <col-stripe></col-stripe>
    <col-height></col-height>
    <col-fixed></col-fixed>
    <col-hfixed></col-hfixed>
  </div>
</template>

<script>
import ColStripe from './components/Stripe'
import ColHeight from './components/Height'
import ColFixed from './components/Fixed'
import ColHfixed from './components/Hfixed'
export default {
  name: 'Col',
  components: {
    ColStripe,
    ColHeight,
    ColFixed,
    ColHfixed
  },
  data () {
    return {
      col: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Date',
          key: 'date'
        }
      ],
      dat: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
