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

  import socket from "~/plugins/socket.io.js";

  export default {
    components: {
      Login,
      Chat,
    },
    head: {
      title: "Nuxt.js with Socket.io",
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
