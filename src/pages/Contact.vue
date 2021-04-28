<template>
  <Layout>
    <div class="contact">
      <SubHero title="Contact Us" />
      <div class="mt-10 mx-auto prose lg:prose-xl">
        <p class="excerpt">
          Want to get involved? Fill out the form and we'll get back to you asap.
        </p>

        <form class="mt-10 prose lg:prose-xl" name="contact">
          <div class="flex justify-between space-x-6">
            <div class="w-1/3">
              <label for="name" class="label">Name</label>
              <input type="text" name="name" placeholder="Your name" />
            </div>
            <div class="w-1/3">
              <label for="email" class="label">Email</label>
              <input type="email" name="email" placeholder="A valid email address" />
            </div>
            <div class="w-1/3">
              <label for="phone" class="label">Phone</label>
              <input type="phone" name="phone" placeholder="Your contact number" />
            </div>
          </div>

          <div class="message">
            <label for="message" class="label">Message</label>
            <textarea
              name="message"
              class="h-32"
              placeholder="Write your message here."
            ></textarea>
          </div>

          <button class="button">Submit form</button>
        </form>
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
      title: "Contact Us",
    };
  },
};
</script>

<style scoped>
input,
textarea {
  @apply bg-gray-100 block w-full shadow-inner mb-3 px-3 py-2 rounded-md border;
}

input:focus,
textarea:focus {
  @apply border-red-900;
}

label {
  @apply font-bold mb-2 block;
}

.button {
  @apply bg-gray-900 text-white font-bold mt-5 px-6 py-2 rounded-md;
}
</style>
