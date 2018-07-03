<template>
    <div id="VuexTest">
        <h1>{{title2}}</h1>
        <p>Students Marks: &nbsp; {{getMarks}}</p>

        <button @click="activate">Enter Marks</button>

        <form>

            Mathematics:<br>
            <input :disabled="submitted" v-model="items.mathematics"/><br>

            Biology<br>
            <input v-model="items.biology"/><br>

            English:<br>
            <input v-model="items.english"/><br>

            Kiswahili:<br>
            <input v-model="items.kiswahili"/><br>

            Socials:<br>
            <input v-model="items.socials"/><br>

            Chemistry:<br>
            <input v-model="items.chemistry"/><br>

            Physics:<br>
            <input v-model="items.physics"/><br>

        </form>

        <br>

        <button type="button" :disabled="submitted" @click="pressed">Add Marks&nbsp;{{getMarks}}</button>

    </div>
</template>

<script>
    export default {
        name: "VuexTest",

        data(){
            return{
               items:{},
                activate: false,
                // submitted: true
            }
        },

        computed:{

            getMarks(){

                return this.$store.getters.getMarks
            },

            title2(){

                return this.$store.state.title2

            },

            count(){
                return this.$store.getters.counter;
            }
        },

        methods:{
            pressed(){

                this.$store.commit('addMarks', this.items) //access the mutations direct
                this.items = {}
                this.activate = true
                this.submitted = true
                // this.$store.dispatch('addMarks', 2)

            },

            activate(){
                this.submitted = false
            }


        }
    }
</script>

<style scoped>


    h1, h2 {
        font-weight: normal;
    }


</style>