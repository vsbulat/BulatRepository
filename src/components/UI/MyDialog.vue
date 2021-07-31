<template>
  <div
      class="dialog"
      v-if="show"
      @click="hideDialog"
  >
      <div class="dialog-content" @click.stop>
        <slot></slot>
      </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "MyDialog",
  mixins:[toggleMixin],
  methods: {}
}
</script>

<style scoped lang="scss">
  .dialog {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    position: fixed;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;

    &-content {
      background-color: #fff;
      border-radius: 12px;
      padding: 30px;
      margin: auto;
    }
  }
</style>