# Middleware Directory
Nuxt はアプリケーション全体で使えるカスタマイズ可能な**ルートミドルウェア**フレームワークを提供し、特定のルートにナビゲートする前に実行したいコードを抽出するのに理想的です。

ルートミドルウェアは Nuxt アプリの Vue の部分で実行されます。名前は似ていますが、アプリの Nitro サーバー部分で実行されるサーバーミドルウェアとは全く異なります。

ルートミドルウェアには3種類あります。
1. 匿名（またはインライン）のルートミドルウェアで、使用するページ内で直接定義されるもの
2. 名前付きルートミドルウェアで、`middleware/` ディレクトリに置かれ、ページで使う時に非同期インポートで自動的に読み込まれるもの（注意：ルートミドルウェアの名前はケバブケースに正規化されるので、`someMiddleware` は `some-middleware` になります）
3. グローバルルートミドルウェアで、`middleware/` ディレクトリに置かれ（サフィックスは `.global` ）、ルートが変更されるたびに自動的に実行されるもの

最初の2種類のルートミドルウェアは `definePageMeta` で定義することができます。

## Format
ルートミドルウェアは現在のルートと次のルートを引数として受け取るナビゲーションガードです。

```ts
export default defineNuxtRouteMiddleware((to,from) => {
  if(to.params.id === '1') {
    return abortNavigation()
  }
  return navigationTo('/')
})
```

Nuxt はミドルウェアから直接返すことができるグローバルに利用可能なヘルパーを2つ提供します。
1. ```ts
   navigateTo(to: RouteLocateRow | undefined | null, options?: {replace: boolean, redirectCode: number, external: boolean})
   ```
   プラグインやミドルウェアの中で与えられたルートにリダイレクトします。ページ遷移を実行するために直接呼び出すこともできます。
2. ```ts
   abortNavigation(err?: string | Error)
   ```
   ナビゲーションを中止し、オプションのエラーメッセージを表示します。

vue-router のドキュメントにあるナビゲーションガイドとは異なり、`next()` の第3引数は渡されず、リダイレクトやルートキャンセルはミドルウェアから値を返すことで処理されます。返り値の候補は以下の通りです。
- 何も返さない - ナビゲーションを妨げず、次のミドルウェア関数があればそれに移行するか、ルートナビゲーションを完了させます。
- `return navigateTo('/')` または `return navigateTo({path: '/'})` - 与えられたパスにリダイレクトし、リダイレクトがサーバーサイドで行われた場合はリダイレクトコードを `302` Found に設定します。
- `return navigateTo('/', {redirectCode: 301})` - 与えられたパスにリダイレクトし、リダイレクトがサーバーサイドで行われた場合はリダイレクトコードを `301` Moved Permanently に設定します。

詳細は[こちら](https://nuxt.com/docs/api/utils/navigate-to)

- `return abortNavigation()` - 現在のナビゲーションを停止します。
- `return abortNavigation(error)` - 現在のナビゲーションをエラーで拒否します。

詳細は[こちら](https://nuxt.com/docs/api/utils/abort-navigation)

リダイレクトの実行やナビゲーションの停止には上記のヘルパー関数を使用することを推奨します。vue-router のドキュメントに記載されている他の戻り値でも動作する可能性がありますが、将来的に破壊的な変更がされる可能性があります。

## When Middleware Runs
サイトがサーバレンダリングまたは生成される場合、初期ページ用のミドルウェアはページのレンダリング時とクライアントで再度実行されます。これは、ミドルウェアがブラウザ環境を必要とする場合、例えば生成されたサイトで積極的にレスポンスをキャッシュしたり、ローカルストレージから値を読み込んだりする時に必要になるかもしれないからです。

しかし、この動作を避けたい場合は、そうすることができます。

```ts
export default defineNuxtRouteMiddleware(to => {
  // サーバーのミドルウェアをスキップ
  if (process.server) return
  // skip middleware on client side entirely
  // クライアントサイドのミドルウェアを完全にスキップ
  if (process.client) return
  // または、最初のクライアントロード時のみミドルウェアをスキップ
  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return
```

## Adding Middleware Dynamically
プラグイン内などから `addRouteMiddleware()` ヘルパー関数を使用してグローバルまたは名前付きルートミドルウェアを手動で追加することが可能です。

```ts
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  }, { global: true })
  addRouteMiddleware('named-test', () => {
    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  })
})
```

## Example: A Named Route Middleware
```
middleware/
└ auth.ts
```
ページファイル内で、このルートミドルウェアを参照できます。
```Vue
<script setup>
definePageMeta({
  middleware: ["auth"]
  // または middleware: 'auth' と指定
})
</script>
```
こうすることで、そのページへのナビゲーションが完了する前に、`auth` ルートミドルウェアが実行されます。