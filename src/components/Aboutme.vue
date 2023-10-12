<template>
  <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">About Me.</h1>
  <h1 class="h1text" data-aos="fade-up" data-aos-anchor-placement="top-center">About Me.</h1>

  <div class="info" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide data-text="HTML+CSS">HTML+CSS</swiper-slide>
    <swiper-slide>JavaScript</swiper-slide>
    <swiper-slide>Vue</swiper-slide>
    <swiper-slide>React</swiper-slide>
    <swiper-slide>GitHub</swiper-slide>
    <swiper-slide>Slack</swiper-slide>
    <swiper-slide>Notion</swiper-slide>
  </swiper>
  <div class="profile">
    <div class="circle">
      <img class="img1" src="../assets/bomi2.png" alt="">
    </div>
    <div class="infos">
      <button>Resume</button>
      <button @click="goToGitHub">GitHub</button>
      <button @click="goToVelog">Velog</button>
      <button @click="goToNotion">Notion</button>
    </div>
  </div>
  <div class="els2">
    <img src="../assets/el5.png" alt="" class="el5" data-aos="fade-right" data-aos-anchor-placement="top-center">
    <img src="../assets/el6.png" alt="" class="el6" data-aos="fade-left" data-aos-anchor-placement="top-center">
    <img src="../assets/el7.png" alt="" class="el7">
    <img src="../assets/el2.png" alt="" class="el2">
    <img src="../assets/el8.png" alt="" class="el8" data-aos="fade-left" data-aos-anchor-placement="top-center">
  </div> 
  </div> 

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
    methods: {
      goToGitHub: function() {
        window.open("https://github.com/Kbomi16")
      },
      goToVelog: function() {
        window.open("https://velog.io/@bori_note")
      },
      goToNotion: function() {
        window.open("https://www.notion.so/KIM-BOMI-e095aa14ed26443ab0ddaf7e6235e3dd")
      }
    }
  };
</script>

<style scoped>
h1 {
  font-family: 'PyeongChangPeace-Bold';
  font-size: 5rem;
  color: #D3CAC1;
  text-align: center;
}
.h1text {
  font-family: 'PyeongChangPeace-Bold';
  color: transparent; /* 텍스트를 투명하게 설정 */
  font-size: 5rem;
  -webkit-text-stroke: 2px #000; /* 웹킷 브라우저 지원 */
  -webkit-text-fill-color: transparent; /* 텍스트 내용을 투명하게 설정 */
  position: relative;
  top: -9rem;
  left: -0.5rem;
}
.info {
  background-color: #fff;
  border: solid #000 7px;
  width: 75rem;
  height: 40rem;
  border-radius: 30px;
  margin: 0 20rem;
  position: relative;
  top: -10rem;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.1);
}

/* swiper */
.swiper {
  width: 100%;
  height: 10rem;
}

.swiper-slide {
  font-family: 'PyeongChangPeace-Bold';
  text-align: center;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-clip: text; /* 텍스트에만 배경 적용 */
  -webkit-background-clip: text; /* 웹킷 브라우저 지원 */
  color: transparent; /* 텍스트 색상을 투명하게 설정 */
  background-image: linear-gradient(90deg, #000, #fff); /* 그라데이션 배경 생성 */
  position: relative;
  z-index: 1;
}
.profile {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.circle {
  width: 20rem;
  height: 20rem;
  background-color: #D3CAC1;
  border-radius: 50%;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.1);  
}
.img1 {
  width: 20rem;
}
.infos {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

button {
  font-family: 'PyeongChangPeace-Light';
  color: #000;
  font-size: 2rem;
  background-color: #D3CAC1;
  border: none;
  border-radius: 2rem;
  font-size: 1.5rem;
  margin: 1rem 5rem;
  width: 20rem;
  padding: 0.5rem;
  border: #D3CAC1 2px solid;
  font-weight: 800;
}
button:hover {
  background-color: #D3CAC1;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.els2 {
  position: absolute;
}
.el5 {
  position: relative;
  top: -30rem;
  left: -23rem;
  z-index: -1000;
}
.el6 {
  position: relative;
  top: -30rem;
  left: 50rem;
  z-index: -1000;
}
.el8 {
  position: relative;
  top: -90rem;
  left: 70rem;
  z-index: 1000;
}
.el7 {
  position: relative;
  width: 35rem;
  top: -63rem;
  left: 5rem;
  z-index: 10;
}
.el2 {
  position: relative;
  top: -48rem;
  left: -42rem;
  z-index: 10;
  transform: scaleX(-1);
}
</style>