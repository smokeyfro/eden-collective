<template>
  <Layout>
    <SubHero title="About" />
    <div class="page flex justify-center items-start relative container mx-auto">
      <div>
        <div class="prose lg:prose-xl mt-24">
          <p>Eden Collective is a non-profit organization with three main goals.</p>
          <h2>Establish the needs of the Community</h2>
          <p>
            Our first point of call is to come together as a community, recognize the need
            to take back control of our food supply and decide on our collective needs.
          </p>
          <h2>Move from a generalized to specialist model</h2>
          <p>
            Instead of each of us trying to do everything, we're proposing that we each
            focus on one or two things that are best suited to your land, available time
            and interest.
          </p>
          <h2>Come together to trade</h2>
          <p>
            Next we'll arrange a weekly market, where local memembers of the community can
            trade amongst ourselves. We will also be creating an online shop, where
            members can sell their surpless produce to the greater public.
          </p>
        </div>
      </div>
      <AboutNav />
    </div>
  </Layout>
</template>

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
      title: "About the Eden Collective",
    };
  },
};
</script>

<style scoped></style>
