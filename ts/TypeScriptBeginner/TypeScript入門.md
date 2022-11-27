# 目次 <!-- omit in toc -->
- [1. イントロダクション](#1-イントロダクション)
  - [1.1 TypeScript とは](#11-typescript-とは)
    - [1.1.1 JavaScript に対する"静的型付け"](#111-javascript-に対する静的型付け)
    - [1.1.2 高い表現力を持つ型システム](#112-高い表現力を持つ型システム)
    - [1.1.3 静的型付けのメリット (1) 型](#113-静的型付けのメリット-1-型)
    - [1.1.4 静的型付けのメリット (2) ドキュメント化と入力補完](#114-静的型付けのメリット-2-ドキュメント化と入力補完)
  - [1.2 TypeScript と JavaScript の関係](#12-typescript-と-javascript-の関係)
    - [1.2.1 TypeScript コンパイラの役割 (1) 型チェック](#121-typescript-コンパイラの役割-1-型チェック)
    - [1.2.2 TypeScript コンパイラの役割 (2) トランスパイル](#122-typescript-コンパイラの役割-2-トランスパイル)
    - [1.2.3 TypeScript と ECMAScript の関係](#123-typescript-と-ecmascript-の関係)
- [2. 基本的な文法・基本的な型](#2-基本的な文法基本的な型)
  - [2.3 プリミティブ型](#23-プリミティブ型)
    - [2.3.1 プリミティブとは何か](#231-プリミティブとは何か)
    - [2.3.5 文字列型と3種類の文字列リテラル](#235-文字列型と3種類の文字列リテラル)
- [3. オブジェクトの基本とオブジェクトの型](#3-オブジェクトの基本とオブジェクトの型)
  - [3.1 オブジェクトとは](#31-オブジェクトとは)
    - [3.1.1 オブジェクトは"連想配列"である](#311-オブジェクトは連想配列である)
    - [3.1.2 オブジェクトリテラル(1) 基本的な構文](#312-オブジェクトリテラル1-基本的な構文)
    - [3.1.5 オブジェクトリテラル(3) スプレッド構文](#315-オブジェクトリテラル3-スプレッド構文)
    - [3.1.6 オブジェクトはいつ"同じ"なのか](#316-オブジェクトはいつ同じなのか)
  - [3.2 オブジェクトの型](#32-オブジェクトの型)
    - [3.2.3 type 文で型に別名をつける](#323-type-文で型に別名をつける)
    - [3.2.4 interface 宣言でオブジェクト型を宣言する](#324-interface-宣言でオブジェクト型を宣言する)
    - [3.2.5 任意のプロパティ名を許容する型（インデックスシグネチャ）](#325-任意のプロパティ名を許容する型インデックスシグネチャ)
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
      function repeatHello(count: number): string {
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

## 1.2 TypeScript と JavaScript の関係
- JavaScript 開発をより便利に行うためのツールが TypeScript
- JavaScript 開発に型安全性を加えてスケーラブルなものにすることが TypeScript のゴール

### 1.2.1 TypeScript コンパイラの役割 (1) 型チェック
型チェック
- プログラムから矛盾を見つけ出す作業
  - TypeScript コンパイラはこの作業を自動的に行い，矛盾を見つけたらコンパイルエラーを出力
- 矛盾を探す材料 → 型情報
  - TypeScript プログラムでは**型注釈**を通して TypeScript コンパイラに情報を提供
- 型チェックは静的なチェック
  - 実際にプログラムを実行しなくても行える
  - 一方で，「テスト」（ユニットテスト，インテグレーションテストなど）は動的なチェック
    - 静的なチェックがあっても依然テストは必要であるが，静的なチェックができるものについてはテストではなく静的チェックで行うべき
- TypeScript プログラムは**ランタイムの挙動が型情報に依存しない**
  - TypeScript が活きるのはあくまでコンパイル時で，プログラムが実行されるとき（ランタイム）ではない
  - うまく動かない例
    ```ts
    function double(value: number) {
      console.log(value * 2);
    }
    function double(value: string) {
      console.log(value.repeat(2));
    }

    double(123);
    double("hello");
    ```
    - プログラミング言語によってはこのように同じ名前でシグネチャ（関数の引数の型と返り値の型を合わせた呼称）が異なる関数を複数定義できるものもある　→Java など
      - 関数を呼び出す際に引数の型によってどの宣言の関数が呼び出されるかがコンパイル時に決定
    - TypeScript では，`Duplicate function implementation.` というコンパイルエラーが発生
      - 異なる関数を複数定義できる機能があると，`double(引数)` という関数呼び出しの意味が引数の方によって変わってしまう
        - 「**ランタイムの挙動が型情報に依存しない**」という原則に反する
  
  - 関数 `double` は引数が数値でも文字列でも呼び出せるようにしたい場合
    ```ts
    function double(value: string|number) {
      if(typeof value === "number") {
        console.log(value * 2);
      }else{
        console.log(value.repeat(2));
      }
    }

    double(123);
    double("hello");
    ```

### 1.2.2 TypeScript コンパイラの役割 (2) トランスパイル
トランスパイル
- TypeScript ソースコードを JavaScript ソースコードに変換すること
- 2段階で成り立っている
  - 第1段階：型注釈を取り除く
    - トランスパイル前（TypeScript）
      ```ts
      function repeatHello(count: number): string {
        return "hello".repeat(count);
      }
      ```
    - トランスパイル後（JavaScript）
      ```js
      function repeatHello(count) {
        return "hello".repeat(count);
      }
      ```
  - 第2段階：新しい構文を古い構文に変換する
    - JavaScript はバージョンアップされることがあり，新しい構文が追加される
      - TypeScript も JavaScript のバージョンアップに追随して使用可能になる
    - 新しい構文を使用する際に問題となるのは，古い実行環境への対応
      - 新しい構文に対応していない
    - トランスパイルの段階で，新しい構文を古い構文に変換することで，新しい構文を使ってプログラムを書きながら古い環境にも対応することが可能になる
    - 新しい構文（ES2015 のクラス構文）を古い構文（ES5）に変換する例
      ```ts
      // 変換前
      class Human {
        greet() {
          console.log("Hello");
        }
      }

      // 変換後
      var Human = /** @class */(function () {
        function Human() {
        }
        Human.prototype.greet = function() {
          console.log("Hello");
        };
        return Human;
      }());
      ```

### 1.2.3 TypeScript と ECMAScript の関係
ECMAScript
- JavaScript のもう一つの名前
  - 現在では主に言語仕様の文脈で ECMAScript と呼ぶのが主流
- JavaScript あるいは ECMAScript は **ECMAScript 仕様書**という文書により言語仕様が定義
- 新しい ECMAScript が登場して JavaScript に機能が追加された場合は，TypeScript にもその機能が追加される
  - ECMAScript に追加される機能は，**プロポーザル**という単位で管理
    - 1つの問題領域に対する新機能が1つのプロポーザル
      - プロポーザルはその進捗状況に応じて1から4のステージが与えられている
        - ステージ4：プロポーザルが完成し，ECMAScript 仕様への採用が内定
  - プロポーザルのステージが３に到達することが TypeScript に追加される条件
    - TypeScript ではそのプロポーザルが ECMAScript に正式採用される（ステージ4になる）のを待たずに機能をサポートする

# 2. 基本的な文法・基本的な型
## 2.3 プリミティブ型
### 2.3.1 プリミティブとは何か
TypeScript プログラムにおける基本的な値
- 文字列
- 数値
- 真偽値
- BigInt
- null
- undefined
- シンボル

### 2.3.5 文字列型と3種類の文字列リテラル
文字列リテラルには2種類の書き方がある
- どちらでも機能上違いはないが，統一したほうが良い
  - ダブルクォートを使用
    ```ts
    "Hello, world!" 
    ```
  - シングルクォートを使用
    ```ts
    'Hello, world!'
    ```
テンプレートリテラル
- バッククォートで囲む文字リテラル
  ```ts
  const str1: string = "Hello";
  const str2: string = "world!"

  // "Hello, world!" と表示される
  console.log(`${str1},${str2}`);
  ```
  ```ts
  // "123 + 456 = 579" と表示される
  console.log(`123 + 456 = ${123 + 456}`);
  ```

# 3. オブジェクトの基本とオブジェクトの型
## 3.1 オブジェクトとは
### 3.1.1 オブジェクトは"連想配列"である
- TypeScript のオブジェクト = 一言で言えば"連想配列"
  - オブジェクト：いくつかの値をまとめたデータ
    ```ts
    const obj = {
      foo: 123,
      var: "Hello, world!"
    }
    ```
### 3.1.2 オブジェクトリテラル(1) 基本的な構文
オブジェクトリテラルにはよく使用される省略記法がある
```ts
const name = input ? input : "名無し"
const user = {
  name: name,
  age: 20
}
```
上記のように，`プロパティ名: 変数名` という形の場合で，かつプロパティ名と変数名が同じである場合，以下のように省略できる
```ts
const name = input ? input : "名無し"
const user = {
  name,
  age: 20
}
```

### 3.1.5 オブジェクトリテラル(3) スプレッド構文
オブジェクトリテラル中ではスプレッド構文（spread syntax）と呼ばれる構文を使用できる
- これを使用すると，オブジェクトの作成時にプロパティを別のオブジェクトにコピーできる
  ```ts
  const obj1 = {
    bar: 456,
    baz: 789
  }
  const obj2 = {
    foo: 123,
    ...obj1 // スプレッド構文
  }

  // obj2 は {foo:123, bar: 456, baz: 789} となる
  console.log(obj2)
  ```
  ```ts
  const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789
  }
  const obj2 = {
    ...obj1 // スプレッド構文
    foo: −9999,　// foo は -9999 に上書きされる
  }

  // obj2 は {foo:123, bar: 456, baz: 789} となる
  console.log(obj2)
  ```

### 3.1.6 オブジェクトはいつ"同じ"なのか
明示的にコピーしない限り，オブジェクトは同じである
- オブジェクトのコピー
  - スプレッド構文を使う
  - 愚直に全て書く

## 3.2 オブジェクトの型
### 3.2.3 type 文で型に別名をつける
type 文：型名を宣言する文
- 既にある型に別名をつけることができる
```ts
type FooBarObj = {
  foo: number
  bar: string
}
const obj: FooBarObj = {
  foo: 123,
  bar: "Hello, world!"
}
```
```ts
type UserId = string
const id: UserId = "id-1"
```

### 3.2.4 interface 宣言でオブジェクト型を宣言する
interface 宣言：型名を新規作成する別の方法
- type 文では任意の型に対して別名で宣言できたが，interface 宣言で扱えるのはオブジェクト型のみ
```ts
interface FooBarObj {
  foo: number
  bar: string
}
const obj: FooBarObj = {
  foo: 0,
  bar: "string"
}
```

### 3.2.5 任意のプロパティ名を許容する型（インデックスシグネチャ）
プロパティ名が動的に決まる状況で用いられる
```ts
type PriceData = {
  [key: string]: number
}

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500
}

// これはOK
data.chicken = 250

// これはコンパイルエラー
// Type "foo" is not assignable to type "number"
data.bento2 = "foo"
```
