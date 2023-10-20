<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header> 
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(6).png" alt="">
    </div>


    <div class="description">
      <h2>문제점 및 필요성</h2>
      <p>- 최근 비대면 수업이 증가하면서 교육지도는 감소하여 원활한 의사소통이 필요하다.<br/>
- 전공수업을 따라가려고 사교육에 의존하는 학생들이 증가하고 있다.<br/>
- 과제 수행을 도와주는 제도적 장치가 미비해 해결방안이 필요하다.</p>

<h2>프로젝트 목표</h2>
      <p>전공수업을 하는 학생들의 부담감을 줄이고 자유로운 질의응답이 가능한 커뮤니티 웹을 만들고자 한다.</p>
    
      <h2>기대효과</h2>
      <p>1. 대학생(튜티) 성적 향상.<br/>
2. 향후 진로에 도움이 되는 실무자 멘토링.<br/>
3. 그룹 스터디를 통한 공부 자극.<br/>
4. 실전에서 사용되는 전공 지식 습득. </p>
    </div>

    <div class="section3">
      <h1>동작 화면 캡쳐</h1>
      <swiper
    :slidesPerView="2"
    :centeredSlides="true"
    :spaceBetween="100"
    :grabCursor="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide><img src="../../assets/project6/p1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project6/p2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project6/p3.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project6/p4.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project6/p5.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project6/p6.png" alt=""></swiper-slide>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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