<template>
  <div class="row">
    <div class="column left-column blue">
      <user-list />
    </div>
    <div class="column right-column green">
      <added-users />
    </div>
  </div>
</template>

<script>
import { nprogressMixin } from "@/mixins";
import UserList from "../components/UserList";
import AddedUsers from "../components/AddedUsers";

export default {
  name: "Home",
  components: {
    UserList,
    AddedUsers,
  },
  mixins: [nprogressMixin],
};
</script>
