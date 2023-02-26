# Nuxt Config File
Nuxt は拡張子が `.js`、`.ts`、`.mjs` のいずれかの `nuxt.config` ファイル１つで簡単に設定できます。
```ts
export default defineNuxtConfig({
  // Nuxt の設定
})
```
`defineNuxtConfig` ヘルパーはインポートせずグローバルに利用可能です。

必要があれば、`nuxt/config` から `defineNuxtConfig` を明示的にインポートすることができます。

```ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  // Nuxt の設定
})
```
設定が最新であることを保証するために、メイン設定ファイル、`.env`、`.nuxtignore`、`.nuxtrc` ドットファイルに変更を検出したときに Nuxt は完全な再起動を実行をします。

詳細は[こちら](https://nuxt.com/docs/api/configuration/nuxt-config)