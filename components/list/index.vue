<template>
    <div class="panel">
        <div class="panel-heading flex">
            <h2 v-html="title"></h2>
            <link-custom
                    class="btn btn-warning pull-right"
                    v-if="btnLink && btnTitle"
                    :link="btnLink"
                    :title="btnTitle"
                >
                <span v-text="title"></span>
            </link-custom>
        </div>
        <div class="panel-body">
            <div class="row">
                <card v-for="(item, index) in entities" :key="index" :item="item"/>
            </div>
            <slot name="footer"/>
        </div>
    </div>
</template>

<script>
    import card from '~/components/card/mini'
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
            model: {
                required: true
            },
            btnLink: {
                type: String,
                default: ''
            },
            btnTitle: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        created () {
            this.entities = this.model.mutateCollection(this.items);
        },
        data () {
            return {
                entities: []
            };
        }
    }
</script>