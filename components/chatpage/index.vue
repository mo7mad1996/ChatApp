<template>
  <main>
    <div v-if="userCount < 2" class="loading">
      We are waiting for the interlocutor!
    </div>
    <div class="main" v-else>
      <ChatContent :user="user" />
      <ChatForm :user="user" />
    </div>
  </main>
</template>

<script>
  import ChatContent from "~/components/chatpage/ChatContent";
  import ChatForm from "~/components/chatpage/ChatForm";
  import socket from "~/plugins/socket.io.js";

  export default {
    components: {
      ChatForm,
      ChatContent,
    },

    data() {
      return {
        userCount: 0,
        user: "",
      };
    },
    beforeMount() {
      socket.on("calc users", (val) => (this.userCount = val));
    },
    mounted() {
      socket.emit("getUsers");
      this.user = "user" + Math.floor(Math.random() * 1000);
    },
  };
</script>

<style scoped>
  main {
    height: 100%;
  }
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }
  .loading {
    display: grid;
    place-items: center;
    height: 100%;
  }
</style>
