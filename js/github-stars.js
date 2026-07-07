(function () {
  var starNodes = document.querySelectorAll(".github-stars[data-repo]");

  function formatStars(count) {
    if (!Number.isFinite(count)) {
      return null;
    }

    if (count >= 1000) {
      return (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k stars";
    }

    return count + (count === 1 ? " star" : " stars");
  }

  Array.prototype.forEach.call(starNodes, function (node) {
    var repo = node.getAttribute("data-repo");
    var fallback = Number(node.getAttribute("data-fallback"));

    if (Number.isFinite(fallback)) {
      node.textContent = formatStars(fallback);
    }

    if (!repo || !window.fetch) {
      return;
    }

    fetch("https://api.github.com/repos/" + repo)
      .then(function (response) {
        return response.ok ? response.json() : null;
      })
      .then(function (data) {
        if (data && Number.isFinite(data.stargazers_count)) {
          node.textContent = formatStars(data.stargazers_count);
        }
      })
      .catch(function () {});
  });
})();
