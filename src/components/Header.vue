<template>
  <header class="p-6 lg:p-0 lg:my-10">
    <div class="w-full flex justify-between items-center">
      <g-link :to="{ name: 'home' }" class="home-link">
        <img
          src="../../static/edenhub-logo.png"
          :alt="settings.site_name"
          class="logo w-28 lg:w-30"
        />
      </g-link>
      <nav
        class="nav hidden md:flex items-center justify-end space-x-5 underline text-black text-xl"
      >
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/events">Events</g-link>
        <g-link class="nav__link" to="/news">News</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
        <a class="nav__link" href="https://community.edencollective.org.za/">Community</a>
      </nav>
      <g-link
        class="bg-green-700 text-white font-bold ml-5 rounded-md px-4 py-2"
        to="/join"
        >Join<span class="hidden lg:inline"> Now</span></g-link
      >
      <nav-button @openNavbarModal="openNavbarModal" v-on="$listeners" />
      <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
        <nav
          class="p-8 flex flex-col items-start justify-start space-y-5 underline text-white text-xl"
        >
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/events">Events</g-link>
          <g-link class="nav__link" to="/news">News</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <a class="nav__link" href="https://community.edencollective.org.za/"
            >Community</a
          >
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
      logo: require("../../static/logo.svg"),
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
