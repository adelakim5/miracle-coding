class Router {
  constructor({ $target }) {
    this.$target = $target;

    this.entryPoint = {
      "/": null,
      "/main": null,
    };

    window.addEventListener("popstate", (e) => {
      new this.entryPoint[e.state.Page]({ $target: this.$target, ROUTER: this });
    });
  }

  setPath([path, component]) {
    this.entryPoint[path] = component;
  }

  link(path) {
    const $Link = document.createElement("li");
    $Link.innerText = path;
    $Link.addEventListener("click", () => {
      this.to(path);
    });

    return $Link;
  }

  to(path) {
    window.history.pushState({ Page: path }, "", path);
    new this.entryPoint[path]({ $target: this.$target, ROUTER: this });
  }
}

export default Router;
