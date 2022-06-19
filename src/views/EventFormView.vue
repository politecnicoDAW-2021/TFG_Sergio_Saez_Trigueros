<template>
  <event-form-vue v-if="isAdmin" :eventId="eventId"></event-form-vue>
</template>

<script setup>
import EventFormVue from "@/components/EventForm.vue";
import { authService } from "@/services/auth.service";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const eventId = ref(null);
const route = useRoute();
const isAdmin = ref(false);

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  eventId.value = route.params.id;
});
</script>
