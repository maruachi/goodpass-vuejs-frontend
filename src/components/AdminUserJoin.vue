<template>
  <div class="container">
    <h1>굿패스 계정 생성하기</h1>
    <div class="notice">
      굿패스 관리자 계정 생성을 위해 아래 양식을 작성해 주세요.
    </div>
    <form @submit.prevent="submitJoin">
      <div class="info-group">
        <label for="username">아이디</label>
        <input type="text" id="username" v-model="form.username" placeholder="아이디를 입력하세요" required />
      </div>

      <div class="info-group">
        <label for="full-name">성명</label>
        <input type="text" id="full-name" v-model="form.name" placeholder="성명을 입력하세요" required />
      </div>

      <div class="info-group">
        <label for="contact-number">연락처</label>
        <input type="tel" id="contact-number" v-model="form.contact" placeholder="연락처를 입력하세요" required />
      </div>

      <div class="info-group">
        <label for="email">이메일 주소</label>
        <input type="email" id="email" v-model="form.emailAddress" placeholder="이메일 주소를 입력하세요" required />
      </div>

      <button type="submit" class="submit-btn">생성하기</button>
    </form>
  </div>
</template>

<script>
import http from '@/http';

export default {
  data() {
    return {
      form: {
        username: '',
        name: '',
        contact: '',
        emailAddress: ''
      }
    };
  },
  methods: {
    submitJoin() {
      http.post('/admin-user/join', this.form)
          .then(response => {
            if(response.status === 200){
              this.$router.push({ name: 'CompletionPage' });
            }
            console.log('Success:', response.data);
          })
          .catch(error => {
            alert('가입 중 오류가 발생했습니다.');
            console.error('Error:', error);
          });
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>