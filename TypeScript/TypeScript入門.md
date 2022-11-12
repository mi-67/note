# 目次 <!-- omit in toc -->
- [1. イントロダクション](#1-イントロダクション)
  - [1.1 TypeScript とは](#11-typescript-とは)
    - [1.1.1 JavaScript に対する"静的型付け"](#111-javascript-に対する静的型付け)
    - [1.1.2 高い表現力を持つ型システム](#112-高い表現力を持つ型システム)
    - [1.1.3 静的型付けのメリット (1) 型](#113-静的型付けのメリット-1-型)
    - [1.1.4 静的型付けのメリット (2) ドキュメント化と入力補完](#114-静的型付けのメリット-2-ドキュメント化と入力補完)
# 1. イントロダクション
## 1.1 TypeScript とは
TypeScript
- Microsoft によって開発されているプログラミング言語
- AltJs の一種
  - AltJs: JavaScript の代替となる言語を指す言葉
- 用途は JavaScript と同じで，JavaScript が使われる場面では代わりに TypeScript を使用することが可能
- JavaScript と異なり，静的型システム（static type system）を備えている

### 1.1.1 JavaScript に対する"静的型付け"
TypeScript = JavaScript + 静的型付け
- つまり JavaScript という既存言語に静的型付けという要素を足したもの

静的型付け
- 静的型システムを備えていることを指す
  - 変数や式が**型**を持っているということ
    ```ts
    const str: string = "foobar";
    ```
    - 変数 `str` は `string` 型を持っているという**型注釈**（type annotation）が書かれている
  - **型推論**（type inference）の機能も充実
    - 型注釈を書かなくても TypeScript が補って変数など型を決めてくれる機能

### 1.1.2 高い表現力を持つ型システム
静的型付けを備えたプログラミング言語は多々あるが，その中でも TypeScript の型システムは他に類を見ない**高い表現力**を持っている
- 型で色々なロジックを表現することができる
  
### 1.1.3 静的型付けのメリット (1) 型
型安全性
- ある種の間違ったプログラムをコンパイルが型チェックにより検出してくれる仕組み
  - 構文エラーと型エラーの2種類が主
    - コンパイルエラーが検出されるのが静的型付けの恩恵
      ```ts
      function repeatHello(count: number):
      string {
        return "hello".repeat(count);
      }

      // ここで型エラーが発生
      // Argument of type 'string' is not assignable to parameter of 'number'.
      console.log(repeatHello("wow"))
      ```

### 1.1.4 静的型付けのメリット (2) ドキュメント化と入力補完
ドキュメント化
- 型の情報がソースコードに書かれることになり，プログラムを読解する助けになる
- 適切な関数名やコメントと組み合わせることで，プログラムの読解時に関数の中身まで読む必要がなくなる

