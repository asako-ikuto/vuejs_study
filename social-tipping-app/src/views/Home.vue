<template>
  <div class="home">
    <p class="is-size-3 mt-5">ログイン画面</p>
    <!-- ログイン入力 -->
    <div class="login-input-area">
      <div>
        <label class="textbox-label">メールアドレス</label>
        <input type="email" placeholder="E-mail">
      </div>
      <div>
        <label class="textbox-label">パスワード</label>
        <input type="password" placeholder="Password">
      </div>
    </div>
    <!--ログイン先のダッシュボードまだ未実装-->
    <router-link to="/"><button class="button is-link is-outlined">ログイン</button></router-link>
    <router-link to="/sign-up"><a class="has-text-link sign-up-link">新規登録はこちらから</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
