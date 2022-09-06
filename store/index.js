/* EXPLANATION: vuex store is a data management
that allows to share data throughout the whole 
application. There´s a great tutorial about Vuex
in the net ninja youtube: 
https://www.youtube.com/watch?v=BGAu__J4xoc&list=PL4cUxeGkcC9i371QO_Rtkl26MwtiJ30P2&index=1 */

/* 1) To create a vuex store, go to the store file
and create a index.js file in it. */

/* 2) Import vuex */
import Vuex from "vuex";

/* 3) Create a function to create a store. */

const createStore = () => {
    /* 4) Return a new vuex store. Initialize
    the new vuex store with a js object, where
    we can set up our state, mutations and
    so on. */
  return new Vuex.Store({
    /* 5) In the state I have loadedPost set to
    an array initially */
    state: {
      loadedPosts: []
    },
    /* 6) In the mutation I have the setPosts method
    which receives the state and a payload, in this
    case the posts */
    mutations: {
      setPosts(state, posts) {
        /* 7) Here we say, the loadedPosts equeals
        posts, which I assume to be an array */
        state.loadedPosts = posts;
      }
    },
    actions: {
    /* 8) In actions, I have the action setPosts,
    in which we can set the setPosts mutation. To
    do that, I make use of vuexContext and its
    object commit. I pass the name of the
    mutation and a payload, in this case posts*/
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    /* 9) In getters I have the loadedPosts method
    that is returning the loadedPosts. We pass the
    state as an argument. Now I can use loadedPosts in
    my components. */
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

/* 10) Export the method createStore. I need to stop the
current local host and start a new one.*/
export default createStore;

/* 11) Now I can use the store in my pages. 
Next step in the posts page */