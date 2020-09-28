<template>
<div class="container">
    <Header />
    <slot />
    <Footer />
</div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>
.container {
    @apply max-w-screen-xl mx-auto
}
.active {
    @apply font-bold;
}
</style>
