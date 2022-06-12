<template>
  <div class="card mb-3" style="min-width: 30%">
    <div class="card-header bg-info">
      <h3>{{ club.name }}</h3>
    </div>
    <div
      class="card-body"
      style="background-color: var(--amplify-colors-brand-primary-10)"
    >
      <h4 class="card-title">{{ club.city }}</h4>
      <p class="card-text">
        <label>Phone/Email:</label> {{ club.email }} - {{ club.phone }}
      </p>
      <p v-if="club.address" class="card-text">
        <label>Address:</label> {{ club.address }}
      </p>
      <p v-if="club.website" class="card-text">
        <label>Website:</label> {{ club.website }}
      </p>
    </div>
    <div v-if="isAdmin" class="card-footer bg-light border-success">
      Actions - Editar - Borrar
    </div>
  </div>
</template>

<script setup>
import { Clubs } from "@/models";

defineProps({
  club: Clubs,
  isAdmin: Boolean,
});
</script>

<style>
.card-header {
  display: flex;
  justify-content: center;
}

label {
  font-weight: bold;
}
</style>
