import Vue from 'vue'
import Vuex from 'vuex'

import {db, auth} from '../main.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userUid: ''
  },
  mutations: {
    setUserUid(state, payload) {
      state.userUid = payload.uid
    }
  },
  actions: {
    signUpUser({commit}, payload) {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user
        const uid = user.uid

        //ユーザネームをfirestoreに登録
        const uidRef = db.collection('users').doc(uid)  
        uidRef.set({
            userName: payload.userName
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

        commit('setUserUid', {uid: uid})
      })
    },
  },
  modules: {
  }
})
