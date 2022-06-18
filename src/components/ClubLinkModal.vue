<template>
  <div class="modal-wrapper">
    <div class="modal-component">
      <div class="modal-header">
        <h3>Select a club</h3>
      </div>
      <div class="modal-body">
        <clubs-table-vue @selected="selectClub($event)"></clubs-table-vue>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubsTableVue from "./ClubsTable.vue";

const emits = defineEmits(["save"]);

const selectClub = ($event) => {
  emits("save", { clubId: $event.clubId });
};
</script>

<style></style>
