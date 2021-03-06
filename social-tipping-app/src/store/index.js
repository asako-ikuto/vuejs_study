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
    amount: '',
    users: '',
    recipientUid: '',
    recipientAmount: ''
  },
  getters: {
    userUid: (state) => state.userUid,
    userName: (state) => state.userName,
    amount: (state) => state.amount,
    otherUsers: (state) => state.users.filter(user => user.uid !== state.userUid),
    recipientUid: (state) => state.recipientUid,
    recipientAmount: (state) => state.recipientAmount
  },
  mutations: {
    setUserData(state, payload) {
      state.email = payload.email
      state.password = payload.password
      state.userUid = payload.uid
      state.userName = payload.userName
      state.amount = payload.amount
    },
    resetUserData(state) {
      state.email = ''
      state.password = ''
      state.userUid = ''
      state.userName = ''
      state.amount = ''
      state.users = ''
      state.recipientUid = ''
      state.recipientAmount = ''
    },
    setUsers(state, payload) {
      state.users = payload.users
    },
    setRecipientData(state, payload) {
      state.recipientUid = payload.recipientUid
      state.recipientAmount = payload.recipientAmount
    },
    updateAmount(state, payload) {
      state.amount = payload.amount
    },
    resetRecipientData(state) {
      state.recipientUid = ''
      state.recipientAmount = ''
    }
  },
  actions: {
    signUpUser({commit}, payload) {
      auth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user
        const uid = user.uid
        const initialAmount = 1000

        commit('setUserData', {email: payload.email, password: payload.password, uid: uid, userName: payload.userName, amount: initialAmount}) 

        //ユーザネームをfirestoreに登録
        const uidRef = db.collection('users').doc(uid)  
        uidRef.set({
            userName: payload.userName,
            amount: initialAmount
          })
          .then(() => {
          //全てのユーザと残高を取得
          db.collection('users')
            .get()
            .then((querySnapshot) => {
              const allUsers = querySnapshot.docs.map(doc => {
                return {
                  uid: doc.id,
                  userName: doc.data().userName,
                  amount: doc.data().amount
                }
              })
              commit('setUsers', {users: allUsers})
              //ダッシュボードに遷移
              router.push('/dashboard')
            })
            .catch((error) => {
              console.log('Error getting users document:', error)
            })
          })
          .catch((error) => {
            console.error('Error adding document: ', error)
          }) 
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
          if(!doc.exists) {
            console.log('No such document!')
            return
          }
          const loginUserName = doc.data().userName
          const loginUserAmount = doc.data().amount
          commit('setUserData', {email: payload.email, password: payload.password, uid: uid, userName: loginUserName, amount: loginUserAmount})
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })

        //全てのユーザと残高を取得
        db.collection('users')
          .get()
          .then((querySnapshot) => {
            const allUsers = querySnapshot.docs.map(doc => {
              return {
                uid: doc.id,
                userName: doc.data().userName,
                amount: doc.data().amount
              }
            })
            commit('setUsers', {users: allUsers})
            //ダッシュボードに遷移
            router.push('/dashboard')
          })
          .catch((error) => {
            console.log('Error getting users document:', error)
          })
      })
      .catch((error) => {
        console.error('Error login', error)
      })
    },
    logout({commit}) {
      auth.signOut()
      .then(() => {
        commit('resetUserData')
        //ログイン画面に遷移
        router.push('/')
      })
      .catch((error) => {
        console.log('Error logout:', error)
      })
    },
    sendSocialTip({commit}, payload) {
      const sendingTipAmount = payload.sendingTipAmount
      const recipientUid = payload.recipientUid
      const recipientAmount = payload.recipientAmount
      const userUid = payload.userUid
      const amount = payload.amount
      //更新予定の残高
      const updatedAmount = amount - sendingTipAmount
      const updatedRecipientAmount = recipientAmount + sendingTipAmount
      //自分の残高、投げ銭送付先の残高更新
      const uidRef = db.collection('users').doc(userUid)
      const recipientUidRef = db.collection('users').doc(recipientUid)
      db.runTransaction((transaction) => {
        transaction.get(uidRef).then((uidRefDoc) => {
          if(!uidRefDoc) {
            throw 'Document does not exist!'
          }
          transaction.update(uidRef, {amount: updatedAmount})
        })
        return transaction.get(recipientUidRef).then((recipientUidRefDoc) => {
          if(!recipientUidRefDoc) {
            throw 'Document does not exist!'
          }
          transaction.update(recipientUidRef, {amount: updatedRecipientAmount})
        })
      }).then(() => {
        commit('updateAmount', {amount:updatedAmount })
        commit('resetRecipientData')

        //全てのユーザと残高を取得、更新
        db.collection('users')
        .get()
        .then((querySnapshot) => {
          const allUsers = querySnapshot.docs.map(doc => {
            return {
              uid: doc.id,
              userName: doc.data().userName,
              amount: doc.data().amount
            }
          })
          commit('setUsers', {users: allUsers})
        })
        .catch((error) => {
          console.log('Error getting users document:', error)
        })
      }).catch((error) => {
        console.log('Error update document:', error)
      })
    }
  },
  modules: {
  }
})
