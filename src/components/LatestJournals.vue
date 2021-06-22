<template>
  <div class="py-4 lg:p-0">
    <h2 class="title lg:mt-20">Recent News</h2>
    <div class="mt-2 latest-journals">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 w-full">
        <div class="p-5" v-for="item in journals" :key="item.node.id">
          <div>
            <h3 class="text-3xl leading-9 font-black">
              {{ item.node.title }}
            </h3>
            <div class="text-sm mt-2 text-gray-700">
              <span>{{ item.node.date }}</span> &middot;
              <span>{{ item.node.timeToRead }} min read</span>
            </div>
            <p class="mt-3 text-lg text-gray-800">
              {{ item.node.excerpt }}
            </p>
          </div>
          <g-link :to="item.node.path" class="block mt-5 text-green-800 underline">
            Continue Reading &rightarrow;
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    journals: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.meta {
  @apply text-gray-600;
}

.excerpt {
  @apply mr-3;
}
</style>
