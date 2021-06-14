<template>
  <div v-if="users.filter(u => u.active).length < 2" class="intro">
    We are waiting for the interlocutor!
  </div>
  <div v-else class="ChatContent">
    <ChatMessages />
    <ChatForm />
  </div>
</template>

<script>
// vuex
import { mapGetters } from "vuex";

// components
import ChatMessages from "@/components/ChatContent/ChatMessages";
import ChatForm from "@/components/ChatContent/ChatForm";

export default {
  name: "ChatContent",
  components: {
    ChatMessages,
    ChatForm
  },
  computed: mapGetters(["users"])
};
</script>

<style scoped>
.ChatContent {
  display: flex;
  flex-direction: column;
  padding: 0 5%;
}
.intro {
  display: grid;
  place-items: center;
  height: 100%;
}
</style>
