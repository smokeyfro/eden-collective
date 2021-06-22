<template>
  <Layout>
    <SubHero :title="$page.post.title" />
    <div
      class="mx-auto mt-6 lg:mt-10 page flex flex-col lg:flex-row justify-center items-start relative container"
    >
      <div v-html="$page.post.content" class="p-6 pt-0 prose lg:prose-xl" />
      <AboutNav
        v-if="
          $page.post.title === 'About' ||
          $page.post.title === 'Action Plan' ||
          $page.post.title === 'Meet the Community' ||
          $page.post.title === 'Join' ||
          $page.post.title === 'Food Security'
        "
      />
    </div>
  </Layout>
</template>

<page-query>
query Page ($path: String!) {
  post: staticPage (path: $path) {
    title
    content
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
