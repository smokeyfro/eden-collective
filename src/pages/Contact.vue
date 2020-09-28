<template>
<Layout>
    <div class="prose lg:prose-xl">

        <h1>Contact us</h1>
        <p>Want to get involved? Fill out the form and we'll get back to you asap.</p>

        <form class="mt-10" name="contact">

            <div class="flex justify-between space-x-6">
                <div class="w-1/3">
                    <label for="name" class="label">Name</label>
                    <input type="text" name="name" />
                </div>
                <div class="w-1/3">
                    <label for="email" class="label">Email</label>
                    <input type="email" name="email" />
                </div>
                <div class="w-1/3">
                    <label for="phone" class="label">Phone</label>
                    <input type="phone" name="phone" />
                </div>
            </div>

            <div class="message">
                <label for="message" class="label">Message</label>
                <textarea name="message" class="h-32"></textarea>
            </div>

            <button class="button">Submit form</button>

        </form>

    </div>
</Layout>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
    @apply mt-24 mb-0
}

h1+p {
    @apply mt-3;
}

input,
textarea {
    @apply bg-gray-100 block w-full shadow-inner mb-3 px-3 py-2 rounded-md
}

input:focus,
textarea:focus {
    @apply border-red-900;
}

label {
    @apply font-bold mb-2 block;
}

.button {
    @apply bg-gray-900 text-white font-bold mt-5 px-6 py-2 rounded-md
}
</style>
