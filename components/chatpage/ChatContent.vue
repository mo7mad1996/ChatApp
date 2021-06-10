<template>
  <div class="messages-container">
    <ul>
      <li
        v-for="(msg, n) in messages"
        :key="n"
        :class="msg.user == user ? 'to' : 'from'"
      >
        {{ msg.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  import socket from "~/plugins/socket.io.js";

  export default {
    name: "ChatContent",
    props: ["user"],
    data() {
      return {
        messages: [],
      };
    },
    beforeMount() {
      socket.on("updateMsg", (messages) => (this.messages = messages));
    },
  };
</script>

<style scoped>
  .messages-container {
    flex: 1;
  }

  li {
    padding: 5px 10px;
    margin: 10px;
    width: 80%;
  }

  .from {
    background: #05728f;
    margin-left: auto;
    color: #ebebeb;
  }
  .to {
    margin-right: auto;
    background: #ebebeb;
  }
</style>
