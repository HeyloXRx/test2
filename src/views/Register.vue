<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper_img" />
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入密码" />
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="确认密码" />
    </div>
    <div class="wrapper_register-button">注册</div>
    <div class="wrapper_register-link" @click="handleLoginClick">已有账号？去登陆</div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "Register",
  setup(){
    const router=useRouter();
    const handleLoginClick=()=>{
      router.push({name:'Login'});
    }
    return {handleLoginClick};
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &_input {
    box-sizing: border-box;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    padding: 0 0.16rem;
    &_content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
    }
  }
  &_register-button {
    background: #0091ff;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.4rem;
    border-radius: 0.4rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &_register-link {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.14rem;
    text-align: center;
  }
}
</style>