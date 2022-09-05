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
    /* 1) To fetch data we can use instead of a callback,
    a promise. The promise constructor requires an arrow
    function, which receives the resolve and reject functions. 
    It´s worth mentioning that normally we don´t have to 
    construct the promise outselves, but instead we use
    libraries like Axios that return pre constructed
    promises. */
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        /* 2) The resolve and reject functions are executed inside
        the arrow function to indicate if we´re done or not*/
        /* 3) Here in the resolve function I put my js object. */
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
      /* 5) to throw an error, instead calling resolve, we have to 
      call reject and create a new error. */
      /* 7) To see it in action, comment out the whole
      setTimeout function and uncomment the reject function
      below.
       */
      // reject(new Error())
    })
    /* 4) Here the then block listens for the resolve to work.
    The then block has the data as an argument and an arrow function
    where we can return the data. In the callback, we can map the data
    and just return the data we need.
     */
    .then(data => {
      return data
    })
    /* 6) In the catch block, we can simply foward the 
    erro if we want to handle it somewhere. */
    .catch(e => {
      context.error(e);
    });
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
