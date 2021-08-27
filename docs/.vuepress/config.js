module.exports = {
  title: "漢語學習筆記",
  description: "學習使用河洛話（古漢語），誦讀詩、詞與古文。",
  base: "/han-gi/",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "工具", link: "/tools/" },
      { text: "筆記", link: "https:\/\/alanjui.github.io/my-blog" },
    ],
    sidebar: [
      "/d01/",
      "/d02/",
      "/d03/",
      "/d04/",
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@pict": "/Users/alanjui/workspace/docs/han-gi/docs/.vuepress/public/assets/img"
      }
    }
  }
};
