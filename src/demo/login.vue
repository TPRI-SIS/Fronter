<template>
  <div class="login">
    <div>
      <img src="./asset/logo.png">
    </div>
    <div class="form">
      <mu-text-field label="用戶名" labelFloat v-model="user" />
      </br>
      <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="password" labelFloat/>
      <br/>
      <mu-switch label="记住我" class="demo-switch left cSwitch" labelLeft v-model="remember" />
      <br/>
      <mu-raised-button label="登录" class="demo-raised-button cButton" primary @click="login" />
    </div>

  </div>
</template>

<script>
import router from './router'

export default {
  name: 'login',
  data() {
    return {
      user: '',
      password: '',
      remember: true
    }
  },
  methods: {
    login: function () {
      console.log(this.user)
      console.log(this.password)

      //用户名密码验证成功

      $localStorage.set('isAuth', true)
      router.push("/Nav")
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-top: 80px;
}

.form{
  position: absolute;
  bottom: 120px;
  left: calc(100%/2 - 130px)
}

.cSwitch {
  margin-top: 24px;
}

.cButton {
  margin-top: 36px;
  width: 250px;
}
</style>
