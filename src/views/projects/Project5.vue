<!-- eslint-disable -->
<template>
  <Header @click="movePage('/')"></Header>
  <div class="container">

    <div class="section1">
      <img src="../../assets/project(5).png" alt="">
    </div>

    <div class="section2">
      <button @click="goToGitHub"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt=""></button>
      <button @click="goToNotion"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png" alt=""></button>
    </div>

    <div class="description">
      <h2>프로젝트 목표</h2>
      <p>고민 상담을 위한 챗봇은 사용자의 고민을 이해하고, 적절한 조언이나 해결책을 제시하는 역할을 수행한다. 사용자는 챗봇을 통해 민감한 주제를 편하게 이야기하고, 다양한 관점을 들을 수 있다. 챗봇은 상대적으로 중립적이고 객관적인 시각을 제공하여 사용자의 고민 해결에 도움을 줄 수 있다.</p>
    </div>

    <div class="section3">
      <h1>동작 화면 캡쳐</h1>
      <video controls autoplay>
      <source :src="videoSource" type="video/mp4">
    </video>

    </div>

  </div>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'


export default {
  data() {
    return {
      videoSource: require('@/assets/project5/MemoryHealing.mp4')
    };
  },
  components: {
      Header,
      Footer,
  },
  methods: {
      movePage(path) {
        this.$router.push(path);
        
      },
      goToGitHub: function() {
        window.open("https://github.com/Kbomi16/MemoryHealing")
      },
      goToNotion: function() {
        window.open("https://www.notion.so/842e8132a57642fc8efe9d524ef563a7")
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
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
video {
  width: 80rem;
}
</style>