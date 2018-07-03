<template>
    <div class="sidebar">
        <ul>
            <li>View Blogs</li>
            <li>Create Blogs</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

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
        text-align: left;
    }

</style>