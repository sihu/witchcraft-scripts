// @include _config.js
callIfEnabled('ruby-forum.com', function() {

  setTimeout(function(){
    let elem = document.querySelector('#discourse-modal.gate');
    elem.parentNode.removeChild(elem);
    elem = document.querySelector('.modal-backdrop');
    elem.parentNode.removeChild(elem);
  }, 1000);

});
