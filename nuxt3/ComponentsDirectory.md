# Components Directory
`components/` ディレクトリは、ページや他のコンポーネントの中に取り込むことができる全ての Vue コンポーネントを置くところです（詳細は[こちら](https://vuejs.org/guide/essentials/component-basics.html#components-basics)）。

Nuxt は自動的に`components/` ディレクトリにあるあらゆるコンポーネントを取り込みます（使用しているモジュールによって登録されているコンポーネントも同様）。

```
components/
├ TheHeader.vue
└ TheFooter.vue
```
```Vue
<template>
<div>
  <TheHeader />
  <slot />
  <TheFooter />
</div>
</template>
```

## Component extensions
デフォルトでは、`nuxt.config.ts` の extension キー指定された拡張子を持つあらゆるファイルはコンポーネントとして扱われます。コンポーネントとして登録されるファイル拡張子を限定する必要がある場合は、コンポーネントディレクトリ宣言とその `extension` キーの拡張形式を使用します。
```diff ts
export default defineNuxtModule({
  components: [
    {
      path: '~/components',
+     extensions: ['.vue'],
    }
  ]
})
```

## Component Names
下のようにネストしたディレクトリにコンポーネントがある場合
```
components/
└ base/
  └ foo/
    └ Button.vue
```
このとき、コンポーネントの名前はそれ自身のパスディレクトリとファイル名を基にして、重複するセグメントは削除されます。よって、コンポーネント名は以下のようになります。
```Vue
<BaseFooButton />
```
わかりやすくするために、コンポーネントのファイル名をコンポーネント名と一致させることを推奨します（つまり、上記の例では、`Button.vue` を `BaseFooButton.vue` と改名すれば良いでしょう）。

もし、パスではなく名前だけに基づいて自動インポートしたい場合は、設定オブジェクトの拡張フォームを使用して `pathPrefix` オプションを `false` に設定する必要があります。
```diff ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/components/',
+     pathPrefix: false,
    },
  ],
});
```
これは Nuxt2 で使用されていたのと同じストラテジーを使用してコンポーネントを登録します。たとえば、`~/components/Some/MyComponent.vue` は `<SomeMyComponent>` ではなく `<MyComponent>` として使用できるようになります。

## Dynamic Components
Vue の `<component :is="someComputedComponent">` 構文を使いたい場合は、Vue が提供する `resolveComponent` ヘルパーを使う必要があります。

例：
```Vue
<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>
<script setup>
const MyButton = resolveComponent('MyButton')
</script>
```

もし動的コンポーネントを処理するために `resolveComponent` を使用しているなら、コンポーネントの名前（変数ではなく文字列でなければいけません）以外を挿入しないように注意してください。

また、推奨しませんが、全てのコンポーネントをグローバルに登録できます。全てのコンポーネントに非同期チャンクが作成され、アプリケーション全体で利用できるようになります。

```diff ts
  export default defineNuxtConfig({
    components: {
+     global: true,
+     dirs: ['~/components']
    },
  })
```
また、一部のコンポーネントを `~/components/global` ディレクトリに配置することで選択的にグローバルに登録できます。

`global` オプションはコンポーネントディレクトリごとに設定することも可能です。

## Dynamic Imports
コンポーネントを動的にインポートする（コンポーネントのレイジーローディングとも呼ばれる）ために必要なことはコンポーネント名に `Lazy` というプレフィックスを追加することです。

```Vue
<template>
  <div>
    <TheHeader />
    <slot />
    <LazyTheFooter />
  </div>
</template>
```
これは、コンポーネントが常に必要ではない場合に特に有用です。`Lazy` プレフィックスを使うことで、適切なタイミングまでコンポーネントコードの読み込みを遅延でき、JavaScript のバンドルサイズを最適化するのに便利です。

```Vue
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

## Direct Import
Nuxt の自動インポート機能を回避したい場合や回避が必要な場合は、`#components` から明示的にインポートこともできます。
```Vue
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>
<script setup>
  import { NuxtLink, LazyMountainsList } from '#components'
  const show = ref(false)
</script>
```