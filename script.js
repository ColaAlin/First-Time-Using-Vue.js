const app = Vue.createApp({
  data() {
    return {
      userName: "Alin Cristian Cola",
      task: "happy coding",
    };
  },
  directives: {
    highlight: {
      mounted(el) {
        el.style.border = "2px solid red";
        el.style.backgroundColor = "salmon";
        el.style.borderRadius = "20px";
        el.style.fontSize = "20px";
        el.style.fontFamily = "Monospace";
        el.style.fontWeight = "bold";
        el.style.color = "white";
      },
    },
  },
}).mount("#app");

console.log(app.userName);
