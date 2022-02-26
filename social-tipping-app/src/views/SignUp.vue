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
import auth from '../main.js'
import db from '../main.js'

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

      console.log(db)//何かしらオブジェクトとれてる
      console.log(auth)//何かしらオブジェクトとれてる

      //_main_js__WEBPACK_IMPORTED_MODULE_0__.default.createUserWithEmailAndPassword is not a function
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const uid = user.uid

          alert(uid) //ここ実行されていない

            // this.db.collection('users').add({
            //   uid: uid,
            //   userName: userName
            // })
          })
          .catch((error) => {
            alert(error.message)
          })

      //テストコード(実行時に下記エラーコードが出てくる)
      //_main_js__WEBPACK_IMPORTED_MODULE_0__.default.collection is not a function
      db.collection("testsample").add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        
      
        

        

        

    }
  }
}
</script>
