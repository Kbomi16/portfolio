<template>
  <h1>About Me.</h1>

  <div class="info">

    <swiper
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{
        delay: 2000, // 2초마다 슬라이드 전환
        disableOnInteraction: false, // 사용자와 상호작용 후에도 계속 autoplay
      }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>


  </div>
  

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';

export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

      // Swiper를 ref로 만들어 컨트롤 가능하도록 합니다.
      const swiper = ref(null);

      return {
        onSwiper,
        onSlideChange,
        swiper
      };
    },
}

</script>

<style>
h1 {
  font-family: 'PyeongChangPeace-Bold';
  font-size: 5rem;
  text-shadow: 5px 3px 1px #656A56;
}
.info {
  border: solid #656A56 8px;
  height: 50rem;
  border-radius: 30px;
  margin: 0 10rem;
}
.swiper {
  width: 100%;
  height: 10rem;
}
</style>