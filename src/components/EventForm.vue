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
          placeholder="First name"
        />
        <div v-if="v$.first_name.$error" class="error">
          {{ v$.first_name.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="type">Type</label>
        <select id="type" class="form-select">
          <option selected>TRAINING</option>
          <option>CHAMPIONSHIP</option>
          <option>SEMINAR</option>
        </select>
        <div v-if="v$.last_name.$error" class="error">
          {{ v$.last_name.$errors[0].$message }}
        </div>
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="discipline">Discipline</label>
        <select id="discipline" class="form-select">
          <option selected>KUMITE</option>
          <option>KATA</option>
          <option>TRADITIONAL_KARATE</option>
        </select>
        <div v-if="v$.last_name.$error" class="error">
          {{ v$.last_name.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="category">Category</label>
        <select id="category" class="form-select">
          <option selected>ALL</option>
          <option>BEGGINERS</option>
          <option>CADETS_JNR_UNDER21</option>
          <option>SENIOR</option>
        </select>
        <div v-if="v$.last_name.$error" class="error">
          {{ v$.last_name.$errors[0].$message }}
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
        />
        <div v-if="v$.birth_date.$error" class="error">
          {{ v$.birth_date.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="ending_date">Ending date</label>
        <input
          type="date"
          class="form-control"
          id="ending_date"
          placeholder="Ending date"
        />
        <div v-if="v$.birth_date.$error" class="error">
          {{ v$.birth_date.$errors[0].$message }}
        </div>
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
        />
        <div v-if="v$.first_name.$error" class="error">
          {{ v$.first_name.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="capacity">Capacity</label>
        <input
          type="text"
          class="form-control"
          id="capacity"
          placeholder="Capacity of the event"
        />
        <div v-if="v$.first_name.$error" class="error">
          {{ v$.first_name.$errors[0].$message }}
        </div>
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="price">Price</label>
        <input
          type="text"
          class="form-control"
          id="price"
          placeholder="Price of the event"
        />
        <div v-if="v$.first_name.$error" class="error">
          {{ v$.first_name.$errors[0].$message }}
        </div>
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
        ></textarea>
        <div v-if="v$.first_name.$error" class="error">
          {{ v$.first_name.$errors[0].$message }}
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
import {
  required,
  minLength,
  maxLength,
  helpers,
  email,
} from "@vuelidate/validators";

const props = defineProps({
  eventId: String,
});

const eventData = reactive({
  first_name: null,
  last_name: null,
  birth_date: null,
  gender: "MALE",
  clubID: null,
  address: null,
  city: null,
  phone: null,
  userId: null,
  email: null,
});

const phoneRegex = helpers.regex(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/
);

const phoneValidator = helpers.withMessage("Phone not valid", phoneRegex);

const rules = computed(() => ({
  first_name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(40),
  },
  last_name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(40),
  },
  address: {
    required,
    minLength: minLength(10),
    maxLength: maxLength(100),
  },
  city: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  gender: {
    required,
  },
  phone: {
    required,
    phoneValidator,
  },
  clubID: {
    required,
  },
  birth_date: {
    required,
  },
  email: {
    email,
  },
}));

const v$ = useVuelidate(rules, eventData);
const title = ref(null);
const router = useRouter();
const isEdit = ref(false);
const showModal = ref(false);

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
      memberService.updateMember({ ...eventData, id: props.memberId });
      backToPrevious(`Member ${eventData.first_name} updated successfully`);
      return;
    } catch (error) {
      console.error(error);
    }
  }

  try {
    memberService.createMember(eventData);
    backToPrevious(`Member ${eventData.first_name} created`);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  title.value = !props.eventId ? "Create" : "Edit";
  eventData.clubID = props.clubId;
  if (props.eventId) {
    isEdit.value = true;
    memberService.getMember(props.memberId).then((data) => {
      let eventDataFromApi = data.data.getAssociatedMembers;
      eventData.first_name = eventDataFromApi.first_name;
      eventData.last_name = eventDataFromApi.last_name;
      eventData.email = eventDataFromApi.email;
      eventData.city = eventDataFromApi.city;
      eventData.phone = eventDataFromApi.phone;
      eventData.address = eventDataFromApi.address;
      eventData.userId = eventDataFromApi.userId;
      eventData.gender = eventDataFromApi.gender;
      eventData.clubID = eventDataFromApi.clubID;
      eventData.birth_date = eventDataFromApi.birth_date;
    });
  }
});
</script>
