<template>
  <h1 class="clubForm mt-4">{{ title }} Club</h1>
  <form
    class="col-6 p-3 clubForm"
    style="background-color: var(--amplify-colors-brand-primary-20)"
  >
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="name">Club name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
      </div>
      <div class="form-group col-6">
        <label for="owner">Owner</label>
        <input
          type="text"
          class="form-control"
          id="owner"
          placeholder="Owner name"
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="inputEmail4">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>
      <div class="form-group col-6">
        <label for="inputEmail4">Website</label>
        <input
          type="website"
          class="form-control"
          id="website"
          placeholder="Website"
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="inputCity">City</label>
        <input
          type="text"
          class="form-control"
          placeholder="City"
          id="inputCity"
        />
      </div>
      <div class="form-group col-6">
        <label for="phone">Phone</label>
        <input
          type="text"
          class="form-control"
          placeholder="Phone"
          id="phone"
        />
      </div>
    </div>
    <div class="form-row d-flex justify-content-center">
      <div class="form-group col-12">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-info mt-3 mx-4">{{ title }}</button>
  </form>
</template>

<script setup>
import { reactive, onBeforeMount, ref } from "vue";

const props = defineProps({
  clubId: String,
});

const data = reactive({
  name: "",
  address: "",
  city: "",
  owner: "",
  phone: "",
  website: "",
  userId: "",
  email: "",
});

const title = ref(null);

onBeforeMount(() => {
  title.value = !props.clubId ? "Create" : "Edit";
});
</script>

<style>
.clubForm {
  margin-left: 25%;
}
</style>
