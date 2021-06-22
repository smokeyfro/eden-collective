<template>
  <Layout>
    <div class="journal prose lg:prose-xl">
      <div class="journal-header">
        <h1 v-html="$page.post.title" class="journal-title" />
        <div class="journal-meta">
          <div class="journal-author">
            <span class="label">Author</span>
            <span class="author-name" v-text="$page.post.author" />
          </div>
          <div class="journal-date">
            <span class="label">Date</span>
            <div v-text="$page.post.date" />
          </div>
          <div class="journal-time">
            <span class="label">Time</span>
            <span>{{ $page.post.timeToRead }} min read</span>
          </div>
        </div>
      </div>
      <JournalContent :content="$page.post.content" />
      <hr />
      <h2>Comments</h2>
      <div
        id="cusdis_thread"
        data-host="https://sfcomments.vercel.app"
        data-app-id="90d36a11-e3d2-4111-9b40-27f84ec8ba31"
        :data-page-id="$page.post.id"
        :data-page-url="`https://edencollective.org.za/${$page.post.path}`"
        :data-page-title="$page.post.title"
      ></div>
    </div>
  </Layout>
</template>

<page-query>
query JournalPost ($path: String!) {
  post: journalPost (path: $path) {
    id
    title
    author
    date (format: "D MMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import JournalContent from "@/components/JournalContent";

export default {
  components: {
    JournalContent,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      script: [
        {
          src: "https://sfcomments.vercel.app/js/cusdis.es.js",
          async: true,
          defer: true,
          type: "text/javascript",
        },
      ],
    };
  },
};
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}

.journal-header {
  padding: 2rem 0 4rem 0;
}

.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}

.journal-meta > div {
  margin-right: 4rem;
}

.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
