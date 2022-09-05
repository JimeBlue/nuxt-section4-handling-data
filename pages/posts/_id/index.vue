<template>
  <div class="single-post-page">
    <section class="post">
      <!-- 3) Output the data of the fetch object with
      the information of a single post. -->
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
    <!-- 4) Now if I click on a single post in the posts
    section I will be able to see the correct id. -->
  </div>
</template>
<script>
export default {
  /* 1) Fetch the data for a single post. I do it
  the same way I did it in the main page or in the 
  posts page. But becasue this time what I want is
  a single post, and a sigle post also has info as
  author, context and date, these info is incuded 
  in the object below. */

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        /* 2) I will use the context object to access the id
        of this single post (context.route.params.id). For
        now, I will have the id to be part of the tile. But
        in a real app, I will use the id to fetch the 
        idividual post I want. */
        loadedPost: {
          id: "1",
          title: "First Post (ID: " + context.route.params.id + ")",
          previewText: "This is our first post!",
          author: 'Maximilian',
          updatedDate: new Date(),
          content: 'Some dummy text which is definitely not the preview text though!',
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        }
      });
    }, 1000);
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

