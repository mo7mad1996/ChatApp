<template>
  <div id="app">
    <Login v-if="!user" />
    <Chat v-else />
  </div>
</template>

<script>
  // components
  import Login from "~/components/login/index";
  import Chat from "~/components/chatPage/index";

  // vuex
  import { mapGetters } from "vuex";

  export default {
    components: {
      Login,
      Chat,
    },
    head: {
      title: "Nuxt.js with Socket.io",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        },
      ],
    },
    computed: {
      ...mapGetters(["user"]),
    },
  };
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
