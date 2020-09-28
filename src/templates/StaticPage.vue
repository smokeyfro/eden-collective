<template>
<Layout>
    <div class="prose lg:prose-xl">
        <h1 v-html="$page.post.title" />
        <div v-html="$page.post.content" class="content" />
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
