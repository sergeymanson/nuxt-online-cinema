<script>
  export default {
    name: 'modal-content',
    props: {
      component: {},
      props: {
        type: Object
      }
    },
    render (h) {
      return h(this.component, {props: this.props});
    }
  };
</script>