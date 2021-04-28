<template>
  <div class="hero leading-sm">
    <div class="w-2/3 bg-black bg-opacity-75 p-10 rounded-md">
      <h1 class="hero-title" v-html="settings.hero_title" />
      <h2 class="hero-subtitle rounded-md" v-html="settings.hero_subtitle" />
      <p>
        <g-link
          to="/about"
          class="text-white font-bold text-xl ml-3 mt-4 px-5 border border-gray-800 rounded-md inline-block p-2 bg-black"
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
