<template>
  <div>
    <h3>注意：没有使用 iview-loader 时，必须使用 i-switch 标签。</h3>
    <i-switch v-model="switch1" @on-change="change"></i-switch>
    <Divider dashed />
    <Divider>设置size为 large 或 small 使用大号和小号的开关。</Divider>
    <i-switch size="small"></i-switch>
    <i-switch size="large"></i-switch>
    <Divider dashed />
    <Divider orientation="left">自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</Divider>
    <i-switch>
      <span slot="open">开</span>
      <span slot="close">关</span>
    </i-switch>
    <i-switch>
      <Icon type="md-checkmark" slot="open"></Icon>
      <Icon type="md-close" slot="close"></Icon>
    </i-switch>
    <i-switch size="large">
      <span slot="open">打开</span>
      <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </i-switch>
    <Divider dashed />
    <Divider orientation="right">禁用开关</Divider>
    <i-switch :disabled="dis"></i-switch>
    <Button type="primary" @click="dis = !dis" size="large">Toggle disabled {{dis}}</Button>
    <Divider dashed />
    <Divider orientation="left">标识开关操作仍在执行中。</Divider>
    <i-switch loading :value="true"></i-switch>
    <i-switch loading :value="false" size="small"></i-switch>
    <i-switch loading :value="false" size="large"></i-switch>
  </div>
</template>

<script>
export default {
  name: 'Swi',
  data () {
    return {
      switch1: false,
      dis: false
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态' + status)
    }
  }
}
</script>

<style scoped>

</style>
