<template>
    <div class="panel">
        <div class="panel-heading flex">
            <h2>Фильмы</h2>
            <a href="/movies" class="btn btn-warning pull-right">Перейти</a>
        </div>
        <div class="panel-body">
            <div class="row">
                <card v-for="item in entities" :key="item.getId()" :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {moviesEntity} from '~/entities/movies/moviesEntity.js';
    import {serialsEntity} from '~/entities/serials/serialsEntity.js';

    import card from '~/components/card'
    export default {
        name: 'list',
        components: {
            card
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            isMovies: {
                type: Boolean,
                required: true
            }
        },
        created () {
            if (this.isMovies) {
                this.entities = moviesEntity.mutateCollection(this.items);
            } else {
                this.entities = serialsEntity.mutateCollection(this.items);
            }

        },
        data () {
            return {
                entities: []
            };
        }
    }
</script>