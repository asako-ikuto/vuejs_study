<template>
  <div class="signup">
    <p class="is-size-3 mt-5">新規登録画面</p>
    <!-- ログイン入力 -->
    <div class="login-input-area">
      <div>
        <label class="textbox-label">ユーザ名</label>
        <input type="text" placeholder="userName" v-model="userName">
      </div>
      <div>
        <label class="textbox-label">メールアドレス</label>
        <input type="email" placeholder="E-mail" v-model="email">
      </div>
      <div>
        <label class="textbox-label">パスワード</label>
        <input type="password" placeholder="Password" v-model="password">
      </div>
    </div>
    <!--新規登録先のダッシュボードまだ未実装-->
    <router-link to="/"><button class="button is-link is-outlined" @click="signUp()">新規登録</button></router-link>
    <router-link to="/"><a class="has-text-link sign-up-link">ログインはこちらから</a></router-link>
  </div>
</template>

<script>
//firebase初期化
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

const db = firebase.firestore()
const auth = firebase.auth()

export default {
  name: 'signup',
  components: {
  },
  data() {
    return {
      userName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    signUp() {

      //ユーザ新規登録
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          //uid取得
          const user = userCredential.user;
          const uid = user.uid

          //ユーザネームをfirestoreに登録
          const uidRef = db.collection('users').doc(uid)

          uidRef.set({
            userName: this.userName
          })
          .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        })
    }
  }
}
</script>
