<template>
  <div class="posts-page">
    <PostList :posts = "loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
   asyncData(context, callback) {
    setTimeout(() => {
      /* 1) In order to handle an error, instead of
      passing null as the firt argument of the
      callback method, we pass new Error, which is a
      js built in constructor.  */
      /* 2) If I go to the post page I will see the
      error page we created in layouts. This is because
      nuxt redirects us to that error page if an error
      ocurrs. */
      /* 3) It is important to mention that if instead of 
      using  setTimeout we are using a promise, error
      will be handled differently. But that we´ll be
      explained later.*/
      callback(new Error (), {
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
