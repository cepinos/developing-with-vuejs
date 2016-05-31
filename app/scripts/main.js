(function () {'use strict';


function idGenerator(){
  return 'note_' + new Date().getTime();
}

function Note(text){
  this.id = idGenerator();
  this.text = text || '';
  this.createdAt = new Date();
  this.updatedAt = this.createdAt;
}

function Notes(){
  this.list = [];
  this.currentNote = {};
  this.load();
}

Notes.prototype.add = function(note){
    this.list.unshift(note);
    this.save();
  }

Notes.prototype.save = function(){
  var string = JSON.stringify(this.list);
  localStorage.setItem('Notes', string);
}

Notes.prototype.delete = function(id){
  var noteIndex;

  if (this.count() === 0) return;

  noteIndex = this.list.findIndex(function(note){
    return note.id === id;
  });

  if(noteIndex !== -1){
    this.list.splice(noteIndex, 1);
  }

  this.save();
}

Notes.prototype.load = function(){
  var string = localStorage.getItem('Notes');
  this.list = JSON.parse(string) || [];
}

Notes.prototype.count = function(){
  return this.list.length;
}

// Debug mode
Vue.config.debug = true;

/**
 * Filter for ellipsis
 */
Vue.filter('ellipsis', function(value){
  return value.length > 20 ? value.slice(0,20) + '...' : value;
});


/**
 * Render notes using Vue
 */
var notes = new Notes();
new Vue({
  el: '#app',
  data: {
    list: notes.list,
    currentNote: notes.currentNote,
    search: ''
  },
  methods: {
    add: function () {
      var note = new Note();
      notes.add(note);

      this.search = '';
      this.edit(0);
    },
    remove: function (id) {
      notes.delete(id);

      this.currentNote = {};
      this.edit(0);
    },
    edit: function(index){
      if( notes.count() <= 0 ) return;

      this.currentNote = this.list[index];

      // Focus text area
      Vue.nextTick(function(){
        this.$els.editNote.focus();
      }.bind(this));
    },
    save: function(index){
      notes.save();
    },
    current: function(id){
      if(!this.currentNote) return '';

      return this.currentNote.id === id ? 'notes__note--selected' : '';
    }
  },
  ready: function() {
    this.edit(0);
  }
});
}());
//# sourceMappingURL=app.js.map