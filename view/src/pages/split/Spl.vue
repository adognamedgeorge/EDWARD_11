<template>
  <div>
    <h3>Split 面板分割 #可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。</h3>
    <div class="split">
      <Split v-model="split1">
        <div slot="left" class="split_pane">
          Left pane
        </div>
        <div slot="right" class="split_pane">
          Right pane
        </div>
      </Split>
    </div>
    <br>
    <h3>上下分割</h3>
    <div class="split">
      <Split v-model="split2" mode="vertical">
        <div slot="top">
          Top pane
        </div>
        <div slot="bottom">
          Bottom pane
        </div>
      </Split>
    </div>
    <br>
    <h3>嵌套分割</h3>
    <div class="split">
      <Split v-model="split3">
        <div slot="left" class="no_padding">
          <Split v-model="split4" mode="vertical">
            <div slot="top">left_top</div>
            <div slot="bottom">left_bottom</div>
          </Split>
        </div>
        <div slot="right">
          right pane
        </div>
      </Split>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spl',
  data () {
    return {
      split1: 0.5,
      split2: 0.3,
      split3: 0.6,
      split4: 0.4
    }
  }
}
</script>

<style scoped>
  .split {
    height: 200px;
    border: 1px solid grey;
  }
  .split_pane {
    padding: 10px;
  }
  .no_padding {
    height: 200px;
  }
</style>
