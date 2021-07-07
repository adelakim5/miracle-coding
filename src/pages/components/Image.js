import eventController from "/util/eventController.js";
import request from "/util/commons.js";

class Image {
  constructor({ $ul }) {
    this.$ul = $ul;
    this.setState();
  }

  setState() {
    const { throttle } = eventController(this.setData, this.render);
    throttle();
  }

  setData = async () => {
    const images = await request();
    localStorage.setItem("imagesData", JSON.stringify(images));
  };

  render() {
    this.$ul.innerText = localStorage.getItem("imagesData");
  }
}

export default Image;
