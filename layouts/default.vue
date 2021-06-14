<template>
  <div class="layout">
    <header>
      <span>Chat!</span>
      <span>Online: {{ users.filter(u => u.active).length }}</span>
      <button v-if="user.id" @click="out">Logout</button>
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
// vuex
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["users", "user"]),
  mounted() {
    if (typeof JSON.parse(sessionStorage.getItem("user")) == "Object") {
      this.setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  },
  methods: {
    ...mapActions(["setUser", "dropUser"]),
    out() {
      this.$socket.emit("out", this.user);
      this.dropUser();
    }
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-family: Roboto, Times, serif;
  overflow: hidden;
}

header {
  background: #343a40;
  padding: 0 5%;
  color: white;
}
header button,
header span {
  padding: 10px;
  margin-right: 10px;
  display: inline-block;
}

header button {
  color: #333;
  padding: 5px 12px;
  cursor: pointer;
}

main {
  flex: 1;
  height: 100%;
}
</style>
