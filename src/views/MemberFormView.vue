<template>
  <h1>{{ title }}</h1>
  <member-form-vue v-if="isAdmin" :memberId="memberId"></member-form-vue>
</template>

<script setup>
import MemberFormVue from "@/components/MemberForm.vue";
import { authService } from "@/services/auth.service";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const memberId = ref(null);
const route = useRoute();
const isAdmin = ref(false);

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  memberId.value = route.params.id;
});
</script>
