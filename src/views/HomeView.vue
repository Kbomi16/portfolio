<template>
  <div>
    <div id="top">
      <swiper class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide style="background-image:url(/top1.jpg)" class="slide">
      <div class=header>명지전문대학교 정보통신공학과 김보미</div>
    </swiper-slide>
    <swiper-slide style="background-image:url(/top2.jpg)" class="slide">
      <div class=header>명지전문대학교 정보통신공학과 김보미</div>    
    </swiper-slide>
    <swiper-slide style="background-image:url(/top3.jpg)" class="slide">
      <div class=header>명지전문대학교 정보통신공학과 김보미</div>
    </swiper-slide>
  </swiper>
    </div>
  </div>

  <div id="portfolio">
    <div class="header">Portfolio</div>

    <div class="list">
      <div @click="movePage('/portfolio1')" data-aos="fade-up" class="item" style="background-image:url(/top1.jpg)"></div>
      <div data-aos="fade-right" class="item" style="background-image:url(/top1.jpg)"></div>
      <div class="item" style="background-image:url(/top1.jpg)"></div>
      <div class="item" style="background-image:url(/top1.jpg)"></div>
      <div class="item" style="background-image:url(/top1.jpg)"></div>
    </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css';
import aos from 'aos'


//import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

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
      return {
        onSwiper,
        onSlideChange,
      };
    },
    mounted() {
      aos.init()
    },
    methods: {
      movePage(path) {
        this.$router.push(path)
      }
    },
});
</script>

<style lang="less">
#top {
  height: 100vh;
  
  .swiper {
    height: 100vh;

    .slide {
      background-position: center center;
      background-size: cover;
      text-align: center;
      .header {
        font-size: 60px;
        font-weight: 900;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        justify-content: center;
      }
    }
  }
}
#portfolio {
  .header {
    text-align: center;
    font-size: 40px;
  }
  width: 1000px;
  margin: 0 auto;
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    .item {
      height: 300px;
      background-position: center center;
      background-size: cover;
      border-radius: 20px;
      //1:1 비율
      aspect-ratio: 1/1;
    }
  }
}
</style>