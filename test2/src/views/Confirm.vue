<template>
  <div class="confirm">
    <!-- STEP3 -->
    <div style="text-align:center">
      <div class="input-box">
        <div class="customer-information has-background-primary-light">
          <div class="customer-information__text">
            <div class="step-icon tag is-info">STEP4</div>
            <p><i class="fas fa-file-alt mr-1"></i>以下の内容をご確認ください</p>
          </div>
        </div>
        <div class="customer-information__body pl-4 pr-4  pt-2 pb-2">
          <p class="has-text-info is-size-7">-性別-</p>
          <p class="ml-4 mt-2 mb-2">{{ this.$store.getters.confirm_sex }}</p>
          <p class="has-text-info is-size-7">-生年月日-</p>
          <p class="ml-4 mt-2 mb-2">{{ setBirthdayYear }}年{{ this.$store.getters.confirm_birthdayMonth }}月{{ this.$store.getters.confirm_birthdayDay}}日</p>
          <p class="has-text-info is-size-7">-現在、生命保険に加入されていますか？-</p>
          <p class="ml-4 mt-2 mb-2">{{ this.$store.getters.confirm_lifeInsurance }}</p>
          <p class="has-text-info is-size-7">-現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <p class="ml-4 mt-2 mb-2">{{ this.$store.getters.confirm_hospitalization }}</p>
          <p class="has-text-info is-size-7">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
          <p class="ml-4 mt-2 mb-2">{{ this.$store.getters.confirm_surgery }}</p>
          <p class="has-text-info is-size-7">-ご相談内容-</p>
          <p class="ml-4 mt-2 mb-2">{{ this.$store.getters.confirm_consulationDetails }}</p>
        </div>
        <router-link to="/Step3"><button class="button is-primary mt-5 mr-4">前へ戻る<i class="fas fa-chevron-right ml-4"></i></button></router-link>
        <button class="button is-primary mt-5">送信<i class="fas fa-chevron-right ml-4"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'Confirm',
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
    setBirthdayYear: {
      get() {
        return this.$store.getters.confirm_birthdayYear.slice(0,4)
      },
    },
  }
}
</script>



