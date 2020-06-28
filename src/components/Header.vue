<!-- Title组件 -->
<template>
    <header :class="{'login': isLogin, 'no-login': !isLogin}">
        <template v-if="!isLogin">
            <h1>分享博客，就在此刻</h1>
            <p>精品博客汇聚</p>
            <div class="btns">
                <router-link to="/login"><el-button>立即登录</el-button></router-link>
                <router-link to="/register"><el-button>注册账号</el-button></router-link>
            </div>
        </template> 
        <template v-if="isLogin">
            <h1><router-link to="/">Let's Share</router-link></h1>
            <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
            <div class="user">
                <img :src="user.avatar"  class="avatar" :alt="user.username" :title="user.username">
                <ul>
                    <li><router-link to="/my">我的</router-link></li>
                    <li><a href="#" @click="onLogout">注销</a></li>
                </ul>
            </div>
        </template>     
    </header>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'isLogin',
            'user'
        ])
    },
    created(){
        this.checkLogin()
    },
    methods: {
        ...mapActions([
            'checkLogin',
            'logout'
        ]),
        onLogout(){
            this.logout()
        },
        refresh(){
            this.$router.go(0)
        }
    }
}
</script>
<style lang="scss">
@import '../assets/variable.scss';

header.no-login{
    padding: 0 12% 30px 12%;
    background: $bgColor;

    h1{
        color: #fff;
        font-size: 40px;
        margin: 60px 0 0 0;
        text-transform: uppercase;
    }

    p{
        margin: 15px 0 0 0;
        color: #fff;
    }

    .btns {
        margin-top: 20px;
    }

    button {
        margin: 20px 5px 0 !important;
    }
}

header.login {
    padding: 0 12% 0 12%;
    background: $bgColor;
    display: flex;
    align-items: center;
    h1{
        text-align: start;
        flex: 1;
        font-size: 40px;
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        a{
            color: white;
        }
    }
    .edit {
        font-size: 30px;
        color: white;
    }
    .user{
        position: relative;
        .avatar{
            width: 40px;
            height: 40px;
            border: 3px solid white;
            border-radius: 50%;
            margin-left: 15px;
            cursor: pointer;
        }
        ul{
            display: none;
            padding: 0 20px;
            position: absolute;
            left: -20px;
            background: white;
            margin: 0 0 0 15px;
            list-style: none;
            border: 1px solid #eaeaea;
            text-align: center;
            a {
                white-space:nowrap;
                text-decoration: none;
                color: #333;
                font-size: 14px;
                display: block;
                padding: 5px 10px;
            }
        }
        &:hover ul{
                display: block;
        }
    }
}
</style>