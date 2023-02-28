# `useError`
`useError` コンポーザブルは処理中のグローバルな Nuxt エラーを返し、クライアントとサーバーで利用可能です。
```ts
const error = useError()
```
`useError` はステートにエラーを設定し、コンポーネント間でリアクティブかつ SSR フレンドリーなグローバル Nuxt エラーを生成します。Nuxt エラーは以下のプロパティを持ちます。

## Properties
- statusCode
  - 型：`Number`
  - HTTP レスポンスステータスコード
- statusMessage
  - 型：`String`
  - HTTP レスポンスステータスメッセージ
- message
  - 型：`String`
  - エラーメッセージ

詳細は[こちら](https://nuxt.com/docs/getting-started/error-handling)