<template>
  <form @submit.prevent="sendSms">
    <input placeholder="Message" type="text" v-model="msg" />
    <label for="upload"><i class="fas fa-image"></i></label>
    <label for="submit"><i class="fas fa-paper-plane"></i></label>

    <input id="upload" type="file" />
    <input id="submit" type="submit" />
  </form>
</template>

<script>
  import socket from "~/plugins/socket.io.js";

  export default {
    name: "ChatForm",
    props: ["user"],
    data() {
      return {
        msg: "",
      };
    },
    methods: {
      sendSms() {
        socket.emit("sendSms", { text: this.msg, file: null, user: this.user });
        this.msg = "";
      },
    },
  };
</script>

<style scoped>
  input {
    display: none;
  }
  form {
    width: 90%;
    margin: auto;
    padding: 5px 0;
    border-top: 1px solid #dadada;
    display: flex;
    gap: 5px;
  }
  [type="text"] {
    flex: 1;
    padding: 5px 0;
    border: none;
    display: block;
  }

  label {
    background: #05728f;
    color: white;
    height: 2em;
    width: 2em;
    display: grid;
    place-items: center;
    border-radius: 1em;
  }
</style>
