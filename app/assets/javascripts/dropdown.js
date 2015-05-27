$(function() {

  DropDown.prototype = {
    initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
          console.log("adds active");
          $(this).toggleClass('active');
          return false;
      });
      obj.opts.on('click',function(){
              var opt = $(this);
              obj.val = opt.text();
              obj.index = opt.index();
              obj.placeholder.text(obj.val);
          });
      },
      getValue : function() {
          return this.val;
      },
      getIndex : function() {
          return this.index;
      }
  }  

  var dd = new DropDown( $('#dd') );
  var dd = new DropDown( $('#dd-2') );

  $(document).click(function() {
    // all dropdowns
    console.log("removes active");
    $('.wrapper-dropdown').removeClass('active');
  });

  function DropDown(el) {
      this.dd = el;
      this.placeholder = this.dd.children('span');
      this.opts = this.dd.find('ul.dropdown > li');
      this.val = '';
      this.index = -1;
      this.initEvents();
  }

});