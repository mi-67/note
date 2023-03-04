# `useRequestEvent`
ページ、コンポーネント、プラグイン内で、受信したリクエストにアクセスするために`useRequestEvent` が使用できます。

```ts
// 基礎となるリクエストイベントを取得します。
const event = useRequestEvent()

// URL を取得する
const url = event.node.req.url
```

ブラウザでは、`useRequestEvent` は `undefined` を返します。