<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "myButton"
}
</script>

<style scoped lang="scss">
  button {
    min-width: 150px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    border-radius: 12px;
    background-color: #17dde3;
    border: 2px solid #17dde3;
    cursor: pointer;
    font-size: 18px;
    outline: none;
    text-align: center;

    &:hover {
      background-color: #fff;
    }
  }
</style>