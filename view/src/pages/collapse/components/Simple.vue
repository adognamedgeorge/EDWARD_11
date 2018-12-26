<template>
  <div>
    <h3>
      设置属性 simple 可以显示为不带边框和背景色的简洁模式。
    </h3>
    <Collapse simple>
      <Panel hide-arrow>
        123
        <p slot="content">
          11111111111
        </p>
      </Panel>
      <Panel>
        456
        <p slot="content">
          2222222222
        </p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'CollSimple'
}
</script>

<style scoped>

</style>
