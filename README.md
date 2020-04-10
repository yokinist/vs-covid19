# VS COVID-19 企業による支援リスト
[![](./src/assets/images/vscovid19.png)](./src/assets/images/vscovid19.png)

DATA: CC0 [企業などによる支援一覧](https://docs.google.com/spreadsheets/d/1IiHUk3D_b6e5BfqFG3ZBxQ8X-QVACdY7CeQeG6C7S1w/)

### 開発環境のつくりかた
```
$ yarn
$ yarn dev
```

### 使用技術
- フレームワーク: Preact X
- ホスティング/デプロイ: Now.sh
- モジュールバンドラー: Parcel
- 言語: TypeScript

### デプロイに関して
#### 本番環境
- masterに変更がある度にNow.shが自動デプロイをしてくれる

#### ステージング環境のつくりかた
- 1. masterへのPRを送る
- 2. プッシュする度に確認できるデプロイプレビューURLが生成される

## 備考
政府の公開する企業等による支援情報のオープンデータに加え、提供されているサービスを公開資料を基に整理したものであり、支援サービスをすべて網羅しているわけではありません。また、空欄は公開情報に明確に情報が記載されていないため空欄にしており、その内容がないというわけではありません。またサービスの問い合わせ等は直接支援企業にお問い合わせ下さい。推奨ブラウザは、Chrome/Safariの最新版です。ブラウザによっては、動作しないことがあります。

## 関連リポジトリ
- [codeforjapan/vs-covid19](https://github.com/codeforjapan/vs-covid19)
  - VS COVID-19 企業による支援リスト（政府提供オープンデータ使用）
  - 本レポジトリのフォーク元, データの参照先
  - https://vscovid19.code4japan.org/
- [hrsano645/vs-covid19](https://github.com/hrsano645/vs-covid19)
  - #民間支援情報ナビ 静岡版
  - https://vs-covid19-shizuoka.netlify.com/
- [codeforyouth/vs-covid19-subsidy](https://github.com/codeforyouth/vs-covid19-subsidy)
  - VS COVID-19 事業者向け支援情報ナビ
  - http://vs-covid19.now.sh/
- [01mokuba/vs-covid19-line-bot](https://github.com/01mokuba/vs-covid19-line-bot)
  - VS COVID-19 LINE BOT Ver.
  - https://line.me/R/ti/p/%40551efrfb

## 貢献者
- App:
  - CC BY Code for Japan ([@taisukef](https://twitter.com/taisukef))
  - [@yokinist](https://twitter.com/yokinist)
- Design:
  - CC BY HOWMORI ([@howmori](https://twitter.com/howmori))
  - [@greatest_hiroki](https://twitter.com/greatest_hiroki)
  - [@yokinist](https://twitter.com/yokinist)