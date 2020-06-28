<!--  -->
<template>
    <div id="my">
        <section class="user-info">
            <img :src="user.avatar" :alt="user.username" class="avatar">
            <h3>{{user.username}}</h3>
        </section>
        <section>
            <router-link class="item" v-for="(blog, i) in blogs" :key="i" :to="`/detail/${blog.id}`">
                <div class="date">
                    <span class="day">{{splitDate(blog.createdAt).date}}</span>
                    <span class="month">{{splitDate(blog.createdAt).month}}月</span>
                    <span class="year">{{splitDate(blog.createdAt).year}}</span>
                </div>
                <div class="blog-detail">
                    <h3>{{blog.title}}</h3>
                    <p>{{blog.description}}</p>
                    <div class="action">
                        <router-link :to="`/edit/${blog.id}`">编辑</router-link>
                        <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
                    </div>
                </div>
            </router-link>
        </section>
        <section class="pagination">
      <el-pagination
            layout="prev, pager, next"
            :total="total"
            :current-page="page"
            @current-change="onPageChange">
      </el-pagination>
    </section>
    </div>
</template>

<script src="./template.js"></script>

<style scoped lang="scss">
/* @import url(); 引入css类 */
@import '@/assets/mixin.scss';
#my {
    padding: 0 12%;
    .user-info{
        @include user-info;
        .avatar {
            @include avatar(60px);
        }
        h3{
            margin-left: 15px;
            font-size: 20px;
        }
    }
    .pagination {
        margin-bottom: 30px;
        text-align: center;
    }
    .item{
        display: flex;
        // align-items: center;
        margin: 20px 20px;
        .date{
            display: flex;
            flex-direction: column;
            text-align: center;
            color: #999;
            .day{
                font-size: 40px;
            }
        }
        .blog-detail{
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            h3, p{
                margin: 0;
            }
            h3{
                margin-top: 10px;
            }
            p{
                flex: 1;
                padding-top: 6px;
            }
            a{
                color: $themeLighterColor;
                font-size: 12px;
                padding-right: 3px;
            }
        }
    }
}
</style>