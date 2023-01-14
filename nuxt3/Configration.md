# Configuration
デフォルトでは、Nuxt はほとんどのユースケースをカバーするように設定されています。`nuxt.config.ts` ファイルに書かれているデフォルトの設定は上書きしたり拡張したりできます。

## Nuxt Configuration
`nuxt.congif.ts` ファイルは Nuxt プロジェクトのルートディレクトリに置かれていて、アプリケーションの挙動の上書きや拡張ができます。

最低限の設定ファイルは 設定が書かれたオブジェクトを含む `defineNuxtConfig` 関数をエクスポートします。`defineNuxtConfig` ヘルパーはインポートしなくてもグローバルに使用可能です。
```ts
export default defineNuxtConfig({
    // Nuxt の設定
})
```
このファイルはカスタムスクリプトの追加、モジュールの登録、レンダリングモードの変更など、ドキュメントでしばしば言及されます。

全ての設定オプションについての説明は[こちら](https://nuxt.com/docs/api/configuration/nuxt-config)

Nuxt でアプリケーションを構築するために TypeScript を使用する必要はありません。しかし、`nuxt.config` ファイルの拡張子には `.ts` を使用することを強く推奨します。こうすることで設定を編集している間のタイポや間違えを避けるために IDE からヒントの恩恵を受けることができます。