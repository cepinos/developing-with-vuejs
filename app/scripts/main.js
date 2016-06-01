var Notes = {
  filter: '',
  // FIXME: Add var to set message for new notes
  ______: '',
  list: [
    {message: 'message 1'},
    {message: 'message 2'},
    {message: 'message 3'},
    {message: 'message 4'},
    {message: 'message 5'},
    {message: 'message 6'}
  ]
}

new Vue({
  el: '#app',
  data: Notes,
  methods: {
    add: function(){
      this.list.push({
        // FIXME: Set message for new notes
        message: this.______
      })
    }
  }
})