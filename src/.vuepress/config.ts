import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/hhucsclub_test/",

  lang: "zh-CN",
  title: "HHUCSClub",
  description: "HHU CS Club's doc",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
