<template>
  <div>
    <Divider orientation="left">基本用法，可以使用 v-model 实现数据的双向绑定。</Divider>
    <Divider orientation="right">可以直接设置 style 来改变输入框的宽度，默认 100%。</Divider>
    <Input v-model="value" placeholder="Enter something ..." style="width: 80%;" />
    <Divider orientation="left">输入框有三种尺寸：大、默认（中）、小</Divider>
    <Divider orientation="right">通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。</Divider>
    <Input v-model="value1" size="large" placeholder="Large size..." style="width: 80%;"/>
    <Input v-model="value2" size="small" placeholder="Small size..." style="width: 80%;" />
    <Divider orientation="left">开启属性 clearable 可显示清空按钮。</Divider>
    <Input v-model="value3" placeholder="Clearable..." clearable style="width: 60%;" />
    <Divider orientation="right">通过 icon 属性可以在输入框右边加一个图标。</Divider>
    <Divider orientation="left">点击图标，会触发 on-click 事件。</Divider>
    <Input v-model="value4" placeholder="Enter icon..." icon="ios-clock-outline" style="width: 200px;" />
    <Divider dashed />
    <Divider orientation="right">除了设置 icon，也可以通过设置 prefix 和 suffix 及同名 slot 设置前缀及后缀图标。</Divider>
    <div style="background-color: orange">
      Props属性方式:
      <Input v-model="value5" prefix="ios-contact" placeholder="prefix..." style="width: auto" />
      <Input v-model="value5" suffix="ios-search" placeholder="suffix..." style="width: auto"/>
    </div>
    <div style="background-color: pink; margin-top: 6px;">
      Slot方式:
      <i-input v-model="value5" placeholder="slot prefix..." style="width: auto">
        <Icon slot="prefix" type="ios-contact" />
      </i-input>
      <i-input v-model="value6" placeholder="slot suffix..." style="width: auto">
        <Icon slot="suffix" type="ios-search"></Icon>
      </i-input>
    </div>
    <Divider dashed></Divider>
    <Divider>开启 search 属性，可以设置为搜索型输入框。</Divider>
    <div style="background-color: blue;">
      <Input search placeholder="search..." style="width: auto" v-model="value6" size="large" />
      <Input search enter-button placeholder="enter-button..." style="width: 90%" v-model="value5" size="small" />
      <Input search enter-button="SEARCH" placeholder="enter-button..." style="width: 70%" v-model="value4" size="default" />
    </div>
    <Divider dashed />
    <Divider orientation="left">通过设置属性 type 为 textarea 来使用文本域，用于多行输入。</Divider>
    <Input type="textarea" placeholder="textarea..." v-model="value2" style="width: auto"/>
    <Divider orientation="right">通过设置属性 rows 控制文本域默认显示的行数。</Divider>
    <Input type="textarea" :rows="3" placeholder=":rows..." v-model="value1" style="width: auto; margin-bottom: 60px"/>
    <Divider dashed></Divider>
    <inp-autosize></inp-autosize>
    <Divider dashed></Divider>
    <inp-slot></inp-slot>
  </div>
</template>

<script>
import InpAutosize from './components/Autosize'
import InpSlot from './components/Slot'
export default {
  name: 'Inp',
  components: {
    InpAutosize,
    InpSlot
  },
  data () {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: 'Hello world',
      value4: '',
      value5: '',
      value6: ''
    }
  }
}
</script>

<style scoped>

</style>
