# Introduction
Nuxt はフロントエンドとバックエンドの両方の機能を提供するため、Web アプリケーションの作成に集中できます。

Nuxt とは何かを理解するためには、モダンなアプリケーションを作成するために必要なものはなにかを理解する必要があります。
- JavaScript framework
  - JavaScript framework は反応性（reactivity）と Web コンポーネントをもたらす
  - Vue.js を使用
- Webpack and Vite
  - 開発中のものに対して Hot Module Replacement をするためのバンドラ（複数のファイルを１つにまとめて出力してくれるツール）と本番用にコードをバンドル（複数ファイルを1つにまとめること）する
    - [webpackとは? ※バンドラについての記載あり](https://qiita.com/minato-naka/items/0db285f4a3ba5adb6498)
    - [Hot Module Replacementの設定と仕組みを理解する](https://qiita.com/haradakunihiko/items/40486ec2b6b9aea119bb)
  - Webpack5 と Vite をサポート
- Latest JavaScript syntax
  - レガシーブラウザをサポートしながら最新のJavaScript構文を記述するためのトランスパイラである
  - esbuild を使用
- Server Side
  - 開発中のアプリケーションを提供するサーバである
  - サーバーサイドレンダリングやAPIルートもサポート
    - [SPA, SSR, SSGって結局なんなんだっけ？](https://zenn.dev/rinda_1994/articles/e6d8e3150b312d)
  - h3 を使用して、サーバーレス、ワーカー、Node.js などのデプロイの多様性と比類のないパフォーマンスを実現
- Routing library
  - クライアント側のナビゲーションを処理するルーティングライブラリである
  - vue-router を使用

これは氷山の一角に過ぎず、プロジェクトのためにこれら全てを設定し、機能させ、長期にわたってそれを維持しなければいけないことを想像してみてください。私たち（Nuxtの提供者）は2016年10月からこれをおこなっており、あらゆる Vue アプリケーションにとって最良の最適化とパフォーマンスを提供するために全ての設定を調整しています。

Nuxt はこれを処理し、フロントエンドとバックエンドの両方の機能を提供するため、Web アプリケーションの作成に集中できます。

### view engine
Nuxt は Vue.js を view engine として使用しています。Vue3 の全ての機能が Nuxt で使用できます。Vue と Nuxt の統合の詳細については[こちら](https://nuxt.com/docs/guide/concepts/vuejs-development)を参照してください。
- [What is view engine? What does it actually do?](https://stackoverflow.com/questions/8308485/what-is-view-engine-what-does-it-actually-do)

### Automation and conventions
Nuxt は繰り返し作業を自動化するため規約と独断的なディレクトリ構造を使用し、開発者が機能のプッシュに集中できるようにします。設定ファイルでは、そのデフォルトの動作をカスタマイズしたり、オーバーライドすることができます。
- 自動インポート
- ファイルシステムのルーティングとAPIレイヤー
- データ取得ユーティリティ
- 人手による設定を必要としない TypeScript のサポート
- 設定済みビルドツール
詳細は[こちら](https://nuxt.com/docs/guide/concepts/auto-imports)

### Rendering modes
Nuxt はさまざまなユースケースに対応するため、異なるレンダリングモードを提供しています。
- ユニバーサルレンダリング（サーバーサイドレンダリングと[ハイドレーション]((https://en.wikipedia.org/wiki/Hydration_(web_development)))）
- クライアントサイドのみのレンダリング
- 完全な静的サイトの生成
- ハイブリッドレンダリング（ルート単位のキャッシュ戦略）
詳細は[こちら](https://nuxt.com/docs/guide/concepts/rendering)