import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3MWe1l1VCMmuny6ly0j6iLhfh2CMh3H8",
  authDomain: "socialtippingapp.firebaseapp.com",
  projectId: "socialtippingapp",
  storageBucket: "socialtippingapp.appspot.com",
  messagingSenderId: "207712721377",
  appId: "1:207712721377:web:c26586d527f913a3bd5aa0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export default {
  firebaseApp,
  db
}

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
