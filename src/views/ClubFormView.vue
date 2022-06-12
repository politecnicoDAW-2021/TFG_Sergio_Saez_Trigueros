<template>
  <club-form-vue v-if="isAdmin" :clubId="clubId"></club-form-vue>
</template>

<script setup>
import ClubFormVue from "@/components/ClubForm.vue";
import { authService } from "@/services/auth.service";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const clubId = ref("");
const route = useRoute();
const isAdmin = ref(false);
onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  clubId.value = route.params.id;
});
</script>

<style>
.club-form {
  margin-left: 400px;
}
</style>
