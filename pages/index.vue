<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  /* EXPLANATION: to fetch data from the server in Vue we 
  do it in the created() life cycle method. The data is 
  fetch and processed by the browser. This is not good for
  search engine optimazation. Therefore, for the data to
  be fetched and processed by the server and then be sent
  to the browser we fetch it in the asyncData () method
  provided by nuxt. It´s important to notice that the
  asyncData () method can only be used in page components.*/

  /* 1) Use the asyncData () method to fetch data from
  server. The method returns an object, which will be the data 
  of this component and therefore we can use that data in
  the template. IMPORTANT: here I use a setTimeout method
  to simulate that we´re reaching out to a server. This is
  not necessary in a real application. Also important, is
  not to override what we´re fetching here in the 
   asyncData () method with what we include in the normal
   data () mehtod. So, here, I have to delete the loadedPosts
   array from data ().*/

  /* 2) Use the callback argument to tell the asyncData () method 
  that you´re done, like with a promise. */ 
  asyncData(context, callback) {
    setTimeout(() => {
      /* 3) In the callback method, I pass null, if I don´t
      have an error, and the second argument is the javascript
      argument that will be your data once you're done. The js
      argument will become the data we can access from the browser. */
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
  /* 4) Now, if we go and refresh the page, we can see it takes
  the 1/2 seconds set by the timer for the data to be loaded.
  This is because the data is first loaded on the server and 
  once that if done, it is sent to the browser. If I inspect
  the page, I will be able to see the loadedPosts object at the
  end. */
  data() {
    return {
    };
  }
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
