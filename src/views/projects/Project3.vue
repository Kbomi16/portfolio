<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header>
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(3).png" alt="">
    </div>

    <div class="section2">
      <button @click="goToGitHub"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt=""></button>
      <button @click="goToNotion"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png" alt=""></button>
    </div>

    <div class="section3">
      <h1>동작 화면 캡쳐/기능 설명</h1>
      <swiper
    :slidesPerView="2"
    :centeredSlides="true"
    :spaceBetween="30"
    :grabCursor="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide><img src="../../assets/project3/p1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p3.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p4.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p5.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p6.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p7.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p8.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p9.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p10.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p11.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project3/p12.png" alt=""></swiper-slide>

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
        window.open("https://github.com/Kbomi16/fumease")
      },
      goToNotion: function() {
        window.open("https://saber-lip-4c8.notion.site/Fumease-76d9a29fa5344fdca68c434ee19d2fc6?pvs=4")
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

.swiper {
  width: 100%;
  height: 30rem;
  padding-bottom: 5rem;
}

.swiper-slide {
  width: 50rem !important;
  display: flex;
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