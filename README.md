# 漢語學習筆記

聽說現在的「台語」，傳承自「河洛話」。因此，古漢語裡許多的要素，被保存在台語中。

幼時，因家居南部的高雄市，所以，即便血液有一半是「外省來台第二代」的我，台語在
聽、說方面，也是相當「輪轉」的；不過，我想「黃俊雄」與「楊麗花」，也是功不可殁
吧！？

## 安裝作業

1. 下載文件模版。

```
cd ~/workspace/docs
git clone git@github.com:AlanJui/han-gi.git
```

2. 安裝 npm 套件

```
cd my-docs
npm install
```

## 版本管控設定作業

發行文件前，需透過 VuePress 執行「建構（Build）作業」。該作業的產出，將置放於
目錄路徑處： docs/.vuepress/dist/ 。

故版本管控工具 git ，需進行「設定」， 要求 git 怱略產出目錄，及其之下的所有檔案。

1. 編輯 .gitignore 檔案。

```
$ vim .gitignore
```

2. 新增設定，要求略去 dist 目錄。

.gitignore 檔案：

```
....
docs/.vuepress/dist/
```

## 發行設定作業

為避免 Static files（如：CSS 檔），發生「參照網址」錯亂之事，記得務必設定
docs/.vuepress/config.js 檔案中的 `base`，將 GitHub Repo 的名稱填入。

docs/.vuepress/config.js:

```
module.exports = {
  title: "Manjaro KDE 開發環境建置指引",
  description: "如何在 Manjaro KDE 電腦建置開發環境",
  base: "/my-docs/",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "作業系統", link: "/D01_OS/" },
      { text: "終端機", link: "/D02_Terminal/" },
      { text: "開發環境", link: "/D03_DevEnvironments/" },
      { text: "開發工具", link: "/D04_DevTools/" },
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
}
```

## 編輯作業

1. 啟動「編輯預覽」功能。

```
yarn run editing
```

```
npm run docs:dev
```

2. 啟動「編輯器」，執行編輯作業。

```
nvim
```

## 組建作業

1. 執行「文件發行建構作業」。

```
yarn docs:dev
```

```
npm run docs:dev
```

2. 預覽建構作業成品。

```
yarn docs:dist
```

```
npm run docs:dist
```

3. 使用「瀏覽器」觀察 URL： http://localhost:8080/ 輸出的網頁。

## 發佈作業

透過 publish.sh 指令，將文章發佈至 GitHub Repo 專屬的 GitHub Pages 。

GitHub Repo 的網址： https://<username>.github.io/<repository>/。

完成「發佈作業」的文件，可在網址：https://<username>.github.io/<repository>/
瀏覽。

```
$ ./publish.sh
```

::: tip
記得！此種佈署方式，記得需修改 `.vuepress/config.sys` 設定，得加上 `base: '/my-vuepress-blog/',`
:::

若需手動作業，請依下列步驟執行。

1.  執行文件組建指令。

```
$ yarn docs:build
```

2.  於組建產出目錄，建置 Git 容器。

```
$ cd docs/.vuepress/dist
$ git init
$ git add -A
$ git commit -m 'deploy'
```

3.  以 git 指令，將產出送入 GitHub 端容器內的 gh-pages 分支。

```
git push -f git@github.com:<username>/<repository>.git master:gh-pages
```

4. 回到專案根目錄。

```
cd -
```

## 異常排除

原先可正常執行之「佈署作業」，突然再也無法正常運作。在 GitHub 的容器網站，
發垷如下之錯誤訊息。

```
 Your site is having problems building: No /docs folder was found to build GitHub Pages. Check the source setting for this repository. For more information, see https://docs.github.com/github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder.
```

【異常矯正提示】： [No /docs folder was found to build GitHub Pages](https://docs.github.com/github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)

變更 Repo/settings/pages/GitHub Pages:

 - Branch: master (原設定：gh-pages )
 - Folers: /docs  (原設定：/)

Source
Your GitHub Pages site is currently being built from the /docs folder in the master branch.[Learn more](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).


## 參考文件

[VuePress / Deploying / GitHub Pages](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
