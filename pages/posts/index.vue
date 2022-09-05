<template>
  <div class="posts-page">
    <!-- 2) Pass the fetched data to the PostList 
    component as prop -->
    <PostList :posts = "loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  /* 1) Fetch data from the server like we did in
  the main page. (Remember we just use the setTimeout
  method to simulate the fetching from the server. In
  a real application we don´t use it.) */
   asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
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
    }, 1500);
  },
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
