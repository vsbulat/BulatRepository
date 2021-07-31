<template>
  <div class="post">
    <div class="content">
      <div class="heading">
        <b>{{post.id}}. Name:</b> {{ post.title }}
      </div>
      <div class="body">
        {{ post.body }}
      </div>
    </div>
    <div class="button-container">
      <my-button
          @click="$emit('remove', post)"
      >Del</my-button>

      <my-button @click="$router.push(`/posts/${post.id}`)">open</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/myButton";
export default {
  name: "PostItem",
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #17dde3;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .content {
    padding-right: 30px;
  }

  .heading {
    margin-bottom: 20px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap:20px;
  }
}
</style>