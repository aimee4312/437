import "./views/profile-page";
import "./views/user-collections";
import "./views/user-wishlist";
import "./views/smiski-collections";
import "./views/smiski-world";
import "./views/home";
import "./views/forum";

export default [
  { path: "/app/profile/:userid", component: "profile-page" },
  { path: "/app/collection", component: "user-collections" },
  { path: "/app/wishlist", component: "user-wishlist" },
  { path: "/app/smiski", component: "smiski-collection" },
  { path: "/app/forum", component: "chat-room" },
  { path: "/app", component: "home-page" },
  { path: "(.*)", redirect: "/app" }
];