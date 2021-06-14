<template>
  <ChatContent v-if="user.id" />
  <Login v-else />
</template>

<script>
// vuex
import { mapGetters } from "vuex";

// components
import ChatContent from "@/components/ChatContent/index";
import Login from "@/components/Login/index";

export default {
  computed: mapGetters(["user"]),
  components: {
    ChatContent,
    Login
  }
};
</script>

<style scoped>
div {
  font-family: Roboto, Times, serif;
  height: 100%;
}
</style>
