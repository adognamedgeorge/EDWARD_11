<template>
  <div class="login_body">
    <div class="login_title">
      <h1>云蚂蚁仓储管理系统</h1>
    </div>
    <div class="login_box">
      <Tabs>
        <TabPane label="主账号登录">
          <div class="login_form">
            <div class="login_error"></div>
            <Form>
              <FormItem>
                <Input placeholder="用户名/邮箱/已验证手机号" v-model.trim="username" size="large"/>
              </FormItem>
              <FormItem>
                <Input placeholder="password" v-model.trim="password" size="large" />
              </FormItem>
              <FormItem>
                <Row>
                  <i-col span="15">
                    <Input placeholder="验证码" v-model.trim="captcha" size="large"/>
                  </i-col>
                  <i-col span="9">
                    <Tooltip content="点击图片，刷新验证码" placement="top">
                      <img :src="captchaUrl" @click="refreshCaptcha"/>
                    </Tooltip>
                  </i-col>
                </Row>
              </FormItem>
              <FormItem></FormItem>
            </Form>
          </div>
        </TabPane>
        <TabPane label="子账号登录"></TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
// import qs from 'qs'
const CAPTCHA_URL = '/api/captcha'
export default {
  name: 'Login',
  methods: {
    // 刷新验证码
    refreshCaptcha () {
      this.captchaUrl = `${CAPTCHA_URL}?t=${new Date().getTime()}`
      this.captcha = ''
    }
  }
}
</script>

<style scoped>
  .login_body {
    position: relative;
    height: 100vh;
    background: url("../assets/timg.jpg") center no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    /*min-height: 667px;*/
  }
  .login_title h1 {
    text-align: center;
    padding: 30px 0;
    color: #ffffff;
  }
  .login_box {
    width: 400px;
    height: 500px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #ffffff;
    position: relative;
    padding: 20px 22px;
  }
</style>
