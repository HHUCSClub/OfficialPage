import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  [
    {
      // 必要的，分组的标题文字
      text: "Home",
      // 可选的, 分组标题对应的图标
      icon: "home",
      // 可选的, 分组标题对应的链接
      link: "/",
    }, {
      text: "Introduction",
      icon: "laptop-code",
      link: "/Introduction/",
      prefix: "/Introduction/",
      collapsible: true,
      // 必要的，分组的子项目
      children: [
        "/Introduction/1_official",
        "/Introduction/2_official"
      ],
    }, {
      text: "Learning Map",
      icon: "home",
      link: "/Learning%20Map/",
      prefix: "/Learning%20Map/",
      collapsible: true,
      // 必要的，分组的子项目
    }, {
      text: "Story",
      icon: "home",
      link: "/Story/",
      prefix: "/Story/",
      collapsible: true,
      // 必要的，分组的子项目
      children: [
        "/Story/Board",
        "/Story/History",
      ],
    }, {
      text: "Contributor",
      icon: "home",
      link: "/Contributor/",
    }, {
      text: "Join Us",
      icon: "home",
      link: "/Join%20Us/",
      collapsible: true,
      children: [
        "/Join%20Us/CampusRelation",
      ],
    },

  ]
);
