class Detail {
  constructor({ $target, ROUTER, OPTION }) {
    console.log(OPTION);
    this.$target = $target;
    this.ROUTER = ROUTER;
    this.id = OPTION.id;
    this.url = OPTION.url;
    this.setState();
  }

  setState() {
    this.render();
  }

  render() {
    console.log("here is detail");
    this.$target.innerHTML = "";
    const html = `
            <div>
                <p>id: ${this.id}</p>
                <img src=${this.url} />
            </div>
        `;
    this.$target.insertAdjacentHTML("beforeend", html);
  }
}

export default Detail;
