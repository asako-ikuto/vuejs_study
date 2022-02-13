<template>
  <div class="step3">
    <!-- STEP3 -->
    <div style="text-align:center">
      <div class="input-box">
        <div class="customer-information has-background-primary-light">
          <div class="customer-information__text">
            <div class="step-icon tag is-info">STEP3</div>
            <p><i class="fas fa-file-alt mr-1"></i>ご相談内容をご記入ください</p>
          </div>
        </div>
        <div class="customer-information__body pl-4 pr-4  pt-2 pb-2">
          <p class="has-text-info">-ご相談内容-</p>
          <textarea class="textarea mt-2" v-model="consulationDetails"></textarea>
        </div>
        <router-link to="/Step2"><button class="button is-primary mt-5 mr-4">前へ戻る<i class="fas fa-chevron-right ml-4"></i></button></router-link>
        <router-link to="/Confirm"><button class="button is-primary mt-5">次へ進む<i class="fas fa-chevron-right ml-4"></i></button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step3',
  components: {
  },
  data() {
    return {}
  },
  methods: {
  },
  computed: {
    consulationDetails: {
      get() {
        return this.$store.getters.consulationDetails
      },
      set(value) {
        this.$store.commit('set_consulationDetails', value)
      }
    }
  }
}
</script>
