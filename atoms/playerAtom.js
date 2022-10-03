import { atom } from "recoil";

export const handlePlayerState = atom({
  key: "handlePlayerState",
  default: false,
});

export const getPlayerState = atom({
  key: "getPlayerStat",
  default: {},
});

export const useSSRPlayerState = atom({
  key: "useSSRPlayerState",
  default: true,
});