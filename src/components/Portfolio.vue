<template>
    <div id="portfolio">
      <h1>Projects.</h1>
      <h1 class="h1text">Projects.</h1>
  
      <div class="list">
        <div id="p1">
          <div data-aos="fade-up-right" class="item" data-aos-duration="1000">
          <div class="more" @click="movePage('/project1')" >MORE</div>
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 팀원 매칭 사이트</p>
          <div class="lang">Vue</div>
        </div>
        <img src="../assets/001.png" alt="" class="p1" data-aos="fade-up-left" data-aos-duration="1000">
        </div>

        <div id="p1">
          <img src="../assets/002.png" alt="" class="p1" data-aos="fade-up-left" data-aos-duration="1000">
          <div data-aos="fade-up-right" class="item" data-aos-duration="1000">
          <div class="more" @click="movePage('/project2')" >MORE</div>
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 팀원 매칭 사이트</p>
          <div class="lang">Vue</div>
        </div>
        </div>

        <div id="p1">
          <div data-aos="fade-up-right" class="item" data-aos-duration="1000">
          <div class="more" @click="movePage('/project3')" >MORE</div>
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 팀원 매칭 사이트</p>
          <div class="lang">Vue</div>
        </div>
        <img src="../assets/003.png" alt="" class="p1" data-aos="fade-up-left" data-aos-duration="1000">
        </div>

        <div id="p1">
          <img src="../assets/004.png" alt="" class="p1" data-aos="fade-up-left" data-aos-duration="1000">
          <div data-aos="fade-up-right" class="item" data-aos-duration="1000">
          <div class="more" @click="movePage('/project4')" >MORE</div>
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 팀원 매칭 사이트</p>
          <div class="lang">Vue</div>
        </div>
        </div>

        <div id="p1">
          <div data-aos="fade-up-right" class="item" data-aos-duration="1000">
          <div class="more" @click="movePage('/project5')" >MORE</div>
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 팀원 매칭 사이트</p>
          <div class="lang">Vue</div>
        </div>
        <img src="../assets/005.png" alt="" class="p1" data-aos="fade-up-left" data-aos-duration="1000">
        </div>

        <div id="p1">
          <img src="../assets/006.png" alt="" class="p1" data-aos="fade-up-left" data-aos-duration="1000">
          <div data-aos="fade-up-right" class="item" data-aos-duration="1000">
          <div class="more" @click="movePage('/project6')" >MORE</div>
          <p class="title">ToyTie</p>
          <p class="title2">토이프로젝트 팀원 매칭 사이트</p>
          <div class="lang">Vue</div>
        </div>
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
  gap: 10rem;
}
.item {
  width: 50rem;
  border-radius: 3rem;
  background-color: #fff;
  border: #833ab4 solid 5px;
  padding: 0 3rem;
  padding-bottom: 3rem;
  height: 15rem;
}
#p1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.p1 {
  width: 18rem;
  border-radius: 3rem;
  margin: 2rem;
}
.title {
  font-family: 'AppleSDGothicNeoB';
  font-size: 2rem;
}
.title2 {
  font-family: 'AppleSDGothicNeoUL';
  font-size: 1.5rem;
}
.lang {
  font-family: 'AppleSDGothicNeoB';
  font-size: 1.5rem;
  background-color: #fff;
  border: 3px solid #000;
  padding: 0.5rem;
  display: inline;
  border-radius: 3rem;
}
.more {
  font-family: 'AppleSDGothicNeoB';
  font-size: 1.5rem;
  background-color: #833ab4;
  display: inline-block;
  border-radius: 1rem;
  width: 10rem;
  text-align: center;
  padding: 0.3rem;
  color: #fff;
  position: relative;
  top: -1.5rem;
  left: 40rem;
  cursor: pointer;
  border: 3px solid #833ab4;
}
.more:hover {
  background-color: #fff;
  color: #833ab4;
  transition: 0.2s ease;
}
</style>
  