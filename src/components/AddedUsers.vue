<template>
  <div class="added-users">
    <input v-model="searchAddedUser" class="user-search-input" placeholder="Введите имя..." />
    <div v-for="user in filteredSecondList" :key="user.id" class="user">
      {{ user.name }}
      <button
        type="button"
        class="remove-user"
        @click="removeFromSecondUserList(user.id)"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { nprogressMixin } from "@/mixins";

export default {
  name: "AddedUsers",
  components: {},
  mixins: [nprogressMixin],
  data() {
    return {
      searchAddedUser: ""
    };
  },
  computed: {
    ...mapState(["secondUserList"]),
    filteredSecondList() {
      return this.secondUserList.filter(item => {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.searchAddedUser.toLowerCase()) !== -1
        );
      });
    }
  },
  methods: {
    ...mapMutations(["removeFromSecondUserList"])
  }
};
</script>