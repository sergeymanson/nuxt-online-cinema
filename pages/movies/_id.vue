<template>
    <card
            :item="data"
            :model="$store.getters['getMovieEntities']"
    />
</template>

<script>
    import card from '~/components/card/full'

    export default {
        name: 'movie-card',
        layout: 'default',
        components: {
            card
        },
        async asyncData ({$axios,  params}) {
            const {data} = await $axios.get(`/proxy/kinopoisk?id=${params.id}`);
            return {
                data,
            };
        }
    }
</script>
