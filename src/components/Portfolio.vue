<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
    <div id="portfolio">
      <h1>Projects.</h1>
      <h1 class="h1text">Projects.</h1>
  
      <swiper
    ref="swiperRef"
    :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="40"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide @click="movePage('/project1')"><img src="../assets/001.png" alt="Project 1" /></swiper-slide>
    <swiper-slide @click="movePage('/project2')"><img src="../assets/002.png" alt="Project 2" /></swiper-slide>
    <swiper-slide @click="movePage('/project4')"><img src="../assets/004.png" alt="Project 4" /></swiper-slide>
    <swiper-slide @click="movePage('/project5')"><img src="../assets/005.png" alt="Project 5" /></swiper-slide>
    <swiper-slide @click="movePage('/project6')"><img src="../assets/006.png" alt="Project 6" /></swiper-slide>
  </swiper>

    </div>
</template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
    methods: {
      movePage(path) {
        this.$router.push(path);
      },
    },
  };
  </script>

<style scoped>
#portfolio {
  height: 100vh;
}
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
.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
}

.swiper-slide {
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 20rem !important;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}
</style>
  