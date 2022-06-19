<template>
  <h1 class="header mt-4">{{ title }} event</h1>
  <form
    class="col-6 p-3 clubForm"
    style="background-color: var(--amplify-colors-brand-primary-20)"
  >
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Event name"
          v-model="eventData.name"
        />
        <div v-if="v$.name.$error" class="error">
          {{ v$.name.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="type">Type</label>
        <select id="type" class="form-select" v-model="eventData.type">
          <option selected>TRAINING</option>
          <option>CHAMPIONSHIP</option>
          <option>SEMINAR</option>
        </select>
        <div v-if="v$.type.$error" class="error">
          {{ v$.type.$errors[0].$message }}
        </div>
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="discipline">Discipline</label>
        <select
          id="discipline"
          class="form-select"
          v-model="eventData.discipline"
        >
          <option selected>KUMITE</option>
          <option>KATA</option>
          <option>TRADITIONAL_KARATE</option>
        </select>
        <div v-if="v$.discipline.$error" class="error">
          {{ v$.discipline.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="category">Category</label>
        <select id="category" class="form-select" v-model="eventData.category">
          <option selected>ALL</option>
          <option>BEGGINERS</option>
          <option>CADETS_JNR_UNDER21</option>
          <option>SENIOR</option>
        </select>
        <div v-if="v$.category.$error" class="error">
          {{ v$.category.$errors[0].$message }}
        </div>
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="starting_date">Starting date</label>
        <input
          type="date"
          class="form-control"
          id="starting_date"
          placeholder="Starting date"
          v-model="eventData.starting_date"
        />
        <div v-if="v$.starting_date.$error" class="error">
          {{ v$.starting_date.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="ending_date">Ending date</label>
        <input
          type="date"
          class="form-control"
          id="ending_date"
          placeholder="Ending date"
          v-model="eventData.ending_date"
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control"
          id="location"
          placeholder="Location of the event"
          v-model="eventData.location"
        />
        <div v-if="v$.location.$error" class="error">
          {{ v$.location.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="capacity">Capacity</label>
        <input
          type="number"
          class="form-control"
          id="capacity"
          placeholder="Capacity of the event"
          v-model="eventData.capacity"
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="Price of the event"
          v-model="eventData.price"
        />
      </div>
      <div class="form-group col-6">
        <label for="price">Image</label>
        <input
          type="file"
          class="form-control"
          id="image"
          placeholder="Poster"
          disabled
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          placeholder="Description of the event"
          v-model="eventData.description"
        ></textarea>
        <div v-if="v$.description.$error" class="error">
          {{ v$.description.$errors[0].$message }}
        </div>
      </div>
    </div>
    <button
      type="submit"
      @click.prevent="submit()"
      class="btn btn-info mt-3 mx-1"
    >
      {{ title }}
    </button>
    <button class="btn btn-dark mt-3 mx-1" @click.prevent="backToPrevious()">
      Back
    </button>
  </form>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { reactive, ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { eventService } from "@/services/event.service";

const props = defineProps({
  eventId: String,
});

const eventData = reactive({
  name: null,
  type: "TRAINING",
  discipline: "KUMITE",
  category: "ALL",
  starting_date: null,
  ending_date: null,
  location: null,
  description: null,
  price: null,
});

const rules = computed(() => ({
  name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(80),
  },
  type: {
    required,
  },
  discipline: {
    required,
  },
  category: {
    required,
  },
  starting_date: {
    required,
  },
  location: {
    required,
  },
  description: {
    required,
  },
}));

const v$ = useVuelidate(rules, eventData);
const title = ref(null);
const router = useRouter();
const isEdit = ref(false);

const backToPrevious = (msgData = "") => {
  router.push({
    name: "eventsTable",
    params: { msg: msgData },
  });
};

const submit = () => {
  v$.value.$touch();
  if (v$.value.$invalid) return;
  if (isEdit.value) {
    try {
      eventService.updateEvent({ ...eventData, id: props.eventId });
      backToPrevious(`Event ${eventData.name} updated successfully`);
      return;
    } catch (error) {
      console.error(error);
    }
  }

  try {
    eventService.createEvent(eventData);
    backToPrevious(`Event ${eventData.name} created`);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  title.value = !props.eventId ? "Create" : "Edit";
  eventData.clubID = props.clubId;
  if (props.eventId) {
    isEdit.value = true;
    eventService.getEvent(props.eventId).then((data) => {
      let eventDataFromApi = data.data.getEvents;
      eventData.name = eventDataFromApi.name;
      eventData.type = eventDataFromApi.type;
      eventData.discipline = eventDataFromApi.discipline;
      eventData.category = eventDataFromApi.category;
      eventData.starting_date = eventDataFromApi.starting_date;
      eventData.ending_date = eventDataFromApi.ending_date;
      eventData.location = eventDataFromApi.location;
      eventData.capacity = eventDataFromApi.capacity;
      eventData.price = eventDataFromApi.price;
      eventData.description = eventDataFromApi.description;
    });
  }
});
</script>
