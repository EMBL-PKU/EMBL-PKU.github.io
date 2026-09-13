(function () {
  var TIMEOUT_MS = 4000;

  function formatStars(count) {
    if (!Number.isFinite(count)) return null;
    if (count >= 1000) {
      return (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k stars";
    }
    return count + (count === 1 ? " star" : " stars");
  }

  function fetchJson(url) {
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var options = controller ? { signal: controller.signal } : {};
    var timer = setTimeout(function () {
      if (controller) controller.abort();
    }, TIMEOUT_MS);
    return fetch(url, options).then(function (response) {
      clearTimeout(timer);
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    }).catch(function (error) {
      clearTimeout(timer);
      throw error;
    });
  }

  function starCountFromGithub(repo) {
    return fetchJson("https://api.github.com/repos/" + repo).then(function (data) {
      if (data && Number.isFinite(data.stargazers_count)) return data.stargazers_count;
      throw new Error("missing stargazers_count");
    });
  }

  function starCountFromShields(repo) {
    return fetchJson("https://img.shields.io/github/stars/" + repo + ".json").then(function (data) {
      var value = Number(data && data.value);
      if (Number.isFinite(value)) return value;
      throw new Error("missing shields value");
    });
  }

  function apply(node, count) {
    var text = formatStars(count);
    if (text) {
      node.textContent = text;
      node.title = count + " stars on GitHub";
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll(".github-stars[data-repo]"), function (node) {
    var repo = node.getAttribute("data-repo");
    var fallback = Number(node.getAttribute("data-fallback"));
    if (Number.isFinite(fallback)) apply(node, fallback);
    if (!repo || !window.fetch) return;

    starCountFromGithub(repo)
      .catch(function () { return starCountFromShields(repo); })
      .then(function (count) { apply(node, count); })
      .catch(function () { /* keep the static fallback */ });
  });
})();
