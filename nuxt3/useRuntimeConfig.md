# `useRuntimeConfig`
`useRuntimeConfig` コンポーザブルはアプリ内で設定変数を公開するために使用されます。

## Usage
```Vue
<script setup lang='ts'>
const config = useRuntimeConfig()
</script> 
```
```ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
})
```

## Define Runtime Config
以下の例では、公開 API ベース URL とサーバー上でのみアクセス可能なシークレット API トークンを設定する方法を示しています。

`nuxt.config` 内で `runtimeConfig` 変数を常に定義しなければいけません。
```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // プライベートキーはサーバーでのみで利用可能です
    apiSecret: '123',

    // クライアントに公開されるパブリックキー
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})
```
サーバー上でアクセスする必要がある変数は `runtimeConfig` のなかに直接追加されます。クライアントとサーバーの両方でアクセスする必要がある変数は、`runtimeConfig.public` で定義します。

詳細は[こちら](https://nuxt.com/docs/guide/going-further/runtime-config)

## Access Runtime Config
ランタイム設定にアクセスするために、`useRuntimeConfig()` コンポーザブルを使用できます。
```ts
export default async() => {
  const config = useRuntimeConfig()

  // 公開変数にアクセスする
  const result = await $fetch(`/test`, {
    baseURL: config.public.apiBase,
    headers: {
      // プライベート変数にアクセスする（サーバでのみ利用可能）
      Authorization: `Bearer ${config.apiSecret}`
    }
  })
  return result
}
```
この例では、`apiBase` が `public` ネームスペースの中で定義されているので、サーバーサイドとクライアントサイドの両方で普遍的にアクセスできる一方で、`apiSecret` は**サーバーサイドでのみ利用可能です**。

## Environment Variables
プレフィックスが `NUXT_` と一致する環境変数名を使用してランタイム設定変数を更新することが可能です。

詳細は[こちら](https://nuxt.com/docs/guide/going-further/runtime-config)

## Using the `.vue` File
**開発**や**ビルド/生成**の際にアクセス可能にするために `.env` ファイルの中で環境変数を設定できます。

```
NUXT_PUBLIC_API_BASE_URL = "https://api.localhost:5555"
NUXT_API_SECRET = "123"
```
`.env` ファイルに設定されたあらゆる環境変数は**開発**や**ビルド/生成**の際に Nuxt アプリ内で `process.env` 使用してアクセスされます。

**本番のランタイムでは**、プラットフォーム環境変数を使用する必要があり、`.env` は使用しません。

git を使用する場合、git の履歴にシークレットが漏れるのを避けるために `.env` を `.gitignore` に追加してください。

## `app` namespace
Nuxt はランタイムコンフィグで `app` ネームスペースを使用し、`baseURL` と `cdnURL` をキーとして含んでいます。環境変数を設定することで実行時にこれらの値をカスタマイズできます。

これは予約されたネームスペースです。`app` 内部で追加のキーを導入してはいけません。

### `app.baseURL`
デフォルトでは、`baseURL` は `/` に設定されています。

しかし、環境変数として `NUXT_APP_BASE_URL` を設定することで `baseURL` を更新することができます。

そうすると、`config.app.baseURL` を使用してこの新しいベース URL にアクセスできます。

```ts
export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig()

  // 普遍的に baseURL にアクセスします
  const baseURL = config.app.baseURL
})
```

### `app.cdnURL`
この例はカスタム CDN URL の設定方法と `useRuntimeConfig()` を使用したアクセス方法を示しています。

`NUXT_APP_CDN_URL` 環境変数を使用して、`.output/public` 内の静的アセットを提供するためにカスタム CDN を使用できます。

そして、`config.app.cdnURL` を使用して新しい CDN URL にアクセスします。

```ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  // 普遍的に cdnURL にアクセスします
  const cdnURL = config.app.cdnURL
}) 
```

詳細は[こちら](https://nuxt.com/docs/guide/going-further/runtime-config)