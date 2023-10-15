<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header>
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(2).png" alt="">
    </div>

    <div class="section2">
      <button @click="goToGitHub"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt=""></button>
      <button @click="goToNotion"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png" alt=""></button>
    </div>

    <div class="section3">
      <h1>동작 화면 캡쳐/기능 설명</h1>
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
  <swiper-slide><img src="https://file.notion.so/f/s/0285efc7-f8cd-4bf2-a7af-51da816fc12f/chrome-capture-2023-7-21.gif?id=b901f1f1-b76d-4e7a-9058-c5943031c093&table=block&spaceId=6bf245e8-dd07-48b2-b775-05b6b4aa4af9&expirationTimestamp=1697436000000&signature=0zSMTFtASqtJkG-hXrZ_ajx9AfTY5kJXGQk1nhvNQHU&downloadName=chrome-capture-2023-7-21.gif" alt="">
    - 수량을 정하여 +담기를 누르면 장바구니에 담긴다. <br/>
- 장바구니에 수량이 추가될때마다 버튼 이펙트가 발생한다.</swiper-slide>
    <swiper-slide><img src="https://file.notion.so/f/s/7df09c80-8f73-471e-8026-2686ab6f5ef3/chrome-capture-2023-7-21_(1).gif?id=082e584e-3b2b-445f-8fab-9fe0e678e6f0&table=block&spaceId=6bf245e8-dd07-48b2-b775-05b6b4aa4af9&expirationTimestamp=1697436000000&signature=yYgvnot88YDBMjZWYos7t4vcL6wQ5bBOQumejAZOMBU&downloadName=chrome-capture-2023-7-21+%281%29.gif" alt="">
    - 장바구니 모달 안에서 -. + 버튼으로 수량 조절이 가능하다.
    </swiper-slide>
    <swiper-slide><img src="https://file.notion.so/f/s/c7527664-cfd2-4ed5-acfb-1c883a334001/Untitled.png?id=dd2b5e7b-57f9-4a82-92f2-dfe4ac285eb2&table=block&spaceId=6bf245e8-dd07-48b2-b775-05b6b4aa4af9&expirationTimestamp=1697443200000&signature=AtguzqW8XQ4xrXfx0sG6qQVFifYzX5c9sEfq2SToMFw&downloadName=Untitled.png" alt="">
    - 파이어베이스에 연동하여 음식 목록 가져온다.
    </swiper-slide>
    <swiper-slide><img src="https://file.notion.so/f/s/53838a6f-f175-4de0-a74a-4091e1f10cad/chrome-capture-2023-7-27.gif?id=d5a6b842-4728-48af-b517-e372b6d98d0c&table=block&spaceId=6bf245e8-dd07-48b2-b775-05b6b4aa4af9&expirationTimestamp=1697443200000&signature=5uAiq9XCjjS4jeKAeTb67Qx1kRMih1KpIvUDeb6aZTg&downloadName=chrome-capture-2023-7-27.gif" alt="">
      - 주문하기 버튼을 누르면 아래 결제 양식 창이 뜬다.<br/>
- 결제 양식 창에 있는 취소버튼을 누르면 장바구니 모달이 닫힌다.<br/>
- 입력 창에 아무것도 입력 안 할 시 빨갛게 변하면서 정확한 입력을 하라는 오류 문구가 밑에 뜬다.
    </swiper-slide>
    <swiper-slide><img src="https://file.notion.so/f/s/6b759e8c-5252-42da-8cb4-fd47c5619007/chrome-capture-2023-7-29_(1).gif?id=c8b69aa7-61b0-4737-883b-636209852b1f&table=block&spaceId=6bf245e8-dd07-48b2-b775-05b6b4aa4af9&expirationTimestamp=1697443200000&signature=597PjOw0IK37fOl5ZqekUO5TRgAYjyzFiWCkaA-ybvw&downloadName=chrome-capture-2023-7-29+%281%29.gif" alt="">
      - 주문 정보와 장바구니 아이템이 서버에 전송되며, 서버는 이 정보를 기반으로 주문을 처리하고 저장한다.<br/>
- 장바구니 모달에서 주문하기를 눌렀을 때 문구가 나온다.<br/>
- 주문 후, 장바구니기 비워진다.<br/>
- 장바구니 주문 후, 닫기 버튼을 누르면 장바구니 모달이 닫힌다.
    </swiper-slide>
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
        window.open("https://github.com/Kbomi16/foodorderapp")
      },
      goToNotion: function() {
        window.open("https://saber-lip-4c8.notion.site/FoododerApp-2330086212bc444ea3c2791a6ab296ae?pvs=4")
      }
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
  align-items: left;
  justify-content: left;
  padding-left: 20rem;
  padding-bottom: 3rem;
}
.section2 button {
  position: relative;
  top: -10rem;
  left: 8rem;
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
  font-family: 'AppleSDGothicNeoUL';
  width: 50rem !important;
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


</style>