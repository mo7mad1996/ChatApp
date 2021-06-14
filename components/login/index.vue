<template>
  <main>
    <div>
      <h2>Many people want to meet you!</h2>
      <button @click="signin">Start Chat</button>
    </div>
  </main>
</template>

<script>
// vuex
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: {
        id: Math.floor(Math.random() * 1000),
        active: true
      }
    };
  },
  mounted() {
    this.$socket.on("updateUsers", users => {
      console.log("component");
      this.updateUsers(users);
    });
  },
  methods: {
    ...mapActions(["updateUsers", "setUser"]),
    signin() {
      this.setUser(this.user);
      this.$socket.emit("signin", this.user);
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
div {
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
