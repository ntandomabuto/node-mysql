import { createStore } from 'vuex'
import axios from 'axios'
// import { toast } from "vue3-toastify";

/* eslint-disable*/
import "vue3-toastify/dist/index.css";

import {useCookies} from 'vue-cookies'

import router from '@/router';

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    fruits:null
  },
  getters: {
  },
  mutations: {
    setFruits(state,payload){
      state.fruits=payload
    }
  },
  actions: {
     addUser({commit},info){
      let data =  axios.post('http://localhost:3000/user',info)
      console.log(data);
      
    },
    async loginUser({commit},info){
      let {data} = await axios.post('http://localhost:3000/user/login',info)
      console.log(data);
      $cookies.set('token',data.token)
      // if (data.message){
      //   toast("login is successful",{
      //     "theme": "auto",
      //     "type": "default",
      //     "dangerouslyHTMLString": true
      //   })
      // }
      await router.push('/')
      location.reload()
      
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:3000/fruit')
      commit('setFruits',data)
    },
    async addToCart({commit},fruit_id){
      let {data}= await axios.post('http://localhost:3000/fruit/cart',{id:fruit_id})
      console.log(data);
    }
    
  },
  modules: {
  }
})
