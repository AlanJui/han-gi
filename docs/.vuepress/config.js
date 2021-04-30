module.exports = {
  title: "漢語學習筆記",
  description: "學習使用河洛話（古漢語），誦讀詩、詞與古文。",
  // base: "/han-gi/",
  base: "/",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "工具", link: "/tools/" },
    ],
    sidebar: [
      "/",
      "/D01_OS/",
      "/D02_Terminal/",
      "/D03_DevEnvironments/",
      "/D04_DevTools/",
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
