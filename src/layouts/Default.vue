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

.title {
    @apply text-4xl font-bold bg-gray-200 mb-6 text-gray-900 flex w-auto inline-block px-5 py-1 rounded-md;
}

.excerpt {
    @apply text-xl text-gray-800;
}

.active {
    @apply font-bold;
}
</style>
