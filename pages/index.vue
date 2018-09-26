<template>
    <div class="container">
        <br/>
        <list :items="films" :model="$store.getters['getMovieEntities']"/>
        <list :items="serials"  :model="$store.getters['getSerialEntities']"/>
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
            const {data: films} = await $axios.get('http://localhost:3000/api/films');
            const {data: serials} = await $axios.get('http://localhost:3000/api/serials');
            const response = {
                films: films.data,
                serials: serials.data,
            };
            return response;
        }
    }
</script>
