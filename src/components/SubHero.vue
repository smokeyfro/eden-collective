<template>
  <div class="hero lg:p-20 leading-sm">
    <h1 class="hero-title" v-html="title" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Add a title",
    },
  },
};
</script>
