<template>
    <div id="VuexTest">
        <h1>{{title2}}</h1>
        <p>Students Marks: &nbsp; {{getMarks}}&nbsp;{{getRemark}}</p>

        <button @click="activate">Enter Marks</button>

        <form>

            Mathematics:<br>
            <input v-model="items.mathematics" required><br>

            Biology<br>
            <input v-model="items.biology" required><br>

            English:<br>
            <input v-model="items.english" required><br>

            Kiswahili:<br>
            <input v-model="items.kiswahili" required><br>

            Socials:<br>
            <input v-model="items.socials" required><br>

            Chemistry:<br>
            <input v-model="items.chemistry" required><br>

            Physics:<br>
            <input v-model="items.physics"required><br>

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

            },

            getRemark(){

                return this.$store.getters.getRemark

            },
        },

        methods:{
            pressed(){

                this.$store.commit('addMarks', this.items) //access the mutations direct
                this.items = {}
                this.activate = true
                this.submitted = true
                this.getRemark()
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