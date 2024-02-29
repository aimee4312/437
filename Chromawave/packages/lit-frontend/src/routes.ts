import "./views/artist-page";
import "./views/music-page";
//import "./views/profile-page";

export default [
  {
    path: "/app/profile/:userid",
    component: "profile-page"
  },
  {
    path: "/app//destination/:dest([0-9]+)",
    component: "destination-page"
  },
  { path: "/app/:tour([0-9a-f]+)", component: "tour-page" },
  { path: "/app", component: "tour-page" },
  { path: "(.*)", redirect: "/app" }
];