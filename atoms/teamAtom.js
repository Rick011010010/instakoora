import { atom } from "recoil";

export const handleTeamState = atom({
  key: "handleTeamState",
  default: false,
});

export const getTeamState = atom({
  key: "getTeamState",
  default: {},
});

export const useSSRTeamState = atom({
  key: "useSSRTeamState ",
  default: true,
});