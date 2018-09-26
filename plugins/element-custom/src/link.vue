<template>
  <a v-if="RegExp('^http?|^//').test(link) || target === '_blank'" :rel="rel"  :href="link" :target="target" onclick="event.stopImmediatePropagation()">
    <slot/>
  </a>
  <nuxt-link v-else :to="link">
    <slot/>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'link-custom',
    props: {
      link: {
        type: String,
        require: true
      },
      target: {
        type: String,
        default: '_self'
      },
      rel: {
        type: String,
        default: 'nofollow'
      }
    }
  };
</script>
