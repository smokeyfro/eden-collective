<template>
<div class="hero">
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
    text-align: center;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
    background: url(../../static/bg.jpg) no-repeat;
    background-size: cover;
    position: relative;
}

.hero:after {
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

.hero h1,
.hero h2 {
    max-width: 570px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    color: #fff;
}

.hero .hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 1em auto 1rem auto;
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
