const API_SERVER_URL = process.env.NEXT_SERVER_API_URL || "";
const API_PUBLIC_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const isRoundedBorders: boolean = false;

export const MOBILE_MAX_SCREEN_WIDTH = 768;

export const HOME_LINK = "/";

export const dashboardNavItems = {
  home: {label: "Workspace", link: "/workspace"},
};

export const COOKIES_STORAGE_KEYS = {
  user: "user",
}

export const AUTH_FRONT_API = "/auth/api";

export const API = {
  graphQLSSRApi: API_SERVER_URL + "graphql",
  graphQLApi: API_PUBLIC_URL + "graphql",
}

export const BackgroundColors = {
  MintLeaf: "#00b894",
  BrightYellow: "#fdcb6e",
  RobinsEggBlue: "#00cec9",
  ExodusFruit: "#6c5ce7",
  SizzlingRed: "#f53b57",
  YueGuangLanBlue: "#1e3799",
  ReefEncounter: "#079992",
  IceLandPoppy: "#fa983a",
  Dupain: "#60a3bc",
  VeryBerry: "#B53471",
  TurkishAqua: "#006266",
  RadiantYellow: "#F79F1F",
}
