<template>
  <Layout>
    <SubHero title="Join the Initiative" />
    <div class="page flex justify-center items-start relative container mx-auto">
      <div>
        <div class="prose lg:prose-xl mt-24">
          <p>Eden Collective is a non-profit organization with three main goals.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SubHero from "@/components/SubHero";
export default {
  components: {
    SubHero,
  },
  metaInfo() {
    return {
      title: "Join the Eden Collective",
    };
  },
};
</script>

<style scoped></style>
