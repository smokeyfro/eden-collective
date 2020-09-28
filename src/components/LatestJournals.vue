<template>
<div class="">
    <h2 class="text-4xl font-bold mt-10 mb-5 leading-8">Recent news
        <span class="block text-2xl text-gray-700">From the Collective</span>
    </h2>
    <div class="latest-journals">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <div class="bg-gray-900 p-6 rounded-md shadow-md flex flex-col justify-between" v-for="item in journals" :key="item.node.id">
                <div>
                    <h3 class="text-3xl text-white leading-9 font-black">{{ item.node.title }}</h3>
                    <div class="text-sm mt-2 text-gray-600">
                        <span>{{ item.node.date }}</span> &middot;
                        <span>{{ item.node.timeToRead }} min read</span>
                    </div>
                    <p class="mt-3 text-lg text-gray-500">
                        {{ item.node.excerpt }}
                    </p>
                </div>
                <g-link :to="item.node.path" class="block mt-5 font-bold text-white">
                    Continue Reading &rightarrow;
                </g-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        journals: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.meta {
    @apply text-gray-600
}

.excerpt {
    @apply mr-3
}
</style>
