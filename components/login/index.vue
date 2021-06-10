<template>
  <div class="land">
    <div>
      <h2>Many people want to meet you!</h2>
      <button @click="start">Start Chat</button>
    </div>
  </div>
</template>

<script>
  import socket from "~/plugins/socket.io.js";
  import { mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions(["login"]),
      start() {
        this.login();
        socket.emit("start");
      },
    },
  };
</script>

<style scoped>
  .land {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  button {
    color: white;
    background: #28a745;
    padding: 7px 12px;
    border-radius: 5px;
    border: none;
    margin: 2em auto;
    font-size: 20px;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(80%);
  }
</style>
