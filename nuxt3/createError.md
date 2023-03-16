# `createError`
追加のメタデータを持つエラーオブジェクトを作成するためにこの関数を使用できます。アプリの Vue と Nitro の両方の部分で使用可能で、エラーが投げられることを意味しています。

**Parameters**：
- err: {cause, data, message, name, stack, statusCode, statusMessage, fatal}

## Throwing Errors in Your Vue App
`createError` で作成されたエラーを投げる場合
- サーバーサイドでは全画面のエラーページをトリガーし、`clearError` で消すことができます。
- クライアントサイドでは、致命的ではないエラーを投げ、処理することができます。全画面のエラーページをトリガーする必要がある場合、`fatal: true` を設定することで対応できます。

### Example
```Vue
<script setup>
const route = useRoute()
const { data } = await useFetch(`/api/movies/${route.params.slug}`)
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>
```

## Throwing Errors in API Routes
サーバー API ルートでエラー処理をトリガーするために `createError` を使用します。

### Example
```ts
export default eventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
})
```
詳細は[こちら](https://nuxt.com/docs/getting-started/error-handling)