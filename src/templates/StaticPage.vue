<template>
  <Layout>
    <SubHero :title="$page.post.title" />
    <div class="mx-auto mt-10 page flex justify-center items-start relative container">
      <div v-html="$page.post.content" class="prose lg:prose-xl" />
      <AboutNav v-if="$page.post.title === 'About'" />
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
import AboutNav from "@/components/AboutNav";
import SubHero from "@/components/SubHero";

export default {
  components: {
    AboutNav,
    SubHero,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped></style>
