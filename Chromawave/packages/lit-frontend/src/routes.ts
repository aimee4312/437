import "./views/profile-page";
import "./views/saved-songs";

export default [
  { path: "/app/profile/:userid", component: "profile-page" },
  { path: "/app/saved-songs/:userid", component: "saved-songs" },
  { path: "(.*)", redirect: "/app" },
];