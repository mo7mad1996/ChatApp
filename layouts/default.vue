<template>
  <div class="layout">
    <header>
      <span>Chat! </span>
      <span>Online: {{ usersCount }}</span>

      <button @click="logout" v-if="user">Logout</button>
    </header>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  import socket from "~/plugins/socket.io.js";
  import { mapGetters, mapActions } from "vuex";

  export default {
    data() {
      return {
        usersCount: 0,
      };
    },
    beforeMount() {
      socket.on("calc users", (num) => {
        this.usersCount = num;
      });
    },
    mounted() {
      socket.emit("getUsers");
    },
    computed: {
      ...mapGetters(["user"]),
    },
    methods: {
      ...mapActions(["out"]),
      logout() {
        this.out();
        socket.emit("logout");
      },
    },
  };
</script>

<style scoped>
  .layout {
    height: 100vh;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
  }

  header {
    background: #343a40;
    color: white;
  }

  button,
  header span {
    display: inline-block;
    padding: 10px;
    margin: 0 0 0 10px;
  }
  .content {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
  }
  button {
    color: #333;
    padding: 5px 12px;
    cursor: pointer;
  }
</style>
