import {Main, Profile} from "@pages";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Main
  },
  {
    path: "/profile",
    component: Profile
  }
];
