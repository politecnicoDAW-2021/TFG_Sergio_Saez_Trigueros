<template>
  <h1 class="header">Events</h1>
  <div class="card-wrapper">
    <event-card-vue v-for="event in events" :event="event"></event-card-vue>
  </div>
</template>

<script setup>
import EventCardVue from "@/components/EventCard.vue";
import { eventService } from "@/services/event.service";
import { onBeforeMount, ref } from "vue";

const events = ref(null);

const loadEvents = () => {
  eventService
    .getEvents()
    .then((eventsData) => (events.value = eventsData.data.listEvents.items));
};

onBeforeMount(() => {
  loadEvents();
});
</script>

<style></style>
