<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.container {
  @apply max-w-screen-xl mx-auto;
}

.title {
  @apply text-4xl font-bold text-gray-900 flex w-auto inline-block px-5 py-1 rounded-md;
}

.excerpt {
  @apply text-xl text-gray-800;
}

.active {
  @apply font-bold;
}
.hero {
  @apply overflow-hidden w-full my-0 mx-auto bg-cover bg-center relative;
  background-image: url(../../static/bg.jpg);
  background-repeat: no-repeat;
}

/* .hero:after {
  @apply h-full w-full block bg-gradient-to-bl from-green-500 via-blue-500 to-yellow-500 opacity-50 absolute top-0 left-0 z-0;
  content: "";
} */

.hero h1,
.hero h2 {
  @apply inline-block px-3 mx-auto relative z-10 text-white;
}
.hero .hero-title {
  @apply leading-tight;
  font-size: 2rem;
  font-weight: 700;
}
@media (min-width: 768px) {
  .hero .hero-title {
    @apply leading-tight;
    font-size: 2.6rem;
    font-weight: 700;
  }
}

.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}

.hero-subtitle {
  @apply inline-block mt-5;
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.68;
}
</style>
