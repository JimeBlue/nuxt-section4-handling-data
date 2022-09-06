
import Vuex from "vuex";

/* EXPLANATION: we can fetch data from
API or server using the fetch method (which comes 
with nuxt, it´s not the normal fetch form js) or
nuxtServerInit. The difference is explained in 
the video for this branch. There is also a useful
video explaining the ways of fetching data with
nuxt: https://www.youtube.com/watch?v=NDVCquHbFIM
Here I will use nuxtServerInit
 */

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
          /* 1) In actions, here in the store, use nuxtServerInit
      to fetch data. The reason for using this instead of fetch
      is that with nuxtServerInit we can have the data in the
      store and it will be available for the whole app. Instead,
      if we use fetch, we have to do it from a component and we
      would have to repeat it everytime we want the data in each
      component.*/
    actions: {
      nuxtServerInit(vuexContext, context) {
        /* 2) Return a promise. This is required by nuxtServerInit */
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            /* 3) Commit the data to the setPosts method in mutations. */
            vuexContext.commit("setPosts", [
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
            ]);
            /* 4) Resolve to indicate that we´re done. */
            resolve();
          }, 1000);
        });
        /* 5) Now, I can use the data in any component I
          want. Next step in the posts page. */
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};


export default createStore;
