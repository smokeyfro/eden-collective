<template>
  <header class="px-6 py-4 lg:p-0 lg:my-10">
    <div class="w-full flex justify-between items-center">
      <g-link :to="{ name: 'home' }" class="home-link">
        <img
          src="../../static/logo.png"
          :alt="settings.site_name"
          class="logo w-auto h-16"
        />
      </g-link>
      <nav
        class="nav hidden md:flex items-center justify-end space-x-8 text-black text-xl"
      >
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/events">Events</g-link>
        <g-link class="nav__link" to="/news">News</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
        <g-link class="nav__link" to="/join">Join</g-link>
      </nav>
      <a
        class="bg-black text-white font-bold ml-5 rounded-md px-4 py-2"
        href="https://forum.edenhub.org"
        ><span class="hidden lg:inline">Community </span>Forum</a
      >
      <nav-button @openNavbarModal="openNavbarModal" v-on="$listeners" />
      <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
        <nav
          class="mt-20 p-8 flex flex-col items-center justify-start space-y-10 underline text-white text-2xl"
        >
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/projects">Projects</g-link>
          <g-link class="nav__link" to="/events">Events</g-link>
          <g-link class="nav__link" to="/news">News</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <g-link class="nav__link" to="/join">Join</g-link>
        </nav>
      </modal>
    </div>
  </header>
</template>

<script>
import NavButton from "~/components/NavButton.vue";
import Modal from "~/components/Modal.vue";

export default {
  components: {
    Modal,
    NavButton,
  },
  data() {
    return {
      showNavbarModal: false,
      settings: require("../../data/theme.json"),
    };
  },
  methods: {
    openNavbarModal() {
      this.showNavbarModal = true;
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

<style scoped></style>
