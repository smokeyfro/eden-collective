<template>
<Layout>
    <div class="event">
        <div class="journal-header">
            <h1 v-html="$page.post.title" class="title" />
            <p class="excerpt mb-10">{{ $page.post.excerpt }}</p>
            <div class="journal-meta">
                <div class="w-1/4">
                    <strong class="label block">Date</strong>
                    <div v-text="$page.post.date" /> ({{$page.post.start}} - {{$page.post.end}})
                </div>
                <div class="w-1/4">
                    <strong class="label block">Location</strong>
                    <span>{{ $page.post.location }}</span> (<a :href="$page.post.map_link">Directions</a>)
                </div>
            </div>
        </div>
        <div v-if="$page.post.content" class="prose lg:prose-xl">
            {{ $page.post.content }}
        </div>
    </div>
</Layout>
</template>

<page-query>
query CommunityEvent ($path: String!) {
  post: communityEvent (path: $path) {
    title
    author
    date (format: "D MMM YYYY")
    excerpt
    content
    start
    end
    map_link
    location
  }
}
</page-query>

<script>
import JournalContent from "@/components/JournalContent"

export default {
    components: {
        JournalContent
    },
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
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

.journal-meta>div {
    margin-right: 4rem;
}

.journal-meta>div:last-of-type {
    margin: 0;
}
</style>
