<template>
  <button
    title="Open Navigation"
    md
    role="button"
    v-if="showNavigation === false"
    @click.prevent="openNavbarModal()"
    aria-label="Open Navigation"
    class="block lg:hidden bg-black text-white font-bold ml-5 rounded-md px-4 py-2"
  >
    <svg
      class="w-6 h-6"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5h18M3 12h18M3 19h18"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script>
import ModalClose from "~/components/ModalClose.vue";

export default {
  props: {
    showNavigation: {
      type: Boolean,
    },
  },
  components: {
    ModalClose,
  },
  methods: {
    openNavbarModal() {
      this.$emit("openNavbarModal");
    },
    closeNavbarModal() {
      this.showNavbarModal = false;
    },
  },
  watch: {
    $route(to, from) {
      this.closeNavbarModal();
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
