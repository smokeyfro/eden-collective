<template>
  <Transition name="fade">
    <div
      v-if="showModal"
      class="fixed z-50 inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
      @click.self="close"
    >
      <div class="absolute right-0 w-full sm:w-96 h-full bg-black bg-opacity-90">
        <button
          aria-label="close"
          class="absolute top-0 right-0 mr-5 mt-5 z-50 text-4xl rounded-ml-md text-white h-12 w-12 focus:outline-none"
          @click.prevent="close"
        >
          &times;
        </button>
        <div class="h-full w-full">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showModal: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
