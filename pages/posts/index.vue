<template>
  <div class="posts-page">
    <PostList :posts = "loadedPosts"/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Post",
              previewText: "This is our first post!",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            },
            {
              id: "2",
              title: "Second Post",
              previewText: "This is our second post!",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            }
          ]
        });
      }, 1000);
 
    })
     
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e);
    });
  },
  /* 12) In the created method, send the 
  loadedPosts we fetched above to the vuex
  store.*/
  created () {
  this.$store.dispatch("setPosts", this.loadedPosts)
  console.log(this.$store.getters.loadedPosts)
  }
};

/* 13) To see that it is working use the vue.js
chrome extension. Go to components > Root >
Default > Nuxt > PagesPostsIndex.vue, on the 
left side, under data, I will see that the data
I´m using is the loadedPosts array.
If I don´t have the vue.js chrome extension, I can
simply console.log(this.$store.getters.loadedPosts) */
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
