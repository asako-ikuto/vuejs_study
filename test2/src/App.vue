<template>
  <div id="app">
    <h2>ToDoリスト</h2>
    <input type="radio" name="filter-status" value="all" v-model="filterStatus">すべて
    <input type="radio" name="filter-status" value="working" v-model="filterStatus">作業中
    <input type="radio" name="filter-status" value="finished" v-model="filterStatus">完了
    <!-- タスク一覧 -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, id) in tasks" :key="id">
          <td>{{ task.taskId }}</td>
          <td>{{ task.comment }}</td>
          <td><button type="button" @click="toggleTaskStatus(id)">{{ task.status }}</button></td>
          <td><button type="button" @click="deleteTask(id)">削除</button></td>
        </tr>
      </tbody>
    </table>
    <!-- 新規タスク追加 -->
    <h3>新規タスクの追加</h3>
    <input type="text" v-model="newTaskComment"><button type="button" @click="addTask(newTaskComment)" style="margin-left:4px;">追加</button>
  </div>
</template>

<style>
</style>

<script>

export default {  
  name: 'App',
  components: {
  },
  data() {
    return {
      filterStatus: 'all',
    }
  },
  computed: {
    tasks() {
      //作業中
      if(this.filterStatus === 'working') {
        return this.$store.getters.tasks.filter(task => task.status === '作業中')
      //完了
      } else if(this.filterStatus === 'finished') {
        return this.$store.getters.tasks.filter(task => task.status === '完了')
      //すべて
      } else {
        return this.$store.getters.tasks
      }
    } 
  },
  methods: {
    //タスクを追加する
    addTask(newTaskComment) {
      this.$store.commit('addTask', newTaskComment)
      this.newTaskComment = ''
    },
    //タスクを削除する
    deleteTask(id) {
      this.$store.commit('deleteTask', id)
    },
    //タスクの状態を変更する
    toggleTaskStatus(id) {
      this.$store.commit('toggleTaskStatus', id)
    }
  },
}

</script>
