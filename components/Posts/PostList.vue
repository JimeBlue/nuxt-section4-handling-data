<template>
  <!-- EXPLANATION: right now, here, in the PostList component, I have
  the PostPreview component repetead a couple of time, which represents
  my PostList. In other words, the post list is harcoded. That´s not
  what I want. I want this component to receive an array of posts and 
  then I will loop though that array and output it here. -->
  <!-- 1) Go to the main page, ´cause I will pass the array of
  post from the main page to this PostList component.  -->
  <section class="post-list">
    <!-- 5) Loop through the posts property to output
    each post in the array inside the PostPreview component. -->
    <!-- 6) Bind the key to the post id. Having a key is
    required by Vue.js -->
    <!-- 7) Now, I have to send all the data from the
    posts array of objects to the PostPreview component,
    in order to render it. So, using data binding I pass
    it as props (:key="post.id", :id="post.id", :is-admin="isAdmin"
    :thumbnail="post.thumbnail", :title="post.title",:previewText="post.previewText")
    Next steps in PostPreview component-->
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    /* 4) Accept the posts property comming from the main page.
    It´s a required property because we won´t be able to render
    anthing if we don´t receive the array.
     */
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

