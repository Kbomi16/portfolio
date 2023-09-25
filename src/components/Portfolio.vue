<template>
    <div id="portfolio">
      <h1>Projects.</h1>
      <h1 class="h1text">Projects.</h1>
  
      <div class="list">
        <div @click="movePage('/project1')" data-aos="fade-right" data-aos-duration="800" class="item">
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 매칭 웹사이트</p>
          <div class="lang">Vue</div>
          <img src="" alt="" class="p1">
        </div>

        <div @click="movePage('/portfolio1')" data-aos="fade-left" data-aos-duration="800" class="item">
        
        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      movePage(path) {
        this.$router.push(path);
      },
    },
  };
  </script>

<style scoped>
h1 {
  font-family: 'PyeongChangPeace-Bold';
  font-size: 5rem;
  color: #fff;
  text-align: center;
}
.h1text {
  font-family: 'PyeongChangPeace-Bold';
  color: transparent; /* 텍스트를 투명하게 설정 */
  font-size: 5rem;
  -webkit-text-stroke: 2px #833ab4; /* 웹킷 브라우저 지원 */
  -webkit-text-fill-color: transparent; /* 텍스트 내용을 투명하게 설정 */
  position: relative;
  top: -10rem;
  left: -0.5rem;
}
.list {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.item {
  width: 100rem;
  height: 20rem;
  border-radius: 5rem;
  background-color: #fff;
  margin-bottom: 10rem;
  border: #833ab4 solid 5px;
}
</style>
  