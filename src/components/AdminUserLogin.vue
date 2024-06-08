<template>
  <div class="container">
    <h1>굿패스 로그인</h1>
    <form @submit.prevent="submitLogin">
      <div class="info-group">
        <label for="username">아이디</label>
        <input type="text" v-model="form.username" id="username" name="username" required>
      </div>
      <div class="info-group">
        <label for="password">비밀번호</label>
        <input type="password" v-model="form.password" id="password" name="password" required>
      </div>
      <button type="submit" class="submit-btn">로그인</button>
    </form>
    <p>비밀번호 분실 시에는 good.chalk22@gmail.com로 메일 주세요.</p>
  </div>
</template>

<script>
import http from '@/http';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    submitLogin() {
      http.post('/admin/login', this.form)
          .then(response => {
            if(response.status === 200){
              this.$router.push({ name: 'CompletionPage' });
            }
            console.log('Success:', response.data);
          })
          .catch(error => {
            alert('신청 중 오류가 발생했습니다.');
            console.error('Error:', error);
          });
    }
  }
};
</script>