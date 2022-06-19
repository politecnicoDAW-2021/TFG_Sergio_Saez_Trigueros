<template>
  <div class="table-responsive p-5">
    <table class="table table-info table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Discipline</th>
          <th scope="col">Category</th>
          <th scope="col">Location</th>
          <th scope="col">
            <button class="btn btn-success" @click="goToEventForm()">
              Insert
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="event in events"
          class="table-row"
          @click="showEvent(event.id)"
        >
          <td>{{ event.name }}</td>
          <td>{{ event.type }}</td>
          <td>{{ event.discipline }}</td>
          <td>{{ event.category }}</td>
          <td>{{ event.location }}</td>
          <td>
            <button class="btn btn-warning" @click="goToEventForm(event.id)">
              Edit
            </button>
            <button
              class="btn btn-danger mx-2"
              @click="openModal(event.id, event.name)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToEventForm = (eventId = "") => {
  router.push({
    name: "createEvent",
    params: { id: eventId },
  });
};
</script>
