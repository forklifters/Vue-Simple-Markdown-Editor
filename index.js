const md = window.markdownit();

const vm = new Vue({
  el: "#root",
  data: {
    source: ""
  },
  computed: {
    compiled: function() {
      return md.render(this.source);
    }
  }
})
