<template>
  <div class="modal-wrapper">
    <div class="modal-component">
      <div class="modal-body">
        <div class="table-responsive p-5">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="member in members" class="table-row">
                <td>{{ member.first_name }}</td>
                <td>{{ member.last_name }}</td>
                <td>{{ member.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button class="btn btn-dark" @click="closeModal()">Back</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  members: Array,
});

const emit = defineEmits(["closeMembers"]);

const closeModal = () => {
  emit("closeMembers");
};
</script>
