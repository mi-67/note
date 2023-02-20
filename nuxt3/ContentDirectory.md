# Content Directory
Nuxt コンテンツモジュールはプロジェクト内の `content/` ディレクトリを読み込み、`.md`、`.yml`、`.csv`、`.json` ファイルを解析してアプリケーション用のファイルベース CMS を作成します。

✅ ビルドインコンポーネントでコンテンツをレンダリングします。

✅ MongoDB のような API でコンテンツを照会します。

✅ MDC 構文で Markdown ファイル内で Vue コンポーネントを使用します。

✅ ナビゲーションを自動生成します。

## Get Started
### Installation
プロジェクトに `@nuxt/content` モジュールをインストールします。
```bash
# yarn
$ yarn add --dev @nuxt/content

# npm
$ npm install --save-dev @nuxt/content

# pnpm
$ pnpm add -D @nuxt/content
```

次に、`nuxt.config.ts` の `modules` セクションに `@nuxt/content` を追加します。
```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
```

### Create Content
プロジェクトのルートディレクトリにある `content/` ディレクトリ内に Markdown ファイルを置いてください。

```md
# Hello Content
```

モジュールはそれらを自動的に読み込み、解析します。

## Render Pages
コンテンツページをレンダリングするために、`contentDoc` コンポーネントを使用してキャッチオールルートを追加します。
```Vue
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```

## Documentation
クエリの構築や MDC 構文を使用した Markdown ファイル内での Vue コンポーネントを使用する方法など、コンテンツモジュールについては、[こちら](https://content.nuxtjs.org/)をご覧ください。