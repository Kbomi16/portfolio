<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header>
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(8).png" alt="">
    </div>


    <div class="section3">
      <h1>화면 캡쳐</h1>
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
  <swiper-slide><img src="../../assets/project8/p1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p2.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p3.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p4.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p5.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p6.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p7.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p8.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p9.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p10.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p11.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p12.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p13.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/project8/p14.png" alt=""></swiper-slide>
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

.swiper {
  width: 100%;
  height: 40rem;
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