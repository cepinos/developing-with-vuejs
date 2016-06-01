var Notes = {
  filter: '',
  current: {message: ''},
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
      var newNote = {
        message: 'New note'
      };
      this.list.push(newNote);
      this.current = newNote;
    },
    edit: function(index){
      // FIXME: get note clicked
      this.current = ______;
    },
    remove: function(index){
      this.list.splice(index, 1);
      this.current = {}
    }
  }
})