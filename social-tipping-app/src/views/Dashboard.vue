<template>
  <div class="dashboard">
    <div style="text-align: left; float: left;">
      <p class="is-size-5 is-inline-block">{{ this.$store.getters.userName }}さんようこそ！！</p>
    </div>
    <div style="text-align:right">
      <p class="is-size-5 is-inline-block mr-2">残高：{{ this.$store.getters.amount }}</p>
      <router-link to="/"><button class="button is-link is-outlined is-small">ログアウト</button></router-link>
    </div>
    <p class="is-size-3 mt-5">ユーザー一覧</p>
    
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>
