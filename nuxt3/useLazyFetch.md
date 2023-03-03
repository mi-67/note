# `useLazyFetch`
`useLazyFetch` は `lazy` オプションを `true` に設定することでハンドラが解決される前にナビゲーションをトリガーする `useFetch` 周りのラッパーを提供します。

## Description
デフォルトでは、`useFetch` は非同期関数が解決されるまでナビゲーションをブロックします。

> `useLazyFetch` は　`useFetch` と同じシグネチャを持ちます。

詳細は[こちら](https://nuxt.com/docs/api/composables/use-fetch)

## Example
```Vue
<template>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <div v-for="post in posts">
      <!-- do something -->
    </div>
  </div>
</template>
<script setup>
/* ナビゲーションはフェッチが完了する前に発生します。
   保留状態やエラー状態をコンポーネントのテンプレート内で直接処理します。
*/
const { pending, data: posts } = useLazyFetch('/api/posts')
watch(posts, (newPosts) => {
  // ポストは null で始まるので、すぐにその内容にアクセスすることはできませんが、
  // 見ることはできます。
})
</script>
```

`useLazyFetch` はコンパイラによって変換される予約関数名なので、自分で作った関数に `useLazyFetch` と名付けるべきではありません。

詳細は[こちら](https://nuxt.com/docs/getting-started/data-fetching#uselazyfetch)