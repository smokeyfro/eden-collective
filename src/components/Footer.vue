<template>
  <footer class="p-4">
    <div class="text-base text-gray-600 lg:my-10">
      <span class="mt-3 block"
        >Site by
        <a
          href="https://smokeyfro.com"
          target="_blank"
          title="This site was created by Chris Rault, aka SmokeyFro"
          class="text-gray-900 font-bold"
          >SmokeyFro</a
        ></span
      >
    </div>
  </footer>
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

<style scoped></style>
