<template>
<Layout>
    <Hero />
    <LatestJournals :journals="$page.journals.edges" />
</Layout>
</template>

<page-query>
query Posts {
  journals: allJournalPost (perPage: 3) {
    edges {
      node {
        id
        path
        title
        excerpt
        date (format: "D MMM YYYY")
        timeToRead
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
