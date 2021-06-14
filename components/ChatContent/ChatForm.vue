<template>
  <form @submit.prevent="sendMsg">
    <input type="text" autofocus v-model="msg" />
    <input id="img" accept="image/*" type="file" />
    <input id="send" type="submit" />
    <label for="img"><i class="fas fa-file-image"></i></label>
    <label for="send"><i class="fas fa-paper-plane"></i></label>
  </form>
</template>

<script>
// vuex
import { mapGetters } from "vuex";

export default {
  name: "ChatForm",
  data() {
    return {
      msg: "",
      img: ""
    };
  },
  computed: mapGetters(["user"]),
  methods: {
    sendMsg() {
      this.$socket.emit("sendMsg", {
        form: this.user.id,
        text: this.msg,
        img: this.img
      });
      this.msg = "";
    }
  }
};
</script>

<style scoped>
form {
  padding: 5px 0;
  border-top: 1px solid #dadada;
  display: flex;
  grid-gap: 5px;
  gap: 5px;
}
input {
  display: none;
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
  cursor: pointer;
}
</style>
