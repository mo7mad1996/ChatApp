<template>
  <main>
    <ChatContent />
    <ChatForm />
  </main>
</template>

<script>
  import socket from "~/plugins/socket.io.js";
  import ChatContent from "~/components/chatpage/ChatContent";
  import ChatForm from "~/components/chatpage/ChatForm";

  export default {
    components: {
      ChatForm,
      ChatContent,
    },
    data() {
      return {
        message: "",
        messages: [],
      };
    },
  };
</script>

<style scoped></style>
