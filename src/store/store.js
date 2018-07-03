import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        marks: 0,
        count : 0,
        title: "myBlog.me",
        title2: "vueClass",
        remark1: "Below Average",
        remark2: "Good",
        remark3: "Excellent"
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

        getMarks(state){

          return state.marks

        },

        getRemarks(state){

            if(this.marks<50){

                return state.remark1

            }else if(this.marks<70){

                return state.remark2

            }else{

                return state.remark3
            }

        },

    }
})

export default store
