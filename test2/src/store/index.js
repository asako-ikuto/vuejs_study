import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //タスク初期値
    tasks: [],
  },
  getters: {
    //フィルタ後のタスクを返す
    allTasks: (state) => state.tasks,
    workingTasks: (state) => state.tasks.filter(task => task.status === '作業中'),
    finishedTasks: (state) => state.tasks.filter(task => task.status === '完了')
  },
  mutations: {
    //新規タスク追加
    addTask: (state, val) => {
      state.tasks.push({
        comment: val,
        status: '作業中'
      })
    },
    //タスク削除
    deleteTask: (state, id) => {
      state.tasks.splice(id, 1)
    },
    //タスクの状態の変更
    toggleTaskStatus: (state, id) => {
      if(state.tasks[id].status === '作業中') {
        state.tasks[id].status = '完了'
      } else {
        state.tasks[id].status = '作業中'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
