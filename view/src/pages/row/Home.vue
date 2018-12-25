<template>
  <div>
    <h3>span=24</h3>
    <Row>
      <i-col span="12">col-12</i-col>
      <i-col span="12">i-col-12</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="8">1</i-col>
      <i-col span="8">2</i-col>
      <i-col span="8">3</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="6">col-6</i-col>
      <i-col span="6">col-6</i-col>
      <i-col span="6">col-6</i-col>
      <i-col span="6">col-6</i-col>
    </Row>
    <br>
    <h3>:gutter=(16+8n)px</h3>
    <Row :gutter="24" class="gutter">
      <i-col span="6"><div>col-6</div></i-col>
      <i-col span="6"><div>col-6</div></i-col>
      <i-col span="6"><div>col-6</div></i-col>
      <i-col span="6"><div>col-6</div></i-col>
    </Row>
    <br>
    <h3>type: flex;通过 Flex 布局的order来改变栅格的顺序。</h3>
    <Row type="flex">
      <i-col span="6" order="4">1 | order-4</i-col>
      <i-col span="6" order="2">2 | order-3</i-col>
      <i-col span="6" order="3">3 | order-2</i-col>
      <i-col span="6" order="1">4 | order-1</i-col>
    </Row>
    <br>
    <h3>通过设置push和pull来改变栅格的顺序。</h3>
    <Row>
      <i-col span="15" push="9">col-18 | push-6</i-col>
      <i-col span="9" pull="15">col-6 | push-18</i-col>
    </Row>
    <br>
    <h3>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</h3>
    <Row>
      <i-col span="8">col-8</i-col>
      <i-col span="8" offset="8">col-8 | offset-8</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="6" offset="5">col-6 | offset-5</i-col>
      <i-col span="6" offset="7">col-6 | offset-7</i-col>
    </Row>
    <br>
    <Row>
      <i-col span="12" offset="8">col-12 | offset-8</i-col>
    </Row>
    <br>
    <h3>通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。</h3>
    <Row type="flex" justify="start">
      <i-col span="4">1 | span-4</i-col>
      <i-col span="4">2 | span-4</i-col>
      <i-col span="4">3 | span-4</i-col>
      <i-col span="4">4 | span-4</i-col>
    </Row>
    <br>
    <Row type="flex" justify="end">
      <i-col span="4">a | span-4</i-col>
      <i-col span="4">b | span-4</i-col>
      <i-col span="4">c | span-4</i-col>
      <i-col span="4">d | span-4</i-col>
    </Row>
    <br>
    <Row type="flex" justify="center">
      <i-col span="4">I | span-4</i-col>
      <i-col span="4">III| span-4</i-col>
      <i-col span="4">III | span-4</i-col>
      <i-col span="4">IV | span-4</i-col>
    </Row>
    <br>
    <Row type="flex" justify="space-between">
      <i-col span="4">A | span-4</i-col>
      <i-col span="4">B | span-4</i-col>
      <i-col span="4">C | span-4</i-col>
      <i-col span="4">D | span-4</i-col>
    </Row>
    <br>
    <Row type="flex" justify="space-around">
      <i-col span="4">01 | span-4</i-col>
      <i-col span="4">02 | span-4</i-col>
      <i-col span="4">03 | span-4</i-col>
      <i-col span="4">04 | span-4</i-col>
    </Row>
    <br>
    <h3>通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效</h3>
    <Row type="flex" justify="center" align="top">
      <i-col span="4"><p>a</p></i-col>
      <i-col span="4"><p>b</p></i-col>
      <i-col span="4"><p>c</p></i-col>
      <i-col span="4"><p>d</p></i-col>
    </Row>
    <br>
    <Row type="flex" justify="center" align="bottom">
      <i-col span="4"><p>1</p></i-col>
      <i-col span="4"><p>2</p></i-col>
      <i-col span="4"><p>3</p></i-col>
      <i-col span="4"><p>4</p></i-col>
    </Row>
    <br>
    <Row type="flex" justify="center" align="middle">
      <i-col span="4"><p>I</p></i-col>
      <i-col span="4"><p>II</p></i-col>
      <i-col span="4"><p>III</p></i-col>
      <i-col span="4"><p>IV</p></i-col>
    </Row>
    <br>
    <home-response></home-response>
  </div>
</template>

<script>
import HomeResponse from './components/Response'
export default {
  name: 'Home',
  components: {
    HomeResponse
  }
}
</script>

<style lang="scss" scoped>
  .ivu-col:nth-child(2n+1) {
    background-color: #5860ff;
  }
  .ivu-col:nth-child(2n+2) {
    background-color: #ff8272;
  }
  .gutter {
    .ivu-col {
      background-color: unset;
      div {
        background-color: orange;
      }
    }
  }
  .ivu-col:nth-child(1) > p { height: 80px; line-height: 80px;}
  .ivu-col:nth-child(2) > p { height: 30px; }
  .ivu-col:nth-child(3)>p { height: 100px; }
  .ivu-col:nth-child(4)>p { height: 60px; }
</style>
