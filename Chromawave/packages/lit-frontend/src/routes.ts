import "./views/profile-page";
import "./views/chroma-wave";

export default [
  { path: "/app/profile/:userid", component: "profile-page" },
  //{ path: "(.*)", redirect: "/app" },
];