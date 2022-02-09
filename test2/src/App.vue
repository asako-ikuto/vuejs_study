<template>
  <div id="app">
    <nav class="globalnav has-background-light">
      <div class="navbar-title ml-4 mt-3 mb-3">Sample App</div>
      <div class="globalnav-end">
        <a class="globalnav-end__content mr-2" href="#">ログイン</a>|
        <a class="globalnav-end__content ml-2" href="#">新規登録</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.globalnav {
  border-bottom: #686567 solid 1px;
  position: relative;
}

.globalnav-end {
  position: absolute;
  top:0;
  right:0;
  font-size: 0.5rem;
}

.globalnav-end__content {
  color:#4A4A4A;
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
</style>
