<template>
  <h1 class="header">Associated Members</h1>
  <members-table-vue class="members-table mt-5"></members-table-vue>
</template>

<script setup>
import MembersTableVue from "@/components/MembersTable.vue";
</script>

<style>
.members-table {
  width: 50%;
  height: fit-content;
  margin: 0 auto;
}
</style>
