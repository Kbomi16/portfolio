<template>
  <div class="container">
    <Header></Header>

      <div class="text1">
        <div class="ment">코드로 아이디어를 현실로, <br/>직관적이고 미적인 웹을 만드는 열정을 가진</div>
      <p class="text">{{ displayText }}</p>   
      <div class="ellipse"></div>
      </div>

      <div class="text2">
        <h1>2023 <br/> Portfolio</h1>
        <h1 class="h1text">2023 <br/> Portfolio</h1>
      </div>

      <div class="els">
        <img src="../assets/el1.png" alt="" class="el1">
        <img src="../assets/el2.png" alt="" class="el2">
        <img src="../assets/el3.png" alt="" class="el3">
      </div>
    
    <a href=""><span></span></a>
    <p class="scroll">SCROLL</p>
  </div>
 
    <Aboutme/>
  <div class="portfolio">
    <Portfolio />
  </div>

<Footer></Footer>
</template>

<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import aos from 'aos';

import Portfolio from '@/components/Portfolio.vue';
import Aboutme from '@/components/Aboutme.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
      // eslint-disable-next-line vue/no-unused-components
      Swiper,
      // eslint-disable-next-line vue/no-unused-components
      SwiperSlide,
      Portfolio,
      Aboutme,
      Header,
      Footer
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
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    aos.init();
    this.writeText();
  },
});
</script>

<style>
@import 'normalize.css';
@font-face {
  font-family: 'AppleSDGothicNeoUL';
  src: url('../assets/fonts/AppleSDGothicNeoUL.ttf');
}
@font-face {
  font-family: 'AppleSDGothicNeoB';
  src: url('../assets/fonts/AppleSDGothicNeoB.ttf');
}
@font-face {
  font-family: 'PyeongChangPeace-Light';
  src: url('../assets/fonts/PyeongChangPeace-Light.ttf');
}
@font-face {
  font-family: 'PyeongChangPeace-Bold';
  src: url('../assets/fonts/PyeongChangPeace-Bold.ttf');
}
@font-face {
  font-family: 'neurimboGothicRegular';
  src: url('../assets/fonts/neurimboGothicRegular.otf');
}
body {
  width: 100vw;
  overflow-x: hidden
}
.container {
  background-image: url('https://i.pinimg.com/736x/79/7b/57/797b571b4f1631fd6e28428cb37dd1d9.jpg');
  height: 100vh;
  background-position: center;
  
}
.text1 {
  padding: 20rem;
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

.ellipse {
  position: absolute;
  top: 15rem;
  left: 0;
  width: 100%;
  height: 28vw; /* 조절 가능한 타원의 높이 */
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #000; /* 검정 테두리 */
  transform: rotate(10deg);
}
.text2 {
  font-family: 'neurimboGothicRegular';
  position: absolute;
  left: 75rem;
  top: -50rem;
  color: #fff;
  position: relative;
  text-align: left;
  z-index: 2; /* text2를 text1과 원 위에 위치시키기 위한 z-index 값 설정 */
}
h1 {
  font-size: 10rem;
  color: #fff;
}
.h1text {
  color: transparent; /* 텍스트를 투명하게 설정 */
  font-size: 10rem;
  -webkit-text-stroke: 1px #000; /* 웹킷 브라우저 지원 */
  -webkit-text-fill-color: transparent; /* 텍스트 내용을 투명하게 설정 */
  position: relative;
  top: -30rem;
  left: -0.5rem;
}


/* 스크롤 표시 */
a {
  font-family: 'AppleSDGothicNeoB';
  color: #000;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  padding-left: 58rem;
}
a span {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #000;
  border-radius: 50px;
  box-sizing: border-box;
}
a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #000;
  border-radius: 100%;
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  box-sizing: border-box;
}
.scroll {
  position: absolute;
  top: 53rem;
  left: 57.5rem;
  font-size: 1.2rem;
  text-align: center;
  color: #000;
  font-family: 'AppleSDGothicNeoB';
}
@-webkit-keyframes sdb {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.els {
  position: absolute;
  top: 0;
  left: 0;
}
.el1 {
  position: relative;
  top: 5rem;
  left: -5rem;
}
.el2 {
  position: relative;
  top: 30rem;
  left: 55rem;
}
.el3 {
  position: relative;
  top: 30rem;
  left: -40rem;
}
.portfolio {
  background-color: #000;
  height: 100%;
}
</style>
