new Vue({
  el: "#app",
  data: {
    title: "FYI",
    text: "For your information",
    text1: "For your information",
    text2: "Fuck You Idiot",
  },
  methods: {
    changeText() {
      this.text = this.text == this.text1 ? this.text2 : this.text1;
    },
  },
});
