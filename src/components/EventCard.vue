<template>
  <div class="card mb-3" style="min-width: 30%">
    <div class="card-header bg-info">
      <h3 class="link" @click="goToEventPage()">{{ event.name }}</h3>
    </div>
    <div
      class="card-body"
      style="background-color: var(--amplify-colors-brand-primary-10)"
    >
      <h4 class="card-title">{{ event.city }}</h4>
      <p class="card-text"><label>Type:</label> {{ event.type }}</p>
      <p class="card-text"><label>Discipline:</label> {{ event.discipline }}</p>
      <p class="card-text"><label>Category:</label> {{ event.category }}</p>
      <p class="card-text"><label>Date:</label> {{ event.starting_date }}</p>
      <p class="card-text"><label>Location:</label> {{ event.location }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  event: Object,
});

const router = useRouter();

const goToEventPage = () => {
  router.push({
    name: "eventPage",
    params: { id: props.event.id },
  });
};
</script>

<style>
.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
