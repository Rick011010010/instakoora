import { atom } from "recoil";

export const handlePlayerState = atom({
  key: "handleTeamState",
  default: false,
});

export const getPlayerState = atom({
  key: "getTeamState",
  default: {},
});

export const useSSRPlayerState = atom({
  key: "useSSRTeamState ",
  default: true,
});