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
      this.$store.dispatch('signUpUser', {userName: this.userName, email: this.email, password: this.password})
    }
  }
}
</script>
