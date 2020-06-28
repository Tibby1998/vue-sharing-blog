<!-- 登录 -->
<template>
    <div id="register">
        <h4>用户名</h4>
        <input v-model="username" placeholder="用户名">
        <h4>密码</h4>
        <input v-model="password" placeholder="密码">
        <el-button size="midium">立即注册</el-button>
        <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
    </div>
</template>

<script src="./template.js"></script>

<style scoped lang="scss">
@import '../../assets/variable.scss';
#register {
    text-align: start;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 30px 36%;
    h4{
        margin: 10px 0 5px;
    }
    button{
        margin-top: 30px !important;
    }
    .notice {
        font-size: 12px;
        color: $textLighterColor;
        margin-top: 30px;
        a {
        color: $themeColor;
        }
  }
}

</style>