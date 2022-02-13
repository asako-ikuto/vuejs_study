<template>
  <div class="home">
    <!-- STEP1 -->
    <div style="text-align:center">
      <div class="input-box">
        <div class="customer-information has-background-primary-light">
          <div class="customer-information__text">
            <div class="step-icon tag is-info">STEP1</div>
            <p><i class="fas fa-address-card mr-1"></i>お客様の情報を入力してください</p>
          </div>
        </div>
        <div class="customer-information__body pl-2 pt-2 pb-2">
          <p class="has-text-info">-性別-</p>
          <div class="control mt-2">
            <label class="radio">
              <input type="radio" value="男性" name="sex" v-model="sex">
              男性
            </label>
            <label class="radio">
              <input type="radio" value="女性" name="sex" v-model="sex">
              女性
            </label>
          </div>

          <p class="has-text-info mt-2">-生年月日-</p>
          <div class="mt-2">
            <div class="select is-small">
              <select v-model="birthdayYear">
                <option v-for="year in 22" :key="`year1-${year}`">{{ year + 1966 }}年(昭和{{ year + 41 }})</option>
                <option v-for="year in 12" :key="`year2-${year}`">{{ year + 1988 }}年(平成{{ year }})</option>
              </select>
            </div>年
            
            <div class="select is-small">
              <select v-model.number="birthdayMonth">
                <option v-for="month in 12" :key="`month-${month}`">{{ month }}</option>
              </select>
            </div>月
            <div class="select is-small">
              <select v-model.number="birthdayDay">
                <option v-for="day in 31" :key="`day-${day}`">{{ day }}</option>
              </select>
            </div>日
          </div>
        </div>
        <router-link to="/Step2"><button class="button is-primary mt-5">次へ進む<i class="fas fa-chevron-right ml-4"></i></button></router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {  
  name: 'Home',
  components: {
  },
  data() {
    return {}
  },
  computed: {
    sex: {
      get() {
        return this.$store.getters.sex
      },
      set(value) {
        this.$store.commit('set_sex', value)
      }
    },
    birthdayYear: {
      get() {
        return this.$store.getters.birthdayYear
      },
      set(value) {
        this.$store.commit('set_birthdayYear', value)
      }
    },
    birthdayMonth: {
      get() {
        return this.$store.getters.birthdayMonth
      },
      set(value) {
        this.$store.commit('set_birthdayMonth', value)
      }
    },
    birthdayDay: {
      get() {
        return this.$store.getters.birthdayDay
      },
      set(value) {
        this.$store.commit('set_birthdayDay', value)
      }
    }
  }
}
</script>
