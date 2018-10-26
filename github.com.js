// @include _config.js
callIfEnabled('github.com', function () {
  (function () {
    if (window.location.href.includes('pull')) {
      const featureTag = document.querySelector('.commit-ref.head-ref');
      const redmineId = featureTag.textContent.match(/\d+/)[0];
      const redmineUrl = `https://redmine.renuo.ch/issues/${redmineId}`;
      featureTag.innerHTML = `<a href="${redmineUrl}" target="_blank">${featureTag.textContent}</a>`
    }
  })();
});
