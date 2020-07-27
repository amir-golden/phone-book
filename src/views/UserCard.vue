<template>
  <div class="row">
    <div class="column left-column blue">
      <button class="main-page-link" type="button" @click="goToMainPage">На главную</button>
      <div v-if="user !== null && typeof user !== 'undefined'" class="user-card">
        <h3>{{ user.name }}</h3>
        <p class="phone-number">Номер телефона: {{ user.phone }}</p>
        <p class="address">Адрес: {{ user.address }}</p>
        <button
          v-if="!secondUserList.some((item) => item.id === user.id)"
          type="button"
          class="add-user"
          @click="addToSecondUserList(user)"
        ></button>
        <button
          v-if="secondUserList.some((item) => item.id === user.id)"
          type="button"
          class="remove-user"
          @click="removeFromSecondUserList(user.id)"
        ></button>
      </div>
    </div>
    <div class="column right-column green">
      <added-users />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { nprogressMixin } from "@/mixins";
import AddedUsers from "../components/AddedUsers";

export default {
  name: "UserCard",
  components: { AddedUsers },
  mixins: [nprogressMixin],
  data() {
    return {
      user: null
    };
  },
  computed: {
    ...mapState(["userList", "secondUserList"])
  },
  mounted() {
    const userId = parseInt(this.$route.params.id);
    this.user = this.userList.find(item => item.id === userId);
  },
  methods: {
    ...mapMutations(["addToSecondUserList", "removeFromSecondUserList"]),
    goToMainPage() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
