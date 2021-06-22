<template>
  <div class="hero lg:p-20 leading-sm">
    <div class="w-full lg:w-2/3 bg-black bg-opacity-75 p-6 lg:p-10 rounded-md">
      <h1 class="hero-title" v-html="settings.hero_title" />
      <h2 class="hero-subtitle rounded-md" v-html="settings.hero_subtitle" />
      <p>
        <g-link
          to="/about"
          class="text-black font-bold text-xl ml-3 mt-5 mb-5 px-5 rounded-md inline-block p-2 bg-white"
          >Learn More</g-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>
