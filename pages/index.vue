<template>
    <div class="container">
        <br/>
        <list
                :items="films"
                :model="$store.getters['getMovieEntities']"
                :btnTitle="$t('global.go-to')"
                btnLink="/movies"
                :title="$t('global.movies')"
        />
        <list
                :items="serials"
                :model="$store.getters['getSerialEntities']"
                :btnTitle="$t('global.go-to')"
                btnLink="/serials"
                :title="$t('global.serials')"
        />
    </div>
</template>

<script>
    import list from '~/components/list'

    export default {
        name: 'home-page',
        layout: 'default',
        components: {
            list
        },
        async asyncData ({$axios}) {
            const {data: films} = await $axios.get('/films');
            const {data: serials} = await $axios.get('/serials');
            return {
                films: films.data,
                serials: serials.data,
            };
        }
    }
</script>
