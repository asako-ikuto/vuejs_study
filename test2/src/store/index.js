import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //タスク初期値
    tasks: [],
  },
  getters: {
    tasks: state => state.tasks
  },
  mutations: {
    //新規タスク追加
    addTask: (state, val) => {
      state.tasks.push({
        taskId: state.tasks.length,
        comment: val,
        status: '作業中'
      })
    },
    //タスク削除
    deleteTask: (state, id) => {
      //タスク削除
      state.tasks.splice(id, 1)
      //taskIdの更新
      state.tasks.forEach((task, index) => {
        task.taskId = index
      })
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
