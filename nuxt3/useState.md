# `useState`
```ts
useState<T>(init?: () => T | Ref<T>): Ref<T>
useState<T>(key: string, init?: () => T | Ref<T>): Ref<T>
```
- **key**：リクエスト間で適切に重複排除されることを保証する一意のキー。キーを提供しない場合、`useState` のインスタンスのファイルと行番号で一意のキーが生成されます。
- **init**：未使用時の状態の初期値を提供する関数。この関数は `Ref` を返すこともできる。
- **T**：（TypeScript のみ）状態の型を指定します。

`useState` 内のデータはJSONにシリアライズされるので、クラス、関数、シンボルなどシリアライズできないものが含まれていないことが重要です。

`useState` はコンパイラによって変換される予約関数名なので、独自の関数に `useState` という名前をつけてはいけません。

詳細は[こちら](https://nuxt.com/docs/getting-started/state-management)