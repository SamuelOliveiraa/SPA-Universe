const home = document.querySelector("nav a:nth-child(1)");
const universe = document.querySelector("nav a:nth-child(2)");
const exploration = document.querySelector("nav a:nth-child(3)");
const error = document.querySelector("nav a:nth-child(4)");
const app = document.querySelector("#app");

universe.addEventListener("click", e => route(e));
home.addEventListener("click", e => route(e));
exploration.addEventListener("click", e => route(e));
error.addEventListener("click", e => route(e));

const routes = {
  "/": "./pages/home.html",
  "/universe": "./pages/universe.html",
  "/exploration": "./pages/exploration.html",
  404: "./pages/error.html"
};

function route(e) {
  e.preventDefault();

  const href = e.target.href;
  window.history.pushState({}, "", href);
  handle();
}

function handle() {
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];
  fetch(route)
    .then(data => data.text())
    .then(html => (app.innerHTML = html));
}
handle();
