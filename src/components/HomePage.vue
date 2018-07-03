<script>
    import axios from 'axios'
    import all_blogs from './blogs'
    import sidebar from './sidebar'

    export default {
        data() {
            return {
                blog: null,
                msg: 'Vuex Class',

            }
        },
        components:{all_blogs, sidebar},
        computed:{
            title(){
                return this.$store.state.title
            }
        },
        // mounted() {
        //     axios
        //         .get('https://jsonplaceholder.typicode.com/posts',)
        //         .then(response => {this.blog = response.data})
        //        .catch(error => {console.log(error), this.errored = true})
        // },
    }

</script>


<template>
    <div class="hello">
        <h1>{{ title }}</h1>

        <section style="width: 1000px;margin: 0 auto;">
            <sidebar>
                <slot></slot>
            </sidebar>
            <all_blogs>
                <slot></slot>
            </all_blogs>

        </section>
    </div>
</template>


<style scoped>


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
