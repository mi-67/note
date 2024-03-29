# `useNuxtData`
`useNuxtData` は `useAsyncData`、`useLazyAsyncData`、`useFetch`、`useLazyFetch` の現在のキャッシュ値へのアクセスを明示的に提供されたキーとともに提供します。

## Type
```ts
useNuxtData<DataT = any> (key: string): { data: Ref<DataT | null> }
```

## Examples
### Show stale data while fetching in the background
下の例では、最新のデータをサーバーから取得する間、キャッシュされたデータをプレースホルダーとして使用する方法を示しています。
```ts
// 'posts' キーを使用してあとから同じ値にアクセスできます。
const { data } = await useFetch('/api/posts', { key: 'posts' })
```
```ts
// archive.vue の useFetch のキャッシュされた値にアクセスします。
const { data: posts } = useNuxtData('posts')

const { data } = await useFetch(`/api/posts/${postId}`, {
  key: `post-${postId}`,
  default: () => {
    // キャッシュから個々のポストを見つけ、デフォルト値として設定します。
    return posts.value.find(post => post.id === postId)
  }
})
```
### Optimistic Updates
キャッシュを活用することで、変異後の UI を、データがバックグラウンドで無効化されている間に更新することができます。

```ts
// 'todos' キーを使用してあとから同じ値にアクセスできます。
const { data } = await useFetch('/api/posts', { key: 'todos' })
```
```ts
const newTodo = ref('')
const previousTodos = ref([])

// todos.vue の useFetch のキャッシュされた値にアクセスします。
const { data: todos } = useNuxtData('todos')

const { data } = await useFetch('/api/addTodo', {
  key: 'addTodo',
  method: 'post',
  body: {
    todo: newTodo.value
  },
  onRequest() {
    previousTodos.value = todos.value // 取得に失敗した場合に復元するために以前にキャッシュされた値を保存します。
    todos.value.push(newTodo.value) // 楽天的に todos を更新します。
  },
  onRequestError() {
    todos.value = previousTodos.value // リクエストに失敗した場合、データをロールバックします。
  },
  async onResponse() {
    await refreshNuxtData('todos') // リクエストが成功した場合、バックグラウンドで todos を無効化します。
  }
})
```