<template>
  <div class="signup">
    {{ this.db }}
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
    <router-link to="/"><button class="button is-link is-outlined" @click="signUp(userName, email, password)">新規登録</button></router-link>
    <router-link to="/"><a class="has-text-link sign-up-link">ログインはこちらから</a></router-link>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth();

import { addDoc, collection } from 'firebase/firestore'

export default {
  name: 'signup',
  components: {
  },
  methods: {
    signUp(userName, email, password) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;

          if(user) {
            const uid = user.uid
            
            const userInitialData = {
              userName: userName
            }

            addDoc(collection(this.db, 'users', uid), userInitialData)
          }
        })
        .catch(error => {
          alert(error.message)
          //エラー
          //Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore
        })

    }
  }
}
</script>
