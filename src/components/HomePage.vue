<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                blog: null,
                msg: 'Vuex Class'
            }
        },
        computed:{
            title(){
                return this.$store.state.title
            }
        },
        mounted() {
            axios
                .get('https://jsonplaceholder.typicode.com/posts',)
                .then(response => {this.blog = response.data})
               .catch(error => {console.log(error), this.errored = true})
        },
    }

</script>


<template>
    <div class="hello">
        <h1>{{ title }}</h1>

        <section style="width: 1000px;margin: 0 auto;">
            <div class="sidebar">
                <ul>
                    <li>View Blogs</li>
                    <li>Create Blogs</li>
                </ul>
            </div>
            <div class="main_content" v-for='data in blog'>

                <div class='panel'>
                    <div class='panel-heading'>
                        {{data.title}}
                    </div>
                    <div class="panel-body">
                        {{data.body}}
                    </div>
                    <router-link style="margin-bottom: 5px;" :to="{ name: '/blog/', params: { id: data.id }}">Read More</router-link>
                </div>
            </div>

        </section>
    </div>
</template>


<style scoped>

    .panel{
        height: 100px;
        width: 600px;
        margin: 20px auto;
        background: pink;
    }

    .panel-heading{
        background: #ccc;
    }

    .panel-body{
        height: 100px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .sidebar{
        float: left;
        text-align: left;height: 1000px;
    }
    .main_content{
        float: left;
        height: auto;
    }

</style>
