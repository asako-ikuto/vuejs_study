import Vue from 'vue'
import Vuex from 'vuex'
import {db, auth} from '../main.js'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    userUid: '',
    userName: '',
    amount: ''
  },
  getters: {
    userName: (state) => state.userName,
    amount: (state) => state.amount
  },
  mutations: {
    setUserData(state, payload) {
      state.email = payload.email
      state.password = payload.password
      state.userUid = payload.uid
      state.userName = payload.userName
      state.amount = payload.amount
    }
  },
  actions: {
    signUpUser({commit}, payload) {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user
        const uid = user.uid
        const initialAmount = 1000

        //ユーザネームをfirestoreに登録
        const uidRef = db.collection('users').doc(uid)  
        uidRef.set({
            userName: payload.userName,
            amount: initialAmount
          })
          .then(() => {
            console.log('Document successfully written!')
          })
          .catch((error) => {
            console.error('Error adding document: ', error)
          })

        commit('setUserData', {email: payload.email, password: payload.password, uid: uid, userName: payload.userName, amount: initialAmount})

        //ダッシュボードに遷移
        router.push('/dashboard')
      })
      .catch((error) => {
        console.log('Error signup', error)
      })
    },
    login({commit}, payload) {
      auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user
        const uid = user.uid

        //ユーザネームと投げ銭残高の取得
        const uidRef = db.collection('users').doc(uid)
        uidRef.get().then((doc) => {
          if(doc.exists) {

            const loginUserName = doc.data().userName
            const loginUserAmount = doc.data().amount
            console.log('Document data:', doc.data().userName);

            commit('setUserData', {email: payload.email, password: payload.password, uid: uid, userName: loginUserName, amount: loginUserAmount})

            //ダッシュボードに遷移
            router.push('/dashboard')
          } else {
            console.log('No such document!')
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
      })
      .catch((error) => {
        console.error('Error login', error)
      })
    }
  },
  modules: {
  }
})
