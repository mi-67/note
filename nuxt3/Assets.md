# Assets
Nuxt はスタイルシート、フォント、イメージのようなアセットを取り扱うために2つのディレクトリを使います。
- `public/` ディレクトリのコンテンツは、そのままサーバルートに提供されます
- `assets/` ディレクトリには、ビルドツール（Vite や webpack）に処理させたい全てのアセットが慣習的に含まれています

## `public/` Directory
`public/` ディレクトリはアプリケーションの定義された URL で一般に公開される静的アセットのパブリックサーバとして使われています。

`public/` ディレクトリにあるファイルはアプリケーションのコードやブラウザからルート URL `/` で取得できます。

### Example
たとえば、`public/img` ディレクトリにある画像ファイル(静的 URL `/img/nuxt.png` で利用可能)を参照する場合
```Vue
<template>
    <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

## `assets/` Directory
Nuxt は Vite や webpack を使い、アプリケーションをビルド、バンドルします。これらのビルドツールの主な機能は JavaScript ファイルを処理することですが、プラグイン（Vite 用）やローダー（webpack 用）を通して、スタイルシート、フォント、SVG のような他の種類のアセットを処理するために拡張できます。このステップでは主にパフォーマンスやキャッシュの目的で元のファイルを変換します（スタイルシートの最小化やブラウザキャッシュの無効化など）。

慣習的に、Nuxt はこれらのファイルを保存するために `assets/` ディレクトリを使いますが、このディレクトリには自動スキャン機能がないため、他の名前をつけることができます。

アプリケーションコードでは、`assets/` ディレクトリにあるファイルは `~/assets/` パスで参照できます。

### Example
たとえば、ビルドツールがこのファイル拡張子を扱えるように設定されている場合に処理される、画像ファイルを参照するとき
```Vue
<template>
    <img src="~/asset/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```
Nuxt は `assets/` ディレクトリにあるファイルを `/assets/my-file.png` のような静的 URL で提供しません。静的 URL が必要な場合は、`public/` ディレクトリを使用してください。

## Global Styles Imports
Nuxt コンポーネントのスタイルにステートメントをグローバルに挿入するには、`nuxt.config` ファイルで `Vite` オプションを使用します。

```scss
$primary: #49240F;
$secondary: #E4A79D;
```
```sass
$primary: #49240F
$secondary: #E4A79D
```
```ts
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_color.scss" as *;'
                }
            }
        }
    }
})
```
```ts
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "@/assets/_color.sass" as *\n'
                }
            }
        }
    }
})
```