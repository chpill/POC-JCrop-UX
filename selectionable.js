(function(global) {

  function Page() {
  
    this.list = [];

  }

  Page.prototype.add = function(select) {
  
    this.list.push(select);
  
  };

  // view
  function Selectionable(options) {
  
    this.options = options;

    this.$el = this.options.el;

    this.$el.Jcrop({
      onChange:   this.onChange,
      onSelect:   this.onSelect,
      onRelease:  this.onRelease
    });
  }

  Selectionable.prototype.onChange = function() {
  
  };

  Selectionable.prototype.onSelect = function() {
  
  };

  Selectionable.prototype.onRelease = function(){
  
  };

})(this);

var page = new Page();

page.add(new Selectionable({page: page, el: $("#cv")}));

