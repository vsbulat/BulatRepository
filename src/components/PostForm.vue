<template>
  <form @submit.prevent>
    <my-input
        placeholder="Название"
        v-model="post.title"
    >

    </my-input>
    <my-input
        placeholder="Текст"
        v-model="post.body"
    >

    </my-input>
    <my-button
      @click="createPost"
    >
      Create
    </my-button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      if (this.post.title !== '' && this.post.body !== '') {
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>