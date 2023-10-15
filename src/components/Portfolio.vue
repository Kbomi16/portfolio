<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
    <div id="portfolio">
      <h1>Projects.</h1>
      <h1 class="h1text">Projects.</h1>

      <p>슬라이드를 클릭하면 더 자세한 내용을 볼 수 있습니다.</p>
  
      <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    :mousewheel="{ invert: false }"
  >
    <swiper-slide @click="movePage('/project1')"><img src="../assets/project(1).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project2')"><img src="../assets/project(2).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project3')"><img src="../assets/project(3).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project4')"><img src="../assets/project(4).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project5')"><img src="../assets/project(5).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project6')"><img src="../assets/project(6).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project7')"><img src="../assets/project(7).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project8')"><img src="../assets/project(8).png" alt=""></swiper-slide>
    <swiper-slide @click="movePage('/project9')"><img src="../assets/project(9).png" alt=""></swiper-slide>
  </swiper>

    </div>
</template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation, Mousewheel } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Mousewheel],
      };
    },
    methods: {
      movePage(path) {
        this.$router.push(path);
        window.scrollTo(0, 0);
      },
    },
  };
  </script>

<style scoped>
#portfolio {
  height: 100%;
  padding: 3rem;
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
  -webkit-text-stroke: 2px #D3CAC1; /* 웹킷 브라우저 지원 */
  -webkit-text-fill-color: transparent; /* 텍스트 내용을 투명하게 설정 */
  position: relative;
  top: -9.1rem;
  left: -0.6rem;
}
p {
  font-family: 'AppleSDGothicNeoUL';
  color: #fff;
  font-size: 15px;
  text-align: center;
  position: relative;
  top: -10rem;
}

.swiper {
  width: 80%;
  height: 100%;
  border: 1px solid #fff;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet {
  color: #fff !important;
}
.swiper-pagination-bullet-active {
  color: #000 !important;
}

</style>
  