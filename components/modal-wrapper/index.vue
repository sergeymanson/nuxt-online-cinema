<template>
  <el-dialog v-if="showModal" :title="title" :visible.sync="showModal" :size="size" :class="modalClass">
    <modal-content :component="component" :props="props"/>
  </el-dialog>
</template>
<script>
  import modalContent from '~/components/modal-wrapper/modal-content';

  export default {
    name: 'modal-wrapper',
    components: {
      modalContent
    },
    mounted () {
      this.$store.$bus.$on('CREATE_MODAL', ({title, component, props, size, modalClass}) => {
        this.showModal = true;
        this.title = title;
        this.component = component;
        this.props = props;
        this.size = size;
        this.modalClass = modalClass;
      });
      this.$store.$bus.$on('CLOSE_MODAL', () => {
        this.showModal = false;
        this.title = null;
        this.component = null;
        this.props = null;
        this.size = 'small';
        this.modalClass = null;
      });
    },
    data () {
      return {
        showModal: false,
        title: null,
        component: null,
        props: null,
        size: 'small',
        modalClass: null
      };
    }
  };
</script>