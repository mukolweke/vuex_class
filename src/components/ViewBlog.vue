<template>
    <div>
        <h1>{{title}}</h1>
        Blog id: {{blog.title}}
        <br/>
        <div class="blogPanel">
            {{blog.body}}
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ViewBlog",

        data() {
            return {
                blogId: null,
                blog:''
            }
        },

        computed: {
            title() {
                return this.$store.state.title
            }

        },
        mounted() {
            this.blogId = this.$route.params.id;
            axios
                .get('https://jsonplaceholder.typicode.com/posts/'+ this.blogId,)
                .then(response => {
                    this.blog = response.data
                })
                .catch(error => {
                    console.log(error), this.errored = true
                })
        },
    }
</script>

<style scoped>

</style>