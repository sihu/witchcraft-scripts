// @include _config.js
callIfEnabled('github.com', function () {
  (function () {
    if (window.location.href.includes('pull')) {
      const featureTag = document.querySelector('.commit-ref.head-ref');
      const redmineId = featureTag.textContent.match(/\d+/)[0];
      const redmineUrl = `https://redmine.renuo.ch/issues/${redmineId}`;
      featureTag.innerHTML = `<a href="${redmineUrl}" target="_blank">${featureTag.textContent}</a>`

      const moreVisibleFileRemoval = "<span style='color:red;'>Watch out! 👀 File deleted!!!</span>";
      document.querySelectorAll('span[aria-label="Binary file removed"').forEach(function(el) { el.innerHTML += moreVisibleFileRemoval })
    }
  })();
});
