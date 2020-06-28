<!--  -->
<template>
    <div id="detail">
        <section class="user-Info">
            <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
            <div class="author-Info">
                <h3>{{title}}</h3>
                <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{friendlyDate(createdAt)}}</p>
            </div>
        </section>
        <section class="article" v-html="markdown"></section>
    </div>
</template>

<script src="./template.js">

</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
@import '@/assets/mixin.scss';
@import '@/assets/variable.scss';

#detail{
    padding: 0 12%;
    .user-Info{
        display: flex;
        align-items: center;
        padding: 30px 0;
        border-bottom: 1px solid #ebebeb;
        .avatar{
            @include avatar(60px);
        }
        .author-Info{
            padding-left: 30px;
            h3{
                padding: 0;
                margin: 5px 0;
            }
            p{
                padding: 0;
                margin: 0;
                font-size: 12px;
                a {
                    color: $themeColor;
                    text-decoration: none;
                }
            }
        }
    }
    .article {
        padding: 30px 0;
    }
}
</style>