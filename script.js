const app = Vue.createApp({
    data() {
      return {
          userName: "Alin Cristian Cola",
          task: "happy coding"
      };
    },
  }).mount("#app");

  console.log(app.userName);
