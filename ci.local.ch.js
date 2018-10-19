(function() {
  setTimeout(function(){
    document.querySelectorAll('[data-state="defective"] .retry').forEach(function(btn) {
      setTimeout(function(){
        btn.click();
      }, 50);
    });
  }, 1000);
})();

