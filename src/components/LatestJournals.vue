<template>
<div>
    <div class="latest-journals-heading container">
        <span class="label">Recent news</span>
    </div>
    <div class="latest-journals">
        <div class="container flex">
            <div v-for="item in journals" :key="item.node.id">
                <h3 class="journal-title">{{ item.node.title }}</h3>
                <div class="meta">
                    <span>{{ item.node.date }}</span> &middot;
                    <span>{{ item.node.author }} </span> &middot;
                    <span>{{ item.node.timeToRead }} min read</span>
                </div>
                <p class="excerpt">
                    {{ item.node.excerpt }}
                </p>
                <g-link :to="item.node.path" class="journal">
                    Continue Reading
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
.latest-journals-heading {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
}

.journal-title {
    font-size: 1.4rem;
    margin: .5em 0;
}

.meta {
    color: #555;
}

.excerpt {
    line-height: 1.6em;
    max-width: 90%;
}

@media (min-width: 580px) {}

@media (min-width: 920px) {}
</style>
