<template>
<Layout>
    <div class="container">
        <Hero />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
</Layout>
</template>

<page-query>
query Posts {
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import LatestJournals from "@/components/LatestJournals"

export default {
    components: {
        Hero,
        LatestJournals
    }
}
</script>
