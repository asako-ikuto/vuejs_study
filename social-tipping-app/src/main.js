import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3MWe1l1VCMmuny6ly0j6iLhfh2CMh3H8",
  authDomain: "socialtippingapp.firebaseapp.com",
  projectId: "socialtippingapp",
  storageBucket: "socialtippingapp.appspot.com",
  messagingSenderId: "207712721377",
  appId: "1:207712721377:web:c26586d527f913a3bd5aa0"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
