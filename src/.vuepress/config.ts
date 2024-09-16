import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HHUCSClub",
  description: "HHU CS Club's doc",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
