<template>
    <div class="col-xs-12 col-sm-4 col-md-2 item">
        <link-custom :link="item.getUrl()" :title="item.getName()">
           <img class="img-responsive" width="165" height="235" :src="item.getImage()" :alt="item.getName()">
        </link-custom>
        <link-custom :link="item.getUrl()" :title="item.getName()">
            <h5 v-html="item.getName()"></h5>
        </link-custom>
    </div>
</template>

<script>
    export default {
        name: 'card-mini',
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>