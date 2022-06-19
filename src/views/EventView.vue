<template>
  <h2 class="header">Event</h2>
  <div class="profile_body">
    <div class="column">
      <div>
        <label>Name:</label>
        <p>{{ event.name }}</p>
      </div>
      <div>
        <label>Type:</label>
        <p>{{ event.type }}</p>
      </div>
      <div>
        <label>Category:</label>
        <p>{{ event.category }}</p>
      </div>
      <div>
        <label>Discipline:</label>
        <p>{{ event.discipline }}</p>
      </div>
      <div>
        <label>Price:</label>
        <p>{{ event.price }}</p>
      </div>
    </div>
    <div class="column">
      <div>
        <label>Starting date:</label>
        <p>{{ event.starting_date }}</p>
      </div>
      <div>
        <label>Ending date:</label>
        <p>{{ event.ending_date }}</p>
      </div>
      <div>
        <label>Location:</label>
        <p>{{ event.location }}</p>
      </div>
      <div>
        <label>Description:</label>
        <p>{{ event.description }}</p>
      </div>
      <div>
        <label>Capacity:</label>
        <p>{{ event.capacity }}</p>
      </div>
      <div v-if="canJoin">
        <button class="btn btn-info header" @click="join(event.id)">
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { clubService } from "@/services/club.service";
import { eventService } from "@/services/event.service";
import { memberService } from "@/services/member.service";
import { onBeforeMount, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const canJoin = ref(true);
const route = useRoute();
const event = reactive({
  id: "",
  name: "",
  type: "",
  location: "",
  capacity: "",
  discipline: "",
  description: "",
  starting_date: "",
  price: "",
  ending_date: "",
  category: "",
});

const idToJoin = ref("");

const loadEvent = async () => {
  const id = route.params.id;
  await eventService.getEvent(id).then((eventData) => {
    const data = eventData.data.getEvents;
    event.id = data.id;
    event.name = data.name;
    event.type = data.type;
    event.location = data.location;
    event.capacity = data.capacity;
    event.discipline = data.discipline;
    event.description = data.description;
    event.starting_date = data.starting_date;
    event.ending_date = data.ending_date;
    event.price = data.price;
    event.category = data.category;
  });
};

const join = async (eventId) => {
  const userId = await authService.getCurrentUserId();
  const isClub = await authService.isUserLinkedToClub(userId);
  const isMember = await authService.isUserLinkedToMember(userId);
  if (isClub) {
    const clubData = await clubService.findClubByLinkedUser(userId);
    const club = clubData.data.listClubs.items[0];
    idToJoin.value = club.id;
  }
  if (isMember) {
    const memberData = await memberService.findMemberByLinkedUser(userId);
    const member = memberData.data.listAssociatedMembers.items[0];
    idToJoin.value = member.id;
  }
  await eventService.addMemberToEvent(idToJoin.value, eventId);
  canJoin.value = false;
};

onBeforeMount(() => {
  loadEvent();
});
</script>
