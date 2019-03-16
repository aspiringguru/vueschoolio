Vue.component("plan", {
  template: "#plan-template",
  //props: ["name"]
  props: {
    name: String
  }
});

new Vue({
  el: "#app",
  data: {
    plans: ["The Single", "The Curious", "The Addict"]
  }
});
