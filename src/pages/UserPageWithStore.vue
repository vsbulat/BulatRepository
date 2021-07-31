<template>

  <h1>Post page</h1>
<!--  <my-input-->
<!--      v-model="searchQuery"-->
<!--      placeholder="Search"-->
<!--  />-->
  <div class="appButtons">
    <my-button @click="showDialog">Create post</my-button>
<!--    <my-select-->
<!--        v-model="selectedSort"-->
<!--        :options="sortOption"-->
<!--    ></my-select>-->
  </div>
  <my-dialog v-model:show="dialogVis">
    <post-form @create="createPost"></post-form>
  </my-dialog>


  <post-list
      :posts="sortedAndSearchedPost"
      @remove="removePost"
      v-if="!isPostLoading"
  ></post-list>
  <div v-else>Loading</div>
  <div class="page-wrapper">
    <div
        v-for="pageN in totalPage"
        :key="pageN"
        class="page"
        :class="{
            'current': page === pageN
          }"
        @click="changePage(pageN)"
    >{{ pageN }}
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/myButton";
import axios from 'axios';
import MyInput from "@/components/UI/myInput";
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';

export default {
  name: "UserPage",
  components: {MyInput, MyButton, PostForm, PostList},
  data() {
    return {
      dialogVis: false
    }
  },
  methods: {
    ...mapMutations({
        setPage: 'post/setPage'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPost'
    }),
    createPost(post) {
      this.posts.push(post),
          this.dialogVis = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVis = true;
    },
    changePage(pageN) {
      this.page = pageN;
    }
  },
  mounted() {
   // this.fetchPost();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.pselectedSortosts,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPage: state => state.post.totalPage,
      sortOption: state => state.post.sortOption,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPost',
      sortedAndSearchedPost: 'post/sortedAndSearchedPost'
    })
  },

  watch: {
    page() {
      this.fetchPost();
    }
  }

}
</script>

<style lang="scss" scoped>

.appButtons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.page-wrapper {
  display: flex;
  gap: 15px;

  .page {
    display: inline-flex;
    width: 30px;
    height: 30px;
    border: 1px solid #17dde3;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    }

    &.current {
      border-color: #e31717;
    }
  }
}
</style>