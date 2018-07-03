import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        marks: 0,
        count : 0,
        title: "myBlog.me",
        title2: "vueClass"
    },

    mutations:{ //always synchronous

        addMarks(state, items){
            state.marks = (Number(items.mathematics) + Number(items.biology)+ Number(items.chemistry) + Number(items.physics)+Number(items.socials)+Number(items.kiswahili)+Number(items.english)) ;
        }

    },
    actions:{

        //access mutations if you have an asynchronous thing
        increment(state, payload){
            state.commit('increment', payload);

        }
    },
    getters:{
        // we can have lots of getters

        // message(state){
        //     return state.message.toUpperCase();
        // },

        getMarks(state){

          return state.marks

        },

        counter(state){

            return state.count;

        }
    }
})

export default store
