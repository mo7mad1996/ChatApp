<template>
  <div class="ChatMessages">
    <div class="container">
      <ul>
        <li
          v-for="(msg, n) in messages"
          :key="n"
          :title="'user' + msg.form"
          :class="msg.form == user.id ? 'to' : 'from'"
        >
          <span v-if="msg.text" v-text="msg.text" />
          <img v-if="msg.img" :src="msg.img" alt="فشل في تحميل الصوره" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// vuex
import { mapGetters } from "vuex";

export default {
  name: "ChatMessages",
  computed: mapGetters(["messages", "user"])
};
</script>

<style scoped>
.ChatMessages {
  flex: 1;
  position: relative;
}
.container {
  position: absolute;
  flex-flow: row wrap;
  inset: 0;
  overflow: auto;
}

li {
  padding: 5px 10px;
  margin: 10px;
  margin-left: 10px;
  width: 80%;
}
li.to {
  background: #ebebeb;
  margin-right: auto;
}
li.from {
  background: #05728f;
  margin-left: auto;
  color: #ebebeb;
}
</style>
