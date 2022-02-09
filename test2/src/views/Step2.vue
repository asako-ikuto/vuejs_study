<template>
  <div class="step2">
    <!-- STEP2 -->
    <div style="text-align:center">
      <div class="input-box has-text-centered">
        <div class="customer-information has-background-primary-light">
          <div class="customer-information__text has-text-centered">
            <div class="step-icon tag is-info">STEP2</div>
            <p><i class="fas fa-chalkboard-teacher mr-1"></i>以下にお答えください</p>
          </div>
        </div>
        <div class="customer-information__body pl-4 pr-4  pt-2 pb-2">
          <p class="has-text-info">現在、生命保険に加入されていますか？</p>
          <div class="control mt-2">
            <label class="radio">
              <input type="radio" name="life-insurance">
              はい
            </label>
            <label class="radio">
              <input type="radio" name="life-insurance" @click="showQuestion2">
              いいえ
            </label>
          </div>
          <div v-if="question2Visible">
            <p class="has-text-info mt-2">現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
            <div class="control mt-2">
              <label class="radio">
                <input type="radio" name="hospitalization">
                はい
              </label>
              <label class="radio">
                <input type="radio" name="hospitalization"  @click="showQuestion3">
                いいえ
              </label>
            </div>
          </div>
          <div v-if="question3Visible">
            <p class="has-text-info mt-2">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
            <div class="control mt-2">
              <label class="radio">
                <input type="radio" name="surgery">
                はい
              </label>
              <label class="radio">
                <input type="radio" name="surgery">
                いいえ
              </label>
            </div>
          </div>
        </div>
        <router-link to="/"><button class="button is-primary mt-5 mr-4">前へ戻る<i class="fas fa-chevron-right ml-4"></i></button></router-link>
        <router-link to="/Step3"><button class="button is-primary mt-5">次へ進む<i class="fas fa-chevron-right ml-4"></i></button></router-link>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Step2',
  components: {
  },
  data() {
    return {
      //質問非表示
      question2Visible:false,
      question3Visible:false,
    };
  },
  methods: {
    showQuestion2() {
      this.question2Visible=true;
    },
    showQuestion3() {
      this.question3Visible=true;
    },
  },
}
</script>
