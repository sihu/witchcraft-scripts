var checkExist = setInterval(function() {
   if (!!document.querySelector('.ref-group-list')) {

      document.querySelectorAll('.event-annotation a').forEach(function(linkEl) {
        if(linkEl.text === 'ruby') {
          linkEl.style.color = 'red';
          linkEl.style.fontWeight = 'bold';
          linkEl.parentElement.style.border = '1px solid red';
          linkEl.parentElement.style.padding = '0px 1px';
        }
      });

      clearInterval(checkExist);
   }
}, 100);

