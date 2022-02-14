import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //質問表示初期値
    question2Visible: false,
    question3Visible: false,
    //選択肢初期値
    sex: '',
    birthdayYear: '1990年(平成2)',
    birthdayMonth: '1',
    birthdayDay: '1',
    lifeInsurance: '',
    hospitalization: '',
    surgery: '',
    consulationDetails: '',
  },
  getters: {
    sex: state => state.sex,
    birthdayYear: state => state.birthdayYear,
    birthdayMonth: state => state.birthdayMonth,
    birthdayDay: state => state.birthdayDay,
    lifeInsurance: state => state.lifeInsurance,
    hospitalization: state => state.hospitalization,
    surgery: state => state.surgery,
    consulationDetails: state => state.consulationDetails
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
      state.sex = sex
    },
    set_birthdayYear: (state, birthdayYear) => {
      state.birthdayYear = birthdayYear
    },
    set_birthdayMonth: (state, birthdayMonth) => {
      state.birthdayMonth = birthdayMonth
    },
    set_birthdayDay: (state, birthdayDay) => {
      state.birthdayDay = birthdayDay
    },
    set_lifeInsurance: (state, lifeInsurance) => {
      state.lifeInsurance = lifeInsurance
    },
    set_hospitalization: (state, hospitalization) => {
      state.hospitalization = hospitalization
    },
    set_surgery: (state, surgery) => {
      state.surgery = surgery
    },
    set_consulationDetails: (state, consulationDetails) => {
      state.consulationDetails = consulationDetails
    },
  },
  actions: {
  },
  modules: {
  }
})
