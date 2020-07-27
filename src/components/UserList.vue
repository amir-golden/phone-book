<template>
  <div class="all-users">
    <input v-model="searchUser" class="user-search-input" placeholder="Введите имя..." />
    <div v-for="user in userList" :key="user.id" class="user">
      <span class="username" @click="openUserCard(user.id)">{{ user.name }}</span>
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
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "UserList",
  components: {},
  data() {
    return {
      searchUser: ""
    };
  },
  computed: {
    ...mapState(["userList", "secondUserList"])
  },
  watch: {
    searchUser(newValue) {
      this.getUserList({ params: { searchUser: newValue } });
    }
  },
  methods: {
    ...mapMutations(["addToSecondUserList", "removeFromSecondUserList"]),
    ...mapActions(["getUserList"]),
    openUserCard(userId) {
      this.$router.push({ name: "UserCard", params: { id: userId } });
    }
  }
};
</script>