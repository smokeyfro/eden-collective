<template>
  <Layout>
    <div class="page">
      <SubHero :title="$page.post.title" />
      <div class="page flex justify-center items-start relative container mx-auto">
        <div class="prose lg:prose-xl mt-20" v-html="$page.post.content" />
        <AboutNav />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: aboutPage (path: $path) {
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
