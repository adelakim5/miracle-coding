import eventController from "/util/eventController.js";
import request from "/util/commons.js";

class Image {
  constructor({ $ul, ROUTER }) {
    this.$ul = $ul;
    this.ROUTER = ROUTER;
    this.setState();
  }

  setState() {
    const { throttle } = eventController(this.setData, this.render.bind(this));
    throttle();
  }

  setData = async () => {
    const images = await request();
    localStorage.setItem("imagesData", JSON.stringify(images));
  };

  render() {
    this.$ul.innerText = "";
    const imageData = JSON.parse(localStorage.getItem("imagesData"));
    imageData.forEach((data) => {
      const { id, url } = data;

      const $li = document.createElement("li");
      $li.dataset.id = id;
      $li.dataset.url = url;
      $li.className = "image";

      const $id = document.createElement("p");
      $id.innerText = id;

      const $img = document.createElement("img");
      $img.src = url;

      $li.append($id, $img);
      this.$ul.append($li);
    });
  }
}

export default Image;
