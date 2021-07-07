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
    new Image({ $ul, ROUTER: this.ROUTER }); // 이미지 생성

    $ul.addEventListener("click", (e) => {
      // 클릭 이벤트 등록
      const images = e.target.closest(".image");
      if (!images) return;
      // e.stopPropagation();
      const $li = e.target.parentNode;
      // console.log($li.dataset.id);
      // console.log(e.target.parentNode);
      this.ROUTER.to("/detail", { id: $li.dataset.id, url: $li.dataset.url });
      // 쿼리스트링으로 엮은 다음에 Detail 클래스에서 쿼리스트링을 파싱하는게 좋을까?
      // 그러려면 라우터에 지정한 path 이름을 어떻게 해줘야 좋을까
      // 무조건 detail로 시작하게 하고 그 다음으로 id, url 값을 엮도록 해서 detail로 시작하는 주소면 Detail로 라우팅시키면 될까
    });
  }
}

export default IndexPage;
