<template>
  <Layout>
    <div class="">
      <SubHero title="Community Events" />
      <ul class="mt-10 prose lg:prose-xl mx-auto">
        <li v-for="(items, month) in groupByMonth" :key="month">
          <h2 class="font-bold text-2xl mb-2">{{ month }}</h2>
          <ul class="mb-10">
            <li
              v-for="item in items"
              :key="item.id"
              class="flex items-start justify-start"
            >
              <span v-html="item.date" class="lg:mr-3" />
              <strong v-html="item.title" />
            </li>
          </ul>
        </li>
      </ul>
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mr-0">
        <div
          class="bg-gray-900 overflow-hidden rounded-md shadow-md flex flex-col justify-between"
          v-for="item in $page.posts.edges"
          :key="item.node.id"
        >
          <g-link :to="item.node.path" class="project-link">
                    <g-image :src="item.node.image" :alt="item.node.title" class="thumbnail" />
                </g-link>
           <div class="p-6">
            <h3 class="text-3xl text-white leading-9 font-black">
              {{ item.node.title }}
            </h3>
            <div class="text-sm mt-2 text-gray-600">
              <span>{{ item.node.date }}</span> &middot;
            </div>
            <p class="mt-3 text-lg text-gray-500">
              {{ item.node.excerpt }}
            </p>
          </div>
          <g-link :to="item.node.path" class="p-6 block mt-5 font-bold text-white">
            Continue Reading &rightarrow;
          </g-link>
        </div>
      </div> -->
    </div>
  </Layout>
</template>

<page-query>
query Journal {
	posts: allCommunityEvent (order: ASC) {
    edges {
      node {
        id
        path
        title
        date (format: "D MMM YYYY")
        createdMonth: date(format: "MMMM, YYYY")
        excerpt
        start
        end
        image
        map_link
        location
        tags
      }
    }
  }
}
</page-query>

<script>
import { groupBy } from "~/mixins/groupby";
import SubHero from "@/components/SubHero";

export default {
  mixins: [groupBy],
  components: {
    SubHero,
  },
  computed: {
    groupByMonth() {
      return this.groupBy(this.$page.posts.edges, "createdMonth");
    },
  },
  metaInfo() {
    return {
      title: "Community Events",
    };
  },
};
</script>

<style scoped></style>
