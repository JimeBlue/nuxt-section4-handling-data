<template>
  <div class="posts-page">
    <!-- 7) Send the data fetch from server that
    is in the store to the PostList component as prop.
    Next step in _id -->
    <PostList :posts = "loadedPosts"/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  /* 6) Get the data fetch from server that is
  in the store.  */
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
