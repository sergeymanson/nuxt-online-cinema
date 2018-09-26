<template>
    <div class="container">
        <div class="country-list">
            <ul>
                <li v-for="item in $store.getters['getCurrentRegionCountries']">
                    <span v-text="item.getName()"></span>
                    <pre v-html="item"></pre>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index-page',
        layout: 'default',
        components: {},
        mounted () {
            let aaa = this.$store.getters['getCurrentRegionCountries']
            debugger
        },
        data () {
            return {

            }
        }

    }
</script>
