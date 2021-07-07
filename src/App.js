import Router from "/util/Router.js";
import IndexPage from "./pages/IndexPage.js";
import MainPage from "./pages/MainPage.js";

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.ROUTER = new Router({ $target });

    this.pages = {
      "/": IndexPage,
      "/main": MainPage,
    };

    this.setState();
  }

  setState() {
    for (const [path, component] of Object.entries(this.pages)) {
      this.ROUTER.setPath([path, component]);
    }

    this.render();
  }

  render() {
    this.ROUTER.to("/");
  }
}

export default App;
