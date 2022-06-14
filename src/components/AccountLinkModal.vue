<template>
  <div class="modal-wrapper">
    <div class="modal-component">
      <div class="modal-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">
        <form
          class="col-6 p-3 clubForm"
          style="background-color: var(--amplify-colors-brand-primary-20)"
          @submit.prevent="submit()"
        >
          <div class="form-row row d-flex justify-content-around">
            <div class="form-group col-6">
              <label for="name">Club name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                v-model="clubData.name"
              />
              <div v-if="v$.name.$error" class="error">
                {{ v$.name.$errors[0].$message }}
              </div>
            </div>
          </div>
        </form>
        <div class="modal-buttons">
          <button class="btn btn-dark" @click="closeModal()">Close</button>
          <button class="btn btn-info" @click="confirmDelete()">Accept</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["close", "save"]);

const closeModal = () => {
  emits("close");
};

const confirmDelete = () => {
  emits("save");
};
</script>

<style></style>
