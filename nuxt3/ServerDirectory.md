# Server Directory
Nuxt は  API と HMR をサポートするサーバーハンドラを登録するために `~/server/api` ディレクトリ、`~/server/routes` ディレクトリ、`~/server/middleware` ディレクトリにあるファイルを自動的にスキャンします。

それぞれのファイルは `defineEventHandler()` で定義されたデフォルトの関数をエクスポートする必要があります。

ハンドラは JSON データ、`Promise`を直接返すか、`event.node.res.end()` を使用してレンスポンスを送信することができます。


詳細は[こちら](https://nitro.unjs.io/guide/introduction/routing)

## Example
新しいファイル `server/api/hello.ts` を作成します。
```ts
export default defineEventHandler((event) => {
  return {
    api: 'works'
  }
})
```
`await $fetch('/api/hello')` を使用して、この API を普遍的に呼び出すことができるようになります。

## Server Routes
`~/server/api` の中にあるファイルはルートの中で `/api` というプレフィックスが自動的につきます。プレフィックスが `/api` ではないサーバールートを追加する場合、代わりにそれらを `~/server/routes` ディレクトリに置くことができます。 

例：
```ts
export default defineEventHandler(() => 'Hello World!')
```
上記の例では、`/hello` のルートは `http://localhost:3000/hello` でアクセスできるようになります。

## Server Middleware
Nuxt は `~/server/middleware` にある任意のファイルを自動的に読み込み、プロジェクト用のサーバーミドルウェアを作成します。

ミドルウェアハンドラはハンドラの追加や確認、リクエストのログ記録、イベントのリクエストオブジェクト拡張など、他のサーバールートの前に全てのリクエストで実行されます。

ミドルウェアハンドラは何も返すべきではなく（閉じたり応答したりせず）、リクエストコンテキストを検査または拡張するか、エラーを投げるだけであるべきです。

例：
```ts
export default defineEventHandler((event) => {
  console.log('New request: ' + event.node.req.url)
})
```
```ts
export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
})
```

## Server Plugins
Nuxt は `~/server/plugins` にある任意のファイルを自動的に読み込み、Nitro プラグインとして登録します。Nitro のランタイム動作を拡張したりライフサイクルイベントにフックしたりすることができます。

例：
```ts
export default defineNitroPlugin((nitroApp) => {
  console.log('Nitro plugin', nitroApp)
})
```
詳細は[こちら](https://nitro.unjs.io/guide/advanced/plugins)

## Server Utilities
サーバールートは便利なヘルパーセットを備えた `unjs/h3` によって提供されます。

詳細は[こちら](https://www.jsdocs.io/package/h3#package-index-functions)

`~/server/utils` ディレクトリの中に自分でもっとヘルパーを追加することができます。

## Usage Example
### Matching Route Parameters
サーバールートは、`/api/hello/[name].ts` のようにファイル名の括弧内に動的パラメータを使用でき、 `event.context.params` を介してアクセスすることができます。

例：
```ts
export default defineEventHandler((event) => `Hello, ${event.context.params.name}!`)
```
`await $fetch('/api/hello/nuxt')` を使用して普遍的に API を呼び出し、`Hello, nuxt` を得ることができます。

### Matching HTTP Method
ハンドルファイル名には、リクエスト HTTP メソッドに合わせて `.get`、`.post`、`.put`、`.delete`、…というサフィックスをつけることができます。

```ts
export default defineEventHandler(() => 'Test get handler')
```
```ts
export default defineEventHandler(() => 'Test post handler')
```
上記の例では、`/test` をフェッチするのは
- **GET** メソッド:　`Test get handler` を返す
- **POST** メソッド：`Test post handler` を返す
- 他のメソッド：405 エラーを返す

### Catch-all Route
キャッチオールルートは、フォールバックルートを処理するのに便利です。例えば、`~/server/api/foo/[...].ts` という名前のファイルを作成すると、どのルートハンドラにもマッチしない全てのリクエスト、例えば、`/api/foo/bar/baz` に対してキャッチオールルートを登録できます。

例：
```ts
export default defineEventHandler(() => `Default foo handler`)
```
```ts
export default defineEventHandler(() => `Default api handler`)
```

### Handling Requests with Body
```ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return { body }
})
```
`$fetch('/api/submit', { method: 'post', body: {test: 123} })` を使用してこの API を普遍的に呼び出せます。

ファイル名に `submit.post.ts` を使用しているのは、リクエストボディを受け取れる POST メソッドを持つリクエストだけにマッチするようにするためです。GET リクエストの中で `readBody` を使用すると、`readBody` は `405 Method Not Allowed` エラーを投げます。

### Handling Requests With Query Parameters
サンプルクエリ `/api/query?param1=a&param2=b`
```ts
export default defineEventHandler((event) => {
  const query = getQuery(event)
  return { a: query.param1, b: query.param2 }
})
```

### Error handling
エラーが投げられなかった場合、ステータスコード `200 OK` が返されます。捕縛されないエラーは `500 Internal Server Error` という HTTP エラーを返します。

他のエラーコードを返すには、`createError` で例外を投げます。
```ts
export default defineEventHandler((event) => {
  const id = parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  return 'All good'
})
```

### Returning other status codes
他のステータスコードを返すには、`setResponseStatus` ユーティリティを使用します。

例えば、`202 Accepted` を返します。
```ts
export default defineEventHandler((event) => {
  setResponseStatus(event, 202)
})
```

### Accessing Runtime Config
```ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  return { key: config.KEY }
})
```

### Accessing Request Cookies
```ts
export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  return { cookies }
})
```

## Advanced Usage Example
### Nitro Configuration
`nuxt.config` で `nitro` キーを使用して、直接 Nitro の設定を行うことができます。

これは発展的なオプションです。カスタム設定は、Nuxt の準マイナーバージョンで Nitro がアップデートされたときに、設定インタフェースが時間の経過とともに変更されるため可能性があるため、本番環境に影響する可能性があります。

```ts
export default defineNuxtConfig({
  // https://nitro.unjs.io/config
  nitro: {}
})
```

### Using a Nested Router
```ts
import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.get('/test', defineEventHandler(() => 'Hello World'))

export default useBase('/api/hello', router.handler)
```

### Sending Streams (Experimental)
**注意**：これは実験的な機能で、Node.js の環境だけで利用可能です。
```ts
import fs from 'node:fs'
import { sendStream } from 'h3'

export default defineEventHandler((event) => {
  return sendStream(event, fs.createReadStream('/path/to/file'))
})
```

### Sending Redirect
```ts
export default defineEventHandler((event) => {
  return sendRedirect(event, '/path/redirect/to', 302)
})
```

### Return a Legacy Handler or Middleware
```ts
export default (req, res) => {
  res.end('Legacy handler')
}
```
レガシー対応は unjs/h3 を使用すれば可能ですが、レガシー処理は可能な限り避けることをお勧めします。

```ts
export default (req, res, next) => {
  console.log('Legacy middleware')
  next()
}
```
`next()` コールバックと `async` や `Promise` を返すレガシーミドルウェアと決して組み合わせないでください！

### Server Storage
Nitro はクロスプラットフォームのストレージレイヤーを提供します。追加のストレージマウントポイントを設定するために、`nitro.storage` を使用することができます。

#### Example: Using Redis
```ts
export default defineNuxtConfig({
  nitro: {
    storage: {
      'redis': {
        driver: 'redis',
        /* redis コネクタオプション */
        port: 6379, // Redis ポート
        host: "127.0.0.1", // Redis ホスト
        username: "", // Redis のバージョンが 6 以上の時必要
        password: "",
        db: 0, // デフォルト 0
        tls: {} // tls/ssl
      }
    }
  }
})
```
新しいファイル `server/api/test.post.ts` を作成します。
```ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await useStorage().setItem('redis:test', body)
  return 'Data is set'
})
```
新しいファイル `server/api/test.get.ts` を作成します。
```ts
export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('redis:test')
  return data
})
```
新しいファイル `app.vue` を作成します。
```vue
<template>
  <div>
    <div>Post state: {{ resDataSuccess }}</div>
    <div>Get Data: {{ resData.text }}</div>
  </div>
</template>
<script setup lang="ts">
  const { data: resDataSuccess } = await useFetch('/api/test', {
      method: 'post',
      body: { text: 'Nuxt is Awesome!' }
  })
  const { data: resData } = await useFetch('/api/test')
</script>
```