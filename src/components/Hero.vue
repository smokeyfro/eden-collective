<template>
<div class="hero leading-sm">
    <h1 class="hero-title" v-html="settings.hero_title" />
    <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
</div>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style>
.hero {
    @apply rounded-md overflow-hidden text-center w-full my-0 mx-auto px-10 py-24 bg-cover relative;
    background-image: url(../../static/bg.jpg);
    background-repeat: no-repeat;
}

.hero:after {
    @apply h-full w-full block bg-gray-900 bg-opacity-75 absolute top-0 left-0 z-0;
    content: '';
}

.hero h1,
.hero h2 {
    @apply max-w-lg mx-auto relative z-10 text-white;
}

.hero .hero-title {
    @apply leading-tight;
    font-size: 3.2rem;
    font-weight: 700;
    padding: 0;
    margin: 0 auto 1rem auto;
}

.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}

.hero-subtitle {
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
</style>
