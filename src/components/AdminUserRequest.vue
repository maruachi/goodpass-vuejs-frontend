<template>
  <div class="container">
    <h1>굿패스 서비스 신청하기</h1>
    <div class="notice">
      클라이밍장 관리자 신청을 위해 아래 양식을 작성해 주세요. <br />
      <a href="more-details.html">자세히 보기</a>
    </div>
    <form @submit.prevent="submitRequest">
      <div class="info-group">
        <label for="gym-name">클라이밍장 이름</label>
        <input type="text" id="gym-name" v-model="form.climbingGymName" placeholder="클라이밍장 이름을 입력하세요" required />
      </div>

      <div class="info-group">
        <label for="owner-name">센터장 성함</label>
        <input type="text" id="owner-name" v-model="form.climbingGymOwner" placeholder="센터장 성함을 입력하세요" required />
      </div>

      <div class="info-group">
        <label for="contact">연락처</label>
        <input type="tel" id="contact" v-model="form.contact" placeholder="연락처를 입력하세요" required />
      </div>

      <div class="info-group">
        <label for="email">이메일 주소</label>
        <input type="email" id="email" v-model="form.email" placeholder="이메일 주소를 입력하세요" required />
      </div>

      <button type="submit" class="submit-btn">신청하기</button>
    </form>
  </div>
</template>

<script>
import http from '@/http';

export default {
  data() {
    return {
      form: {
        climbingGymName: '',
        climbingGymOwner: '',
        contact: '',
        email: ''
      }
    };
  },
  methods: {
    submitRequest() {
      http.post('/admin-user/request', this.form)
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

<style scoped>
/* Add your styles here */
</style>