<template>
  <div class="container">
      <div class="ment">코드로 아이디어를 현실로, <br/>직관적이고 미적인 웹을 만드는 열정을 가진</div>
      <p class="text">{{ displayText }}</p>   
    
    <div class="square1">
    <img src="../assets/bomi.png" alt="">
  </div>
    <div class="square2"></div>
    <a href=""><span></span>Scroll</a>
    <div class="nav">
      <div id="home" @click="scrollToComponent('container')">TOP</div>
    </div>
    
  </div>
  <div class="line1" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="800"></div>
  <div class="line2" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="900"></div>
  <div class="line3" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000"></div>
  <div class="line4" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1100"></div>
  <div class="line5" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1200"></div>
  <div class="line6" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1300"></div>

  
  <div class="aboutme" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <Aboutme/>
  </div>
  
  <div class="portfolio" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <Portfolio />
  </div>
  
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
    },

    scrollToComponent(componentId) {
      if (componentId === 'container') {
        // "Home"을 클릭하면 맨 위로 스크롤
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
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

.container {
  padding: 15rem;
  background-image: linear-gradient(90deg, #833ab4, #f6595961, #f58686);
  background-size: cover;
  height: 100vh;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
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
  top: -18rem;
  left: 50rem;
  z-index: 1;
  border-radius: 1rem;
  box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.3);
}
.square2 {
  width: 28rem;
  height: 26.2rem;
  background-color: #833ab4;
  box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 10rem;
  left: 64rem;
  border-radius: 1rem;
}

.aboutme {
  position: relative;
  top: -190rem;
  background-image: linear-gradient(180deg, #ecc6c6, #fff);
  height: 60rem;
  text-align: center;
}
.line1 {
  position: relative;
  top: -40rem;
  background-color: #833ab4;
  height: 30rem;
  text-align: center;
}
.line2 {
  position: relative;
  top: -75rem;
  background-color: #8953ac;
  height: 30rem;
  text-align: center;
  padding-top: 2rem; 
}
.line3 {
  position: relative;
  top: -100rem;
  background-color: #9374a7;
  height: 30rem;
  text-align: center;
}
.line4 {
  position: relative;
  top: -125rem;
  background-color: #f58686;
  height: 30rem;
  text-align: center;
}
.line5 {
  position: relative;
  top: -150rem;
  background-color: #dda0a0;
  height: 30rem;
  text-align: center;
}
.line6 {
  position: relative;
  top: -175rem;
  background-color: #ecc6c6;
  height: 30rem;
  text-align: center;
}
.portfolio {
  background-image: linear-gradient(180deg, #fff, #833ab4);
  position: relative;
  top: -190rem;
  padding-top: 5rem;
}
.nav {
  bottom: 1rem;
  right: 1rem;
  position: fixed;
  z-index: 100;
}
#home {
  font-family: 'PyeongChangPeace-Light';
  background-color: #0000005a;
  color: #fff;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
#home:hover{
  background-color: #000000ac;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
/* 스크롤 표시 */
a {
  padding-top: 60px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  padding-left: 42.5rem;
}
a span {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #fff;
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
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  box-sizing: border-box;
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

</style>
