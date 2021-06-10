<template>
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header/index.vue";

export default defineComponent({
  components: { Header },
});
</script>

<style lang="scss">
#app {
  margin: 5rem auto;
  width: 95%;
}
.error__alert {
  color: #f52369;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
</style>
