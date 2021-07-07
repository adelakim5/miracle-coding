import Image from "./components/Image.js";

class IndexPage {
  constructor({ $target, ROUTER }) {
    this.$target = $target;
    this.ROUTER = ROUTER;
    this.setState();
  }

  setState() {
    this.render();
  }

  render() {
    this.$target.innerHTML = "";

    const $Index = `
        <h1>인덱스입니다.</h1>
        <ul id="images"></ul>
      `;

    this.$target.insertAdjacentHTML("beforeend", $Index);
    this.didMount();
  }

  didMount() {
    const $ul = this.$target.querySelector("ul#images");
    // $ul.append(this.ROUTER.link("/main"));
    new Image({ $ul });
  }
}

export default IndexPage;
