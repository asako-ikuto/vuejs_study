<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <router-view/>
    <footer>
      <div>Copyright ©2022 ## Inc All rights reserved</div>
    </footer>
  </div>
</template>

<style>
#app {
  text-align: center;
}
.textbox-label{
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: 130px;
}
.login-input-area {
  margin-top: 30px;
  margin-bottom: 30px;
}
.sign-up-link {
  display: block;
}
footer {
  margin-top: 50px;
}
</style>



