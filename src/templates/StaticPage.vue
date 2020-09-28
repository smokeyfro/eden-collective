<template>
<Layout>
    <div class="page">
        <h1 class="title" v-html="$page.post.title" />
        <div v-html="$page.post.content" class="prose lg:prose-xl" />
    </div>
</Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: staticPage (path: $path) {
    title
    content
    path
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>

<style scoped>

</style>
