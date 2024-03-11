import "./views/profile-page";
import "./views/user-collections";
import "./views/user-wishlist";
import "./views/smiski-collections";
import "./views/forum";
import "./views/smiski-world";

export default [
  { path: "/app/profile/:userid", component: "profile-page" },
  { path: "/app/profile/collection/", component: "user-collections" },
  { path: "/app/profile/wishlist/", component: "user-wishlist" },
  { path: "/app/smiski", component: "smiski-collections" },
  { path: "/app/forum", component: "chat-room" },
  { path: "/app", component: "smiski-world" },
  // { path: "(.*)", redirect: "/app" }
];