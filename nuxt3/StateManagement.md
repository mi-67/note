# State Management
Nuxt は コンポーネント間でリアクティブで SSR に適した共有状態を作成するために、`useState` コンポーザブルを提供します。

`useState` は SSR に適した `ref` の置き換えです。その値はサーバーサイドレンダリングの後（クライアント再度のハイドレーションの間）保存され、一意のキーを使って全てのコンポーネント間で共有されます。

詳細は[こちら](https://nuxt.com/docs/api/composables/use-state)

`useState` は `setup` の時あるいは `Lifecycle Hooks` 時だけで機能します。

`useState` 内のデータは JSON にシリアライズされるため、クラス、関数、シンボルなど、シリアライズできないものを含まないことが重要です。

## Best Practice
絶対に `<script setup>` や `setup()` 関数の外側で `const state = ref()` を定義しないでください。  
このような状態は、ウェブサイトを訪れる全てのユーザーで共有され、メモリリークにつながる可能性があります。

代わりに `const useX = () => useState('x')` を使用してください。

## Examples
### Basic Usage
この例では、コンポーネントローカルのカウンタステートを使用しています。`useState('counter')` を使用する他のコンポーネントは同じリアクティブステートを共有します。
```Vue
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>
```

[こちら](https://nuxt.com/docs/examples/composables/use-state)で実際の例を見たり編集したりできます。

詳細は[こちら](https://nuxt.com/docs/api/composables/use-state)

### Advanced
この例では、HTTP リクエストヘッダからユーザのデフォルトロケールを見つけ、それをロケール状態に保持するコンポーザブルを使用します。

[こちら](https://nuxt.com/docs/examples/other/locale)で実際の例を見たり編集したりできます。

## Shared State
自動インポートされるコンポーザブルを使うことで、グローバルに型安全な状態を定義し、アプリ全体でインポートすることができます。
```ts
export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
```
```Vue
<script setup>
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
</template>
```