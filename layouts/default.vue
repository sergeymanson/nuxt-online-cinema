<template>
  <section>
    <header-component/>
    <main>
      <nuxt/>
    </main>
    <footer-component/>

    <modal-wrapper/>
  </section>
</template>


<script>
  import headerComponent from '~/components/header';
  import footerComponent from '~/components/footer';
  import modalWrapper from '~/components/modal-wrapper';
  export default {
    components: {
        headerComponent,
        footerComponent,
        modalWrapper
    }
  }
</script>
<style>
  /*@import "../../assets/style/app.scss";*/
</style>