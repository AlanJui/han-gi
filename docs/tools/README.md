---
sidebar: auto
---

# 應用工具

## 漢字加註音標

### [📖 字咍台語IVS字型輸入工具](https://buttaiwan.github.io/taigivs/)

輸入「漢字」後，系統能依使用者的設定，自動為漢字加註：「方音注音符號」、「台羅
拚音音標」。

![](./picts/zi-dong-jia-zhu-yin.png)

### 📖 網頁文字標注音
在 Markdown / HTML 對中文字加註「音標」：

> <ruby>我<rt>ㄨㄛˇ</rt></ruby>

> <ruby>渭<rt>ui7</rt></ruby><ruby>   城<rt>shing5</rt></ruby>

> <ruby>渭<rt>ui7</rt>城<rt>shing5</rt></ruby>

```
<ruby>我<rt>ㄨㄛˇ</rt></ruby>
<ruby>渭<rt>ui7</rt></ruby><ruby>   城<rt>shing5</rt></ruby>
<ruby>渭<rt>ui7</rt>城<rt>shing5</rt></ruby>
```

### 📖 LibreOffice Write
使用 LibreOffice V7.1.0 ，在 Write App 裡內建的[「亞洲語言注音標示」](https://help.libreoffice.org/3.3/Common/Asian_Phonetic_Guide/zh-TW)功能，可對中文字標示「注音」。

![](../picts/LibreOffice_Pin_Yin.png)

### [📖 ToneOZ.COM 工具網站](https://toneoz.com/)
可將中文標上漢語拼音或注音，整齊排版方便閱讀。 最後幫你存為透明背景圖檔，輸出到任何其他文書處理軟體中使用。

![](../picts/Zhu_Yin.png)

### [📖 切韻音系自動推導器](https://nk2028.shn.hk/qieyun-autoderiver/)
能將漢字自動加註「音標」；但不提供「羅馬拚音」。

![](../picts/Qie_Yun_Machine.png)

## 字型下載

提供「附加注音符號／拚音音標」，可供下載的中文字型。

### [字咍IVS標音字型](https://github.com/ButTaiwan/taigivs/releases)

字咍IVS標音字型（Taigi IVS Font）的[《使用說明》](https://hackmd.io/@Q07_QXJ3TiO7QjkHkyOexA/B1B6zbPRd)。

## 電腦輸入法

### [📖 教育部台灣閩南語漢字輸入法](https://language.moe.gov.tw/result.aspx?classify_sn=23&subclassify_sn=442)
由教育部公佈，可在 Windows / MacOS / Linux 使用的電腦輸入法。

### [📖 信望愛台／客語輸入法](https://taigi.fhl.net/TaigiIME/)
由民間社團開發，可在 Windows / MacOS / Linux 使用的電腦輸入法。

### [📖 手機用台語輸入法](http://hualien-tsen-337889.middle2.me/iong)
可用於行動裝置（手機/平板）的台閩輸入法，含：iOS 、 Android 。


> **台羅拚音輸入法測試範例**
>
> 《渭 城 曲》 作者：王維
>
>| 1           | 2          | 3           | 4           | 5         | 6          | 7          |
>|:-----------:|:----------:|:-----------:|:-----------:|:---------:|:----------:|:----------:|
>| 渭<br>ui7    | 城<br>sing5 | 朝<br>tiau   | 雨<br>u2     | 挹<br>ip   | 輕<br>khing | 塵<br>tin5  |
>| 客<br>khik   | 舍<br>sia3  | 青<br>tshing | 青<br>tshing | 柳<br>liu2 | 色<br>sik   | 新<br>sin   |
>| 勸<br>khuan3 | 君<br>kun   | 更<br>king3  | 盡<br>tsin7  | 一<br>it   | 杯<br>pue   | 酒<br>tsiu2 |
>| 西<br>se     | 出<br>tshut | 陽<br>iong5  | 關<br>kuan   | 無<br>bu5  | 故<br>koo3  | 人<br>jin5  |

## Unicode 輸入工具

何謂[「Unicode輸入法」](https://zh.wikipedia.org/wiki/Unicode%E8%BE%93%E5%85%A5%E6%B3%95)

> **【註】**：
>
> Unicode 目前為止定義了五個平面，其中的第 0 平面 (BMP)
> 最為重要，其編碼分布請參考[連結](https://www.itsfun.com.tw/unicode/wiki-1812564-0983444)。
>
> Unicode 表示式：
>  - 文件： ㄅ：U+3105
>  - 程式： ㄅ：\u3105

### 常用字碼

 - [注音符號
   (Unicode區段)](https://zh.m.wiktionary.org/zh-hant/Appendix:Unicode/%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F)
 ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Unicode_Block_Bopomofo_only.svg/1920px-Unicode_Block_Bopomofo_only.svg.png)
 - [注音符號擴展 (Unicode區段)](https://zh.m.wiktionary.org/wiki/Appendix:Unicode/%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F%E6%93%B4%E5%B1%95)

 - ㄅㄆㄇ ~ ㄧㄨㄩ：U+3105 ～ U+3129
    + ㄐ：U+3110

 - 聲調符號：
    + 二聲(ˊ)：U+02CA
    + 三聲(ˇ)：U+02C7
    + 四聲(ˊ)：U+02CB
    + 輕聲(˙)：U+02D9
ˉ
> **【註】：**
> 一聲的聲調符號《ˉ》，可在「倉頡輸入法」啟用時，按〔Option〕＋〔Shift〕＋〔B〕組合鍵，先打開「表情與標點符號」選單，再選取一聲聲調符號。

 - [注音標音OpenType Font計畫](https://g0v.hackpad.tw/ep/pad/static/bFFqBpPmcz0)

 - [注音符號擴充（U+31A0–U+31BF)](https://chukaml.tripod.com/linguistics/unicode/codeChart/U0031A0.html)

### MacOS 環境

 - 安裝輸入法： [Unicode十六進位輸入](https://ladedu.com/how-to-enter-unicode-characters-on-a-mac/)
 - 輸入操作法： （1）按〔Option〕鍵；（2）輸入 Uniode 代碼。

### Windows 環境

- 安裝輸入法：
   [輸入法整合器](http://svc.011.idv.tw/ShareAll/KM/How/Windows/%E5%A6%82%E4%BD%95%E8%BC%B8%E5%85%A5Unicode%E7%89%B9%E6%AE%8A%E5%AD%97%E5%85%83%E7%AC%A6%E8%99%9F.html)
- 輸入操作法：（1）按〔`U〕鍵；（2）輸入 Unicode 內碼。



## 程式舘

- [pinyin4js](https://github.com/superbiger/pinyin4js)
pinyin4js 是一個漢字轉拼音的Javascript開源程式舘；適用於 NodeJS 與 Web 瀏覽器。

__【Node】__

```
    //pinyin4js@1.3.16 or latest
    import pinyin4js from 'pinyin4js';

    // more detail methods in test
    // WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调

    // output: xià#mén#nǐ#hǎo#dà#shà#xià#mén
    console.log(pinyin4js.convertToPinyinString('厦门你好大厦厦门', '#', pinyin4js.WITH_TONE_MARK))

    //首字母风格
    // output: xmnhdsxm
    console.log(pinyin4js.convertToPinyinString('厦门你好大厦厦门', '', pinyin4js.FIRST_LETTER))
    // or
    console.log(pinyin4js.getShortPinyin('厦门你好大厦厦门'))
```

__【Browers】__

```
    // <script src="./dist/pinyin4js.js"></script>

    // output: xià#mén#nǐ#hǎo#dà#shà#xià#mén
    console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '#', PinyinFormat.WITH_TONE_MARK))

    //首字母风格
    // output: xmnhdsxm
    console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '', PinyinFormat.FIRST_LETTER))
    // or
    console.log(PinyinHelper.getShortPinyin('厦门你好大厦厦门'))
```

## 中州韻(RIME)輸入法引擎

### [中州韻輸入法官網](https://rime.im/download/)

- Windows 平台：[小狼毫](https://github.com/rime/weasel/releases/tag/0.14.3)
- macOS 平台：[鼠鬚管](https://rime.im/)
- Linux 平台：
    - [fcitx-rime](https://github.com/rime/home/wiki/RimeWithIBus)
    - [fcitx-rime](https://github.com/fcitx/fcitx-rime)

### 輸入法方案管理器

使用[「東風破」](https://github.com/rime/plum) 做為管理器，管理各種 RIME
輸入法。

**【安裝東風破管理器】**

    $ cd ~/.local/share
    $ curl -fsSL https://git.io/rime-install | bash
    $ ln -fns ~/.local/share/plum/rime-install ~/.local/bin

**【安裝RIME輸入法方案】**

**以 GitHub 的容器為來源：**

    $ bash rime-install jyutping lotem/rime-zhung acevery/rime-zhengma

**以 \*-packages.conf 檔案為來源：**

    bash rime-install https://github.com/lotem/rime-forge/raw/master/lotem-packages.conf

    # or in short form: "<user>/<repo>/<filepath>"
    bash rime-install lotem/rime-forge/lotem-packages.conf

    # or specify a branch: "<user>/<repo>@<branch>/<filepath>"
    bash rime-install lotem/rime-forge@master/lotem-packages.conf

### 客製調整設定

參考以下文件，對 Rime 輸入法進行「客製」調整：

 - [「鼠须管」的调教笔记 ](https://scomper.me/gtd/-shu-xu-guan-de-diao-jiao-bi-ji)

 - [定製指南](https://github.com/rime/home/wiki/CustomizationGuide)

 - 客製自訂的輸入法，如：《十五音反切輸入法》。

### 變更配色主題
Rime的輸入介面，可客製調整配色主題（skin/theme），[參考範例](https://scomper.me/gtd/shu-xu-guan-shu-ru-fa-de-xin-pei-se)

      #Rime theme
      color_scheme_uji_kintoki_light:
        name: 宇治金時（淡）
        author: GHSRobert Ciang <robertus0617@gmail.com>
        back_color: '0xECE2F2'
        border_color: '0x573270'
        text_color: '0x32705A'
        hilited_text_color: '0x705432'
        hilited_back_color: '0x7DC4AB'
        hilited_candidate_text_color: '0xF1EBF6'
        hilited_candidate_back_color: '0x573270'
        hilited_candidate_label_color: '0x7DC4AB'
        hilited_comment_text_color: '0xF6F1EB'
        candidate_text_color: '0x327051'
        comment_text_color: '0x705432'
        label_color: '0x000201'


### [中古漢語拼音](https://zh.wikipedia.org/wiki/User:Polyhedron/%E4%B8%AD%E5%8F%A4%E6%BC%A2%E8%AA%9E%E6%8B%BC%E9%9F%B3)
[Rime 中古漢語拼音輸入方案 ](https://github.com/rime/rime-middle-chinese)，
是基於《廣韻》音系，採用 Polyhedron（古韻）設計的中古漢語拼音，又稱「古韻羅馬字」。

中古漢語三拼，採用《廣韻》音系的中古漢語三拼， 每個字第一碼爲聲母、
第二碼爲介音和主元音、第三碼爲韻尾和聲調。

    $ bash rime-install middle-chinese

中古漢語拼音輸入法使用的檔案：
- sampheng.schema.yaml
- zyenpheng.dict.yaml
- zyenpheng.schema.yaml

變更設定檔（~/Library/Rime/default.custom.yaml）：

    patch:
      shema_list:
      - schema: zyenpheng


> **輸入測試用文字：《千字文》**
>
>| 1    | 2    | 3    | 4    |
>|:----:|:----:|:----:|:----:|
>| 天 | 地 | 玄 | 黃 |
>| then | diih  | ghuen | ghuang |
>| 宇 | 宙 | 洪 | 荒 |
>| yox  | driuh | ghung | huang  |
>| 日 | 月 | 盈 | 昃 |
>| njit | ngyat | jeng  | crik   |
>| 辰 | 宿 | 列 | 張 |
>| zjin | siuh  | liet  | triang |

### 粵語反切拼音

使用廣東話，透過「反切法」輸入漢字。

> [粵語反切輸入法](https://rhapsodyinlingo.com/jyut/%E7%B2%B5%E5%88%87%E8%BC%B8%E5%85%A5%E6%B3%95/?fbclid=IwAR2LarQbrS8YmoMv6QpgGv859Ge6e8scOTvaqfrzpaz7vHA7LFan9tQM5rM) 簡介。

**輸入法名稱**：
[呢度單撈粵語切音輸入法](https://www.dropbox.com/s/ycd9gpfyvpvc36v/Jyutcit.zip?dl=0)

**鑑盤配置**：
![](https://i0.wp.com/rhapsodyinlingo.com/wp-content/uploads/2021/03/image-1.png?resize=768%2C284&ssl=1)

**輸入測試**：

 - 漢字 ＝ 聲母（上字）＋ 韻母（下字）＋ 聲調
 - 廣 ＝〖瓜〗＋〖方〗＋〖二聲調〗 ＝ 【X】＋【J】＋【2】

## 參考

### Rime 設定範例

    patch:
      switches:
        - name: ascii_mode
          reset: 0
          states: [ 中文, 西文 ]
        - name: full_shape
          states: [ 半角, 全角 ]
        - name: simplification    # 轉換開關
          states: [ 漢字, 汉字 ]

      schema_list:
      - schema: luna_pinyin
      - schema: blg_tai
      - schema: jyut6cit3
      - schema: jyut6ping3

      switcher:
        caption: 切换输入法
        hotkeys:
        - Control+grave
        caption: "㉆"
        abbreviate_options: true
        fold_options: true
        option_list_separator: "･"

      menu:
        page_size: 10

      style/font_point: 24

      #style/color_scheme: uji_kintoki_light

      style:
        color_scheme: psionics
        horizontal: true
        inline_preedit: true
        candidate_format: "%c\u2005%@ \u2005"
        font_point: 16
        label_font_point: 14
        corner_radius: 5
        border_height: 0
        border_width: 0

### 反切輸入法

如何使用 Rime 輸入法引擎，建置「反切」拼音輸入法，參考範例：
[粵語反切輸入法](https://rhapsodyinlingo.com/jyut/%E7%B2%B5%E5%88%87%E8%BC%B8%E5%85%A5%E6%B3%95/?fbclid=IwAR2LarQbrS8YmoMv6QpgGv859Ge6e8scOTvaqfrzpaz7vHA7LFan9tQM5rM) 。
