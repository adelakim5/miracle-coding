class Router {
  constructor({ $target }) {
    this.$target = $target;

    this.entryPoint = {
      "/": null,
      "/main": null,
      "/detail": null,
    };

    window.addEventListener("popstate", (e) => {
      new this.entryPoint[e.state.Page]({ $target: this.$target, ROUTER: this });
    });
  }

  setPath([path, component]) {
    this.entryPoint[path] = component;
  }

  link(path, option = null) {
    const $Link = document.createElement("li");
    $Link.innerText = path;
    $Link.addEventListener("click", () => {
      this.to(path, option);
    });

    return $Link;
  }

  to(path, option = null) {
    window.history.pushState({ Page: path }, "", path);
    if (!option) new this.entryPoint[path]({ $target: this.$target, ROUTER: this });
    else new this.entryPoint[path]({ $target: this.$target, ROUTER: this, OPTION: option });
  }
}

export default Router;
