# Introduction
Nuxt はフロントエンドとバックエンドの両方の機能を提供するため、Web アプリケーションの作成に集中できる。

Nuxt とは何かを理解するためには、モダンなアプリケーションを作成するために必要なものはなにかを理解する必要がある
- JavaScript framework
  - JavaScript framework は反応性（reactivity）と Web コンポーネントをもたらす
  - Vue.js を使用する
- Webpack and Vite
  - 開発中のものに対して Hot Module Replacement をするためのバンドラ（複数のファイルを１つにまとめて出力してくれるツール）と本番用にコードをバンドル（複数ファイルを1つにまとめること）する
    - [webpackとは? ※バンドラについての記載あり](https://qiita.com/minato-naka/items/0db285f4a3ba5adb6498)
    - [Hot Module Replacementの設定と仕組みを理解する](https://qiita.com/haradakunihiko/items/40486ec2b6b9aea119bb)
  - Webpack5 と Vite をサポートしている

- Latest JavaScript syntax
  - レガシーブラウザをサポートしながら最新のJavaScript構文を記述するためのトランスパイラ
  - esbuild を使用
- Server Side
  - 開発中のアプリケーションを提供するサーバ
  - サーバーサイドレンダリングやAPIルートもサポート
    - [SPA, SSR, SSGって結局なんなんだっけ？](https://zenn.dev/rinda_1994/articles/e6d8e3150b312d)
  - h3 を使用して、サーバーレス、ワーカー、Node.js などのデプロイの多様性と比類のないパフォーマンスを実現
- Routing library
  - クライアント側のナビゲーションを処理するルーティングライブラリ
  - vue-router を使用

