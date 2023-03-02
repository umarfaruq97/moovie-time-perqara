// plugins/aos.js
// import Aos from "aos";
// import "aos/dist/aos.css";
// export default ({ App }) => {
//   App.Aos = new Aos.init({}); // or any other options you need
// };
import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(AOS.init({}));