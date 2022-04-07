<template>
  <div id="Login">
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="userName" placeholder="用户名" class="login-input"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userPwd" placeholder="密码" class="login-input"></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="login()" class="login-button">登录</el-button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";
import { TMApiClient } from "../services/TMApiClient";
@Component
export default class Login extends Vue {
  private authClient: TMApiClient.AuthenticationClient;
  constructor() {
    super();
    this.userName = "admin";
    this.userPwd = "admin";
    this.authClient = new TMApiClient.AuthenticationClient(undefined, axios);
  }
  private userName: string;
  private userPwd: string;
  private async login(): Promise<void> {
    var result = await this.authClient.getToken(this.userName, this.userPwd);
    if (result.loginResult === 1) {
      this.$message.success(result.details);
      window.sessionStorage.setItem("token", result.token);
      this.$router.push("/");
    } else {
      this.$message.error(result.details);
    }
  }
}
</script>
<style scoped lang="scss">
.login-input {
  width: 260px;
}
#Login{
  width: 320px;
  margin: 100px auto;
}
</style>
