import NProgress from "nprogress";

const formatMixins = {
  methods: {
    replaceIfEmpty(value, holder = "") {
      if (typeof value === "undefined" || value === null) {
        return holder;
      }
      return value;
    },
  },
};

const nprogressMixin = {
  mounted() {
    this.$nextTick(() => {
      NProgress.done();
    });
  },
};

export { formatMixins, nprogressMixin };
