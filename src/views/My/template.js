import {mapGetters} from 'vuex'
import blog from '@/api/blog'

export default{
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(this.user.id, {page: this.page})
        .then((res) => {
            this.blogs = res.data
            this.total = res.total
            this.page = res.page
        })
    },
    methods: {
        onPageChange(newPage){
            blog.getBlogsByUserId({page: newPage}).then(res => {
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
                this.$router.push({path: '/my', query: {page: newPage}})
            })
        },
        async onDelete(blogId) {
            await this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            await blog.deleteBlog({ blogId })
            this.$message.success('删除成功')
            this.blogs = this.blogs.filter(blog => blog.id != blogId)
        },
        splitDate(dateStr) {
            let dateObj = typeof(dateStr) === 'object' ? dateStr : new Date(dateStr)
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        }
    },
}