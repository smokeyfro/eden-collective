<template>
  <Layout>
    <div class="page flex justify-start items-start relative container">
      <div>
        <h1 class="title" v-html="$page.post.title" />
        <div v-html="$page.post.content" class="prose lg:prose-xl" />
      </div>
      <AboutNav v-if="$page.post.title === 'About'" />
    </div>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: page (path: $path) {
    title
    content
    path
  }
}
</page-query>

<script>
import AboutNav from "@/components/AboutNav";
export default {
  components: {
    AboutNav,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped></style>
