<template>
  <section class="signIn">
    <div id="form-container">
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    </div>

    <img src="../assets/SignInBackground.png" />
  </section>
</template>

<style scoped>
  .signIn {
    display: flex;
    justify-content: space-between;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
});
</script>
