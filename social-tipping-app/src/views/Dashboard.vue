<template>
  <div class="dashboard">
    <div style="text-align: left; float: left;">
      <p class="is-size-5 is-inline-block">{{ this.$store.getters.userName }}さんようこそ！！</p>
    </div>
    <div style="text-align:right">
      <p class="is-size-5 is-inline-block mr-2">残高：{{ this.$store.getters.amount }}</p>
      <button class="button is-link is-outlined is-small" @click="logout()">ログアウト</button>
    </div>
    <p class="is-size-3 mt-5 mb-5">ユーザー一覧</p>
    <table align="center" width="400">
      <thead>
          <tr>
            <th><p class="is-size-5">ユーザ名</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, id) in users" v-bind:key="id">
            <td class="pt-2 pb-2" width="60%"><p class="is-size-5">{{user.userName}}</p></td>
            <td class="pt-2 pb-2"><button class="button is-primary is-small" @click="showAmountContent(id)">walletを見る</button></td>
            <td class="pt-2 pb-2"><button class="button is-primary is-small" @click="showSendContent(id)">送る</button></td>  
          </tr>
        </tbody>  
    </table>

    <!-- walletの中身表示モーダル -->
    <div class="overlay" v-if="isShowAmountContent">
      <div id="amount-content">
        <div class="p-2">{{ otherUserName }}さんの残高</div>
        <div class="p-2">{{ otherUserAmount }}</div>
        <div class="content-footer has-background-grey-lighter p-1">
          <p><button class="button is-danger is-small" @click="hideAmountContent()">close</button></p>
        </div>
      </div>
    </div>
    <!--他のユーザに投げ銭送付モーダル -->
    <div class="overlay" v-if="isShowsendContent">
      <div id="send-content">
        <div class="pt-2">あなたの残高：{{ this.$store.getters.amount }}</div>
        <p>送る金額</p>
        <div class="p-4"><input class="input" type="text" v-model="sendingTipAmount"></div>
        <div class="content-footer has-background-grey-lighter p-1">
          <p><button class="button is-danger is-small" @click="sendSocialTip()">送信</button></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
  },
  data() {
    return {
      isShowAmountContent: false,
      isShowsendContent: false,
      otherUserName: '',
      otherUserAmount: '',
      sendingTipAmount: ''
    };
  },
  computed: {
    users() {
      return this.$store.getters.otherUsers
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    showAmountContent(userId) {
      this.isShowAmountContent = true
      this.otherUserName = this.$store.getters.otherUsers[userId].userName
      this.otherUserAmount = this.$store.getters.otherUsers[userId].amount
    },
    hideAmountContent() {
      this.isShowAmountContent = false
    },
    showSendContent(recipientId) {
      this.isShowsendContent = true
      const recipientUid = this.$store.getters.otherUsers[recipientId].uid
      const recipientAmount = this.$store.getters.otherUsers[recipientId].amount
      this.$store.commit('setRecipientData', {recipientUid: recipientUid, recipientAmount: recipientAmount})
    },
    sendSocialTip() {
      const sendingTipAmount = parseFloat(this.sendingTipAmount)
      const recipientAmount = parseFloat(this.$store.getters.recipientAmount)
      const amount = parseFloat(this.$store.getters.amount)

      if(sendingTipAmount < 0 || sendingTipAmount > amount || isNaN(sendingTipAmount) || sendingTipAmount == ''){
        return 
      }
      this.isShowsendContent = false
      this.$store.dispatch('sendSocialTip', {sendingTipAmount: sendingTipAmount, 
                                             recipientUid: this.$store.getters.recipientUid,
                                             recipientAmount: recipientAmount,  
                                             userUid: this.$store.getters.userUid,
                                             amount: amount})
      this.sendingTipAmount = ''
    }
  }
}
</script>

<style scoped>
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
#amount-content {
  z-index: 2;
  width: 200px;
  background: #fff
}
#send-content {
  z-index: 2;
  width: 200px;
  background: #fff
}
.content-footer {
  text-align: right;
}
</style>
