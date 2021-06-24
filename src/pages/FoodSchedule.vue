<template>
  <Layout>
    <div class="">
      <SubHero title="Food Schedule" />
      <ul class="mt-10 prose lg:prose-xl mx-auto">
        <li v-for="month in $page.posts.edges" :key="month.node.id">
          <h2 class="font-bold text-2xl mb-2">{{ month.node.title }}</h2>
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
