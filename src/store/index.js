import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
    secondUserList: [],
  },
  mutations: {
    setUserList(state, data) {
      state.userList = data;
    },
    addToSecondUserList(state, data) {
      state.secondUserList = [...state.secondUserList, data];
    },
    removeFromSecondUserList(state, id = null) {
      if (id !== null) {
        const list = state.secondUserList;
        const index = state.secondUserList.findIndex((item) => item.id === id);

        state.secondUserList = [
          ...list.slice(0, index),
          ...list.slice(index + 1),
        ];
      } else {
        throw new Error("Не задан ID элемента");
      }
    },
  },
  actions: {
    getUserList({ commit }, payload = {}) {
      const { params = {} } = payload;

      return Promise.resolve(
        new Promise((resolve) => {
          setTimeout(() => {
            let response = [
              {
                id: 11,
                name: "Юрий Петров",
                phone: "+7 (999) 999 99 99",
                address: "Россия, г. Москва, ул. Некрасова",
              },
              {
                id: 205,
                name: "Владимир Семёнов",
                phone: "+7 (999) 999 99 98",
                address: "Россия, г. Санкт-Петербург, ул. Пролетарская",
              },
              {
                id: 304,
                name: "Василий Кузьмин",
                phone: "+7 (999) 999 99 97",
                address: "Россия, г. Казань, ул. Кулагина",
              },
            ];

            if (params.searchUser && params.searchUser.length > 0) {
              response = response.filter(
                (item) =>
                  item.name
                    .toLowerCase()
                    .indexOf(params.searchUser.toLowerCase()) !== -1
              );
            }

            commit("setUserList", response);
            resolve(response);
          }, 300);
        })
      );
    },
  },
  modules: {},
});
