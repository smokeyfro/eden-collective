<template>
<header class="my-10">
    <div class="w-full flex justify-between items-center">
        <g-link :to="{ name: 'home' }" class="home-link">
            <img src="../../static/logo.svg" :alt="settings.site_name" class="logo" />
        </g-link>
        <nav class="nav flex items-center justify-end space-x-5">
            <g-link class="nav__link" to="/about">About</g-link>
            <g-link class="nav__link" to="/news">News</g-link>
            <g-link class="nav__link" to="/contact">Contact</g-link>
            <a class="nav__link" href="https://discuss.edencollective.org.za/">Discuss</a>
        </nav>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            logo: require("../../static/logo.svg"),
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>

</style>
