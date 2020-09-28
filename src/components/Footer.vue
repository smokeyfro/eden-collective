<template>
<footer class="">
    <div class="text-base text-gray-600 my-10 flex justify-between">
        <span v-html="settings.footer" />
        <span>Site by <a href="https://smokeyfro.com" target="_blank" title="This site was created by SmokeyFro" class="text-gray-900 font-bold">SmokeyFro</a></span>
    </div>
</footer>
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

<style scoped>

</style>
