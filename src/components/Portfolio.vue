<template>
    <div id="portfolio">
      <div class="p">Portfolio</div>
  
      <div class="list">
        <!-- 포트폴리오 아이템들을 나열 -->
        <div @click="movePage('/portfolio1')" data-aos="fade-up" class="item" style="background-image:url(/portfolio/top1.jpg)"></div>
        <!-- 다른 포트폴리오 아이템들도 추가할 수 있습니다. -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      movePage(path) {
        this.$router.push(path);
      },
    },
  };

  
  </script>
  
  <style scoped lang="less">
  /* 포트폴리오 컴포넌트에만 적용되는 스타일 */
  #portfolio {
    .p {
      text-align: center;
      font-size: 40px;
    }
    .list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      .item {
        height: 300px;
        background-position: center center;
        background-size: cover;
        border-radius: 20px;
        aspect-ratio: 1/1;
      }
    }
  }
  </style>
  