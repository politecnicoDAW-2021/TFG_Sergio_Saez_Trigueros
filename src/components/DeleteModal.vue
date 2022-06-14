<template>
  <div class="modal-wrapper">
    <div class="modal-component">
      <div class="modal-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">{{ body }}</div>
      <div class="modal-buttons">
        <button class="btn btn-dark" @click="closeModal()">Close</button>
        <button class="btn btn-info" @click="confirmDelete()">Accept</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  body: String,
});

const emits = defineEmits(["close", "save"]);

const closeModal = () => {
  emits("close");
};

const confirmDelete = () => {
  emits("save");
};
</script>

<style>
.modal-wrapper {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  display: block;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal-component {
  min-width: 20%;
  width: fit-content;
  display: flex;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 1rem;
  background-color: white;
  flex-direction: column;
  border-radius: 0.5rem;
}

.modal-buttons {
  display: flex;
  gap: 1rem;
}
</style>
