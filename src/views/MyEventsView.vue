<template>
  <h1 class="header">My events</h1>
  <div class="card-wrapper">
    <div class="event" v-for="event in events">
      <label for="name">Name</label>
      <p>{{ event.events.name }}</p>
      <label for="name">Type</label>
      <p>{{ event.events.type }}</p>
      <label for="name">Discipline</label>
      <p>{{ event.events.discipline }}</p>
      <label for="name">Category</label>
      <p>{{ event.events.category }}</p>
      <label for="name">Date</label>
      <p>{{ event.events.starting_date }}</p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { authService } from "@/services/auth.service";
import { memberService } from "@/services/member.service";
import { eventService } from "@/services/event.service";

const events = ref(null);

onBeforeMount(async () => {
  const currentUserId = await authService.getCurrentUserId();
  const memberData = await memberService.findMemberByLinkedUser(currentUserId);
  const memberId = memberData.data.listAssociatedMembers.items[0].id;
  await eventService.getEventsOfMember(memberId).then((eventsData) => {
    events.value = eventsData.data.listAssociatedMembersEvents.items;
  });
});
</script>

<style>
.event {
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #eee;
}
</style>
