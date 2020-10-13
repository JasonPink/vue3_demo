import Carousel from "./Carousel"
import CarItem from "./Carousel/Item.vue"

let JSPP_UI = {};

JSPP_UI.install = function(Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
}

export default JSPP_UI;