<template>
  <div class="container">
      <div class="ment">코드로 아이디어를 현실로, <br/>직관적이고 미적인 웹을 만드는 열정을 가진</div>
      <p class="text">{{ displayText }}</p>   
    
    <div class="square1">
    <img src="../assets/bomi.png" alt="">
  </div>
    <div class="square2"></div>
    
  </div>
  <div class="line1" data-aos="fade-up" data-aos-anchor-placement="top-center"></div>
  <div class="line2" data-aos="fade-up" data-aos-anchor-placement="top-center"></div>
  <div class="line3" data-aos="fade-up" data-aos-anchor-placement="top-center"></div>
  <div class="aboutme" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <Aboutme/>
  </div>

  <!-- 포트폴리오  -->
  <Portfolio />
</template>

<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import aos from 'aos';
import Portfolio from '@/components/Portfolio.vue';
import Aboutme from '@/components/Aboutme.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
      Swiper,
      SwiperSlide,
      Portfolio,
      Aboutme
  },
  data() {
    return {
      text: "프론트엔드 개발자 김보미입니다.",
      idx: 1,
      speed: 300, // 텍스트 업데이트 속도 (밀리초 단위)
      displayText: ""
    };
  },
  methods: {
    writeText() {
      this.displayText = this.text.slice(0, this.idx);
      this.idx++;

      if (this.idx > this.text.length) {
        this.idx = 1;
      }

      setTimeout(this.writeText, this.speed);
    }
  },
  mounted() {
    aos.init();
    this.writeText();
  },
});
</script>

<style>
@font-face {
  font-family: 'AppleSDGothicNeoUL';
  src: url('../assets/fonts/AppleSDGothicNeoUL.ttf');
}
@font-face {
  font-family: 'PyeongChangPeace-Light';
  src: url('../assets/fonts/PyeongChangPeace-Light.ttf');
}
@font-face {
  font-family: 'PyeongChangPeace-Bold';
  src: url('../assets/fonts/PyeongChangPeace-Bold.ttf');
}

.container {
  padding: 15rem;
  background-color: #656A56;
  background-size: cover;
  height: 100vh;
  flex-direction: column;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  text-align: left;
}
.ment {
  font-family: 'PyeongChangPeace-Light';
  color: #fff;
  font-size: 2rem;
  text-shadow: 5px 3px 1px #000;
}
.text {
  font-family: 'PyeongChangPeace-Bold';
  color: #fff;
  font-size: 3rem;
  text-shadow: 5px 3px 5px #000;
}
.square1 {
  width: 28rem;
  height: 26.2rem;
  background-color: #EFEFEF;
  position: relative;
  top: -25rem;
  left: 50rem;
  z-index: 1;
}
.square2 {
  width: 28rem;
  height: 26.2rem;
  background-color: #DDDEDB;
  position: absolute;
  top: 10rem;
  left: 60rem;
}

.aboutme {
  position: relative;
  top: -40rem;
  background-color: #DDDEDB;
  height: 50rem;
  text-align: center;
  padding-top: 2rem;
}
.line1 {
  position: relative;
  top: -40rem;
  background-color: #868a7a;
  height: 1rem;
  text-align: center;
  padding-top: 2rem;
}
.line2 {
  position: relative;
  top: -40rem;
  background-color: #abada3;
  height: 3rem;
  text-align: center;
  padding-top: 2rem;
}
.line3 {
  position: relative;
  top: -40rem;
  background-color: #bdbdbd;
  height: 5rem;
  text-align: center;
  padding-top: 2rem;
}
</style>
