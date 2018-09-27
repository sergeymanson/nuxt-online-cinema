<template>
    <img :src="src" :alt="alt"/>
</template>

<script>
  export default {
    name: 'image-custom',
    props: {
      src: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      },
    }
  };
</script>
