const app = Vue.createApp({
    data() {
      return {
        userName: "Alin Cristian Cola",
      };
    },
  }).mount("#app");

  console.log(app.userName);
