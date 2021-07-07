import eventController from "/util/eventController.js";
import request from "/util/commons.js";

class Image {
  constructor({ $ul }) {
    this.$ul = $ul;
    this.setState();
  }

  setState() {
    const { throttle } = eventController(this.setData, this.render.bind(this)); // this로 bind를 안해주면 Image가 this로 잡히지 않음. 왜일까?
    throttle();
  }

  setData = async () => {
    const images = await request();
    localStorage.setItem("imagesData", JSON.stringify(images));
  };

  render() {
    // 화살표 함수로 하면 this가 바로 상위에, 그렇지 않으면 undefined를 잡음. 근데 class 내부인데 대체 왜?
    // console.log(this);
    this.$ul.innerText = "";
    const $imageData = document.createElement("div");
    $imageData.innerText = localStorage.getItem("imagesData");
    this.$ul.append($imageData);
  }
}

export default Image;
