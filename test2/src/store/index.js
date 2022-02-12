import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //質問表示初期値
    question2Visible: false,
    question3Visible: false,
    //選択肢初期値
    confirm_sex: '',
    confirm_birthdayYear: '1990年(平成2)',
    confirm_birthdayMonth: '1',
    confirm_birthdayDay: '1',
    confirm_lifeInsurance: '',
    confirm_hospitalization: '',
    confirm_surgery: '',
    confirm_consulationDetails: '',
  },
  getters: {
    confirm_sex: state => state.confirm_sex,
    confirm_birthdayYear: state => state.confirm_birthdayYear,
    confirm_birthdayMonth: state => state.confirm_birthdayMonth,
    confirm_birthdayDay: state => state.confirm_birthdayDay,
    confirm_lifeInsurance: state => state.confirm_lifeInsurance,
    confirm_hospitalization: state => state.confirm_hospitalization,
    confirm_surgery: state => state.confirm_surgery,
    confirm_consulationDetails: state => state.confirm_consulationDetails
  },
  mutations: {
    //step2の質問表示
    toggle_question2Visible: (state, question2Visible) => {
      state.question2Visible = question2Visible
    },
    toggle_question3Visible: (state, question3Visible) => {
      state.question3Visible = question3Visible
    },
    //入力値をセットする
    set_sex: (state, sex) => {
      state.confirm_sex = sex
    },
    set_birthdayYear: (state, birthdayYear) => {
      state.confirm_birthdayYear = birthdayYear
    },
    set_birthdayMonth: (state, birthdayMonth) => {
      state.confirm_birthdayMonth = birthdayMonth
    },
    set_birthdayDay: (state, birthdayDay) => {
      state.confirm_birthdayDay = birthdayDay
    },
    set_lifeInsurance: (state, lifeInsurance) => {
      state.confirm_lifeInsurance = lifeInsurance
    },
    set_hospitalization: (state, hospitalization) => {
      state.confirm_hospitalization = hospitalization
    },
    set_surgery: (state, surgery) => {
      state.confirm_surgery = surgery
    },
    set_consulationDetails: (state, consulationDetails) => {
      state.confirm_consulationDetails = consulationDetails
    },
  },
  actions: {
  },
  modules: {
  }
})
