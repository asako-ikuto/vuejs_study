<template>
  
  <div id="test"> 
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">Sample App</a>
      </div>
      <div id="menu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item navbar-end__content" href="#">ログイン</a>
          <a class="navbar-item navbar-end__content" href="#">新規登録</a>
        </div>
      </div>
    </nav>

    <!-- <div class="container is-max-desktop mt-6" style="border: 1px solid #00d1b2">
      <div class="notification has-background-primary-light pl-0 pr-0 pt-0 pb-2">
        <span class="tag is-info">STEP1</span>
        <div style="text-align:center" class="mt-0">
        <p style="display:inline"><i class="fas fa-address-card"></i>お客様の情報を入力してください</p>
        </div>
      </div>
    </div> -->

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
              <input type="radio" value="male" name="sex">
              男性
            </label>
            <label class="radio">
              <input type="radio" value="female" name="sex">
              女性
            </label>
          </div>

          <p class="has-text-info mt-2">-生年月日-</p>
          <div class="mt-2">
            <div class="select is-small">
              <select v-model="birthdayYear">
                <option v-for="(year, key) in 22" :key="key">{{ year + 1966 }}年(昭和{{ year + 41 }})</option>
                <option v-for="(year, key) in 12" :key="key">{{ year + 1988 }}年(平成{{ year }})</option>
              </select>
            </div>年
            
            <div class="select is-small">
              <select v-model.number="birthdayMonth">
                <option v-for="(month, key) in 12" :key="key">{{ month }}</option>
              </select>
            </div>月
            <div class="select is-small">
              <select v-model.number="birthdayDay">
                <option v-for="(day, key) in 31" :key="key">{{ day }}</option>
              </select>
            </div>日
          </div>
        </div>
        <button class="button is-primary mt-5">次へ進む<i class="fas fa-chevron-right ml-4"></i></button>
      </div>
    </div>

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
              <input type="radio" name="life-insurance">
              いいえ
            </label>
          </div>
          <p class="has-text-info mt-2">現在入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <div class="control mt-2">
            <label class="radio">
              <input type="radio" name="hospitalization">
              はい
            </label>
            <label class="radio">
              <input type="radio" name="hospitalization">
              いいえ
            </label>
          </div>
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
        <button class="button is-primary mt-5 mr-4">前へ戻る<i class="fas fa-chevron-right ml-4"></i></button><button class="button is-primary mt-5">次へ進む<i class="fas fa-chevron-right ml-4"></i></button>
      </div>
    </div>

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
          
          <textarea class="textarea mt-2"></textarea>
          
        </div>
        <button class="button is-primary mt-5 mr-4">前へ戻る<i class="fas fa-chevron-right ml-4"></i></button><button class="button is-primary mt-5">次へ進む<i class="fas fa-chevron-right ml-4"></i></button>
      </div>
    </div>

    <!-- <ul>
      <li v-for="(item, key) in myArray" :key="key">{{ item }}</li>
    </ul>
    <button v-on:click="addLast">末尾に追加</button>
    <button v-on:click="addObj(3)">4つ目に追加</button>
    <button v-on:click="changeObj(4)">1つ目に変更</button>
    <button v-on:click="deleteObj(1)">2つ目を削除</button> -->
    <!-- <ul>
      <li v-for="(item, key) in objArray" :key="key">
        {{ item.name }}￥{{ item.price }}
      </li>
      <li v-for="(number, key) in 10" :key="key">{{ number }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  el: "#test",
  data() {
    return {
      // birthdayYear:1999,
      // birthdayMonth:1,
      // birthdayDay:1,
      month:1,
      day:1,
    };
  },
  methods: {
    addLast() {
      this.myArray.push('末尾に追加');
    },
    addObj(index) {
      this.myArray.splice(index, 0, '[追加]');
    },
    changeObj(index) {
      this.myArray.splice(index,1,'[変更]');
    },
    deleteObj(index) {
      this.myArray.splice(index,1);
    }
  },
};

// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style>

.navbar {
  border-bottom: #686567 solid 1px;
}

.navbar-menu {
  top:0;
}

.navbar-end__content {
  font-size: 0.5rem;
}

.navbar-end__content::after{
  content:"|";
  padding-left: 20px;
}

.navbar-end__content:last-child::after{
  content:"";
}

.input-box {
  position: relative;
  margin:0 auto;
  max-width: 700px;
}

.step-icon {
  position: absolute;
  top:0;
  left:0;
}

.customer-information {
  padding-top:5px;
  padding-bottom:5px;
  margin-top: 30px;
  border: 1.5px solid #00d1b2;
  border-radius: 3px 3px 0 0;
}

.customer-information__body {
  border: 1.5px solid #00d1b2;
  border-top:none;
  border-radius: 0 0 3px 3px;
  text-align: left;
}

.form-select {
  display:inline;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
