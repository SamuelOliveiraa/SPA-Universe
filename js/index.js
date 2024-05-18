import Router from "./router.js";
import { universe, home, exploration, error } from "./utils.js";
const router = new Router();

universe.addEventListener("click", e => router.route(e));
home.addEventListener("click", e => router.route(e));
exploration.addEventListener("click", e => router.route(e));
error.addEventListener("click", e => router.route(e));

router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/exploration.html");
router.add(404, "./pages/error.html");

router.handle();
window.onpopstate = () => router.handle();
