<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header> 
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(4).png" alt="">
    </div>

    <div class="section2">
      <button @click="goToGitHub"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt=""></button>
    </div>

    <div class="description">
      <h2>문제점 및 필요성</h2>
      <p>- 메뉴의 선택지가 너무 많아서 메뉴 선택 시 스트레스를 제일 많이 받는다고 한다.<br/>
- 생활비 중 가장 부담이 되는 항목 1위가 식비다.</p>

<h2>프로젝트 목표</h2>
      <p>사용자의 취향을 파악하여 메뉴 선정의 어려움을 보다 쉽게 해결하여 스트레스를 감소시키고, 주변 음식점 선정 시간을 단축시킬 수 있다. <br/>또한 메뉴 추천 시 한도금액을 설정하므로 과소비를 방지하여 식비를 감소시킬 수 있는 앱을 만들고자 한다.</p>
    
      <h2>기대효과</h2>
      <p>1. 메뉴 고민 스트레스 해결 – 선택지를 통해 메뉴를 보다 빠르게 선택하여 메뉴 고민 스트레스를 해결한다.<br/>
2. 주변 음식점 결정 시간 단축 – 위치 기반 서비스를 이용해 주변 음식점을 추천함으로써 결정 시간을 단축한다.<br/>
3. 금액 제한 시 식비 부담 감소 – 주문 금액 필터를 통해 금액이 제한되어 식비 부담을 감소할 수 있다.<br/>
4. 환경보호 동참 – 제한된 금액으로 음식을 주문할 경우 음식을 남기는 일이 적으므로 음식물쓰레기 처리과정에서 발생하는 환경오염 문제를 막을 수 있다.<br/>
5. 지역소식 안내 효과 – 우리 동네 주변의 음식점을 추천해주면 지역의 소식을 안내함으로 지역 경쟁의 순환을 기대할 수 있다. </p>
    </div>

    <div class="section3">
      <h1>동작 화면 캡쳐</h1>
      <swiper
    :slidesPerView="4"
    :centeredSlides="true"
    :spaceBetween="30"
    :grabCursor="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide><img src="../../assets/project4/p1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project4/p2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project4/p3.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project4/p4.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project4/p5.png" alt=""></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
  </swiper>

    </div>

  </div>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  components: {
      Header,
      Footer,
      Swiper,
      SwiperSlide,
  },
  setup() {
      return {
        modules: [Pagination],
      };
    },
  methods: {
      movePage(path) {
        this.$router.push(path);
      },
      goToGitHub: function() {
        window.open("https://github.com/Jserim420/today_menu")
      },
    },
}
</script>

<style scoped>
.container {
  padding-top: 3rem;
  height: 100%;
}

.section1 {
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section2 {
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.section2 button {
  position: relative;
  cursor: pointer;
  margin-right: 0.5rem;
  border-radius: 10px;
}
.section2 img {
  width: 3rem;
  height: 3rem;
}

.section3 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

h1 {
  font-family: 'AppleSDGothicNeoB';
  color: #000;
  font-size: 2rem;
  text-align: center;
  padding: 3rem;
}
.description {
  color: #000;
  padding: 5rem 20rem;
}
h2 {
  font-family: 'AppleSDGothicNeoB';
}
p {
  font-family: 'AppleSDGothicNeoUL';
  font-size: 20px;
}


.swiper {
  width: 100%;
  height: 30rem;
  padding-bottom: 5rem;
}

.swiper-slide {
  font-family: 'AppleSDGothicNeoUL';
  width: 60rem !important;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
::v-deep .swiper-pagination-bullet {
  background: #000 !important;
}

::v-deep .swiper-pagination-bullet-active {
  background: #000 !important;
}

</style>