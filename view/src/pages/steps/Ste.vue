<template>
  <div>
    <h3>组件会根据current自动判断各步骤状态。current当前步骤，从 0 开始计数</h3>
    <Steps :current="2">
      <Step title="待付款" content="待付款待付款待付款待付款"></Step>
      <Step title="审核中" content="审核中审核中审核中审核中"></Step>
      <Step title="已完成" content="已完成已完成已完成已完成"></Step>
      <Step title="待发货" content="待发货待发货待发货待发货"></Step>
    </Steps>
    <Divider orientation="left">设置属性size为small启用迷你版。</Divider>
    <Steps :current="1" size="small">
      <Step title="待付款" content="待付款待付款待付款待付款"></Step>
      <Step title="审核中" content="审核中审核中审核中审核中"></Step>
      <Step title="已完成" content="已完成已完成已完成已完成"></Step>
      <Step title="待发货" content="待发货待发货待发货待发货"></Step>
    </Steps>
    <Divider orientation="right">通过设置Step的icon属性可以自定义图标。</Divider>
    <Steps :current="1">
      <Step title="注册" icon="ios-person"></Step>
      <Step title="上传头像" icon="ios-camera"></Step>
      <Step title="验证邮箱" icon="ios-mail"></Step>
    </Steps>
    <Divider orientation="left">点击下一步按钮可以切换当前进度状态。</Divider>
    <p>当前进行到第{{current + 1}}步</p>
    <Steps :current="current">
      <Step title="第一步"></Step>
      <Step title="第二步"></Step>
      <Step title="第三步"></Step>
      <Step title="第四步"></Step>
    </Steps>
    <Button type="primary" @click="handleNext" size="small">下一步</Button>
    <Divider orientation="right">设置属性direction为vertical在垂直方向展示。</Divider>
    <Steps :current="2" direction="vertical">
      <Step title="待付款" content="待付款待付款待付款待付款"></Step>
      <Step title="审核中" content="审核中审核中审核中审核中"></Step>
      <Step title="已完成" content="已完成已完成已完成已完成"></Step>
      <Step title="待发货" content="待发货待发货待发货待发货"></Step>
    </Steps>
    <Divider orientation="left">设置Steps的属性status为error指定当前步骤状态。</Divider>
    <Steps :current="3" status="error">
      <Step title="待付款" content="待付款待付款待付款待付款"></Step>
      <Step title="审核中" content="审核中审核中审核中审核中"></Step>
      <Step title="已完成" content="已完成已完成已完成已完成"></Step>
      <Step title="待发货" content="你的货物被狗吃掉了"></Step>
    </Steps>
  </div>
</template>

<script>
export default {
  name: 'Ste',
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleNext () {
      this.current++
      if (this.current === 4) {
        this.current = 0
      }
    }
  }
}
</script>

<style scoped>

</style>
