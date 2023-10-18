<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header>
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(7).png" alt="">
    </div>

    <div class="section2">
      <button @click="goToGitHub"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt=""></button>
    </div>

    <div class="section3">
      <h1>동작 화면 캡쳐</h1>
      <p>- gsap, swiper, scrollmagic</p>
      
    <img src="../../assets/project7/p1.png" alt="" class="img1">

    </div>

  </div>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  components: {
      Header,
      Footer,
  },
  methods: {
      movePage(path) {
        this.$router.push(path);
      },
      goToGitHub: function() {
        window.open("https://github.com/Kbomi16/Starbucks_Clone")
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
  align-items: left;
  justify-content: left;
  padding-left: 20rem;
  padding-bottom: 3rem;
}
.section2 button {
  position: relative;
  top: -10rem;
  left: 70rem;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
}

h1 {
  font-family: 'AppleSDGothicNeoB';
  color: #000;
  font-size: 2rem;
  text-align: center;
  padding: 3rem;
}
.img1 {
  width: 80rem;
}
p {
  font-family: 'AppleSDGothicNeoUL';
  color: #000;
}


</style>