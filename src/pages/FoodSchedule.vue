<template>
  <Layout>
    <div class="">
      <SubHero title="Food Schedule" />
      <ul class="mt-10 grid grid-cols-6 gap-8 container mx-auto">
        <li
          v-for="month in $page.posts.edges"
          :key="month.node.id"
          class="p-6 bg-gray-100 border border-gray-500 rounded-md overflow-hidden"
        >
          <h2 class="font-bold uppercase border-b-2 border-gray-500 text-lg pb-2 mb-2">
            {{ month.node.title }}
          </h2>
          <ul class="mb-10" v-if="month.node.items">
            <li
              v-for="(item, index) in month.node.items"
              :key="index"
              class="flex items-start justify-start"
            >
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query FoodSchedule {
	posts: allFoodSchedule(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        order (format: "MMM")
        items
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
  metaInfo() {
    return {
      title: "Food Schedule",
    };
  },
};
</script>

<style scoped></style>
