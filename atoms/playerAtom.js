import { atom } from "recoil";

export const handlePlayerState = atom({
  key: "handlePlayerState",
  default: false,
});

export const getPlayerState = atom({
  key: "getTeamState",
  default: {},
});

export const useSSRPlayerState = atom({
  key: "useSSRPlayerState",
  default: true,
});