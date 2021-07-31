<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "myInput",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue' ,  event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  .input {
    width: 300px;
    height: 50px;
    border: 2px solid #17dde3;
    border-radius: 10px;
    padding: 0 15px;
    font-size: 18px;
    margin-bottom: 30px;
    outline: none;
  }
</style>