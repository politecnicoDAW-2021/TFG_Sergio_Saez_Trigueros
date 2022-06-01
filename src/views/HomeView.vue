<script setup lang="ts">
import HelloComponent from "../components/HelloComponent.vue";
</script>

<template>
  <main>
    <HelloComponent msg="Welcome to SportEvent" />
    <button>
      <router-link to="/calendar">Go to calendar</router-link>
    </button>
  </main>
</template>
