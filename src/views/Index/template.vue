<!--  -->
<template>
    <div id="index">
        <section class="blog-list">
            <router-link v-for="(blog,i) in blogs" :to="`/detail/${blog.id}`" :key="i" class="item">
                <figure class="avatar">
                    <img :src="blog.user.avatar" :alt="blog.user.username">
                    <figcaption>{{blog.user.username}}</figcaption>
                </figure>
                <div class="blog-article">
                    <h3>{{blog.title}}<span> {{friendlyDate(blog.createdAt)}}</span></h3> 
                    <p>{{blog.description}}</p> 
                </div>             
            </router-link>
        </section>
        <section class="pagination">
            <el-pagination
                layout="prev,pager,next"
                :total="total"
                :current-page="page"
                @current-change="onPageChange"
                ></el-pagination>
        </section>        
    </div>
</template>

<script src="./template.js"></script>

<style lang="scss" scoped>
@import '../../assets/variable.scss';
#index {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    padding: 0 12%;
    .item{
        display: flex;
        margin: 20px 0;
        .avatar{
            justify-self: center;
            margin-left: 0;
            text-align: center;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            figcaption{
                font-size: 12px;
                color: $themeLighterColor;
            }
        }

        .blog-article{
            text-align: start;
            h3{
                &>span {
                    color: $textLighterColor;
                    font-size: 12px;
                    font-weight: normal;
                }
            }
            p{
                margin-top: 0;
                
            }
        }
    }

    .pagination {
        margin-bottom: 30px;
        text-align: center;
    }
}

</style>