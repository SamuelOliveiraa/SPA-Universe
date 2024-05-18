export default class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(e) {
    e.preventDefault();

    const href = e.target.href;
    window.history.pushState({}, "", href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then(data => data.text())
      .then(html => (document.querySelector("#app").innerHTML = html));
  }
}
