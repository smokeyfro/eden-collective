<template>
<Layout>

    <div class="">
        <div class="prose lg:prose-xl mb-10">
            <h1 class="journal-header">
                News from the Collective
            </h1>
        </div>
        <div class="flex justify-start items-start space-x-6 w-full mr-0">
            <div class="bg-gray-900 p-6 w-1/2 rounded-md shadow-md" v-for="item in $page.posts.edges" :key="item.node.id">
                <h3 class="text-3xl text-white leading-9 font-black">{{ item.node.title }}</h3>
                <div class="text-sm mt-2 text-gray-600">
                    <span>{{ item.node.date }}</span> &middot;
                    <span>{{ item.node.author }} </span> &middot;
                    <span>{{ item.node.timeToRead }} min read</span>
                </div>
                <p class="mt-3 text-lg text-gray-500">
                    {{ item.node.excerpt }}
                </p>
                <g-link :to="item.node.path" class="block mt-5 font-bold text-white">
                    Continue Reading &rightarrow;
                </g-link>
            </div>
        </div>
    </div>

</Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
        title
        date (format: "D MMM YYYY")
        author
        excerpt
        timeToRead
      }
    }
  }
}
</page-query>

<script>
export default {}
</script>

<style scoped>

</style>
