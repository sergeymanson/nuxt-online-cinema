<template>
    <div class="container"><br>
        <list
            :items="data"
            :model="$store.getters['getMovieEntities']"
            :title="$t('global.serials')">
            <div slot="footer">pagination</div>
        </list>
    </div>
</template>

<script>
    import list from '~/components/list'
    export default {
        name: 'movies',
        layout: 'default',
        components: {
            list
        },
        async asyncData ({$axios,  query}) {
            const {data: serials} = await $axios.get('/api/films', {params: query});
            const response = {
                data: serials.data,
            };
            return response;
        },
        methods: {
            getData () {
                alert()
            }
        }
    }
</script>
