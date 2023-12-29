<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-item">2024</div>
    <div class="header-item" @click="scrollToTop">PORTFOLIO</div>
    <div class="header-item">KIM BOMI</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    scrollToTop() {
      // 부모 컴포넌트로 이벤트 전달 (필요한 경우)
      this.$emit('scrollToTop');

      // 맨 위로 스크롤
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.header {
  font-family: 'AppleSDGothicNeoB';
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  font-size: 1.1rem;
  background-color: transparent;
  color: #000;
  z-index: 1000;
  transition: background-color 0.3s, color 0.3s;
}

.header.scrolled {
  background-color: #000;
  color: #fff;
}

.header-item {
  padding: 0 1rem;
  cursor: pointer;
  display: inline-block;
}
</style>
