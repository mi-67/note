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
  - [3.3 部分型関係](#33-部分型関係)
    - [3.3.1 部分型とは](#331-部分型とは)
    - [3.3.2 プロパティの包含関係による部分型関係の発生](#332-プロパティの包含関係による部分型関係の発生)
  - [3.4 型引数を持つ型](#34-型引数を持つ型)
    - [3.4.3 部分型関係による型引数の制約](#343-部分型関係による型引数の制約)
  - [3.5 配列](#35-配列)
    - [3.5.1 配列リテラルで配列を作成する](#351-配列リテラルで配列を作成する)
    - [3.5.5 配列の機能を使う](#355-配列の機能を使う)
    - [3.5.6 for-of 文によるループ](#356-for-of-文によるループ)
    - [3.5.7 タプル型](#357-タプル型)
  - [3.6 分割代入](#36-分割代入)
    - [3.6.1 オブジェクトの分割代入(1) 基本的なパターン](#361-オブジェクトの分割代入1-基本的なパターン)
    - [3.6.2 オブジェクトの分割代入(2) ネストしたパターン](#362-オブジェクトの分割代入2-ネストしたパターン)
    - [3.6.4 分割代入のデフォルト値](#364-分割代入のデフォルト値)
    - [3.6.5 rest パターンでオブジェクトの残りを取得する](#365-rest-パターンでオブジェクトの残りを取得する)
- [4. TypeScript の関数](#4-typescript-の関数)
  - [4.1 関数の作り方](#41-関数の作り方)
    - [4.1.1 関数宣言で関数を作る](#411-関数宣言で関数を作る)
    - [4.1.3 関数式で関数を作る](#413-関数式で関数を作る)
    - [4.1.4 アロー関数で関数を作る](#414-アロー関数で関数を作る)
    - [4.1.5 アロー関数式の省略形](#415-アロー関数式の省略形)
    - [4.1.6 メソッド記法で関数を作る](#416-メソッド記法で関数を作る)
    - [4.1.7 可変長引数の宣言](#417-可変長引数の宣言)
    - [4.1.8 関数呼び出しにおけるスプレッド構文](#418-関数呼び出しにおけるスプレッド構文)
    - [4.1.9 オプショナル引数の宣言](#419-オプショナル引数の宣言)
    - [4.1.10 コールバック関数を使ってみる](#4110-コールバック関数を使ってみる)
  - [4.2 関数の型](#42-関数の型)
    - [4.2.1 関数型の記法](#421-関数型の記法)
    - [4.2.2 返り値の型注釈は省略可能](#422-返り値の型注釈は省略可能)
    - [4.2.3 返り値の型注釈は省略すべきか](#423-返り値の型注釈は省略すべきか)
    - [4.2.4 引数の型注釈が省略可能な場合](#424-引数の型注釈が省略可能な場合)
    - [4.2.5 コールシグネチャによる関数の表現](#425-コールシグネチャによる関数の表現)
  - [4.3 関数型の部分型関係](#43-関数型の部分型関係)
    - [4.3.1 返り値の型による部分型関係](#431-返り値の型による部分型関係)
    - [4.3.2 引数の型による部分型関数](#432-引数の型による部分型関数)
    - [4.3.3 引数の数による部分型関係](#433-引数の数による部分型関係)
  - [4.4 ジェネリック](#44-ジェネリック)
    - [4.4.1 関数の型引数とは](#441-関数の型引数とは)
    - [4.4.2 関数の型引数を宣言する方法](#442-関数の型引数を宣言する方法)
    - [4.4.3 関数の型引数は省略できる](#443-関数の型引数は省略できる)
    - [4.4.4 型引数を持つ関数型](#444-型引数を持つ関数型)
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

## 3.3 部分型関係
### 3.3.1 部分型とは
S 型が T 型の部分型である = T 型が S 型の部分型である

### 3.3.2 プロパティの包含関係による部分型関係の発生
型 S と 型 T がオブジェクト型だとして，次の条件を満たせば S が T の部分型となる
1. T が持つプロパティは全て S にも存在する
2. 条件1 の各プロパティについて，S におけるそのプロパティ型の部分型（または同じ型）である

## 3.4 型引数を持つ型
### 3.4.3 部分型関係による型引数の制約
type 文において型引数を宣言する時，extends という構文を使うことができる
- `型引数宣言 extends 型A` の形
- この型引数は常に型 A の部分型でなければならない
  ```ts
  type HasName = {
    name: string
  }

  type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent
    father: Parent
    child: Child
  }
  ```

## 3.5 配列
### 3.5.1 配列リテラルで配列を作成する
配列リテラルの中でも[スプレッド構文](#315-オブジェクトリテラル3-スプレッド構文)が利用可能
```ts
const arr1 = [4, 5, 6]
const arr2 = [1, 2, 3, ...arr1]

console.log(arr2) //[1, 2, 3, 4, 5, 6] が表示される
```
### 3.5.5 配列の機能を使う
- push メソッド
  - 配列の末尾に要素を追加する
- unshift メソッド
  - 配列の先頭に要素を追加する
- includes メソッド
  - 与えられた値が配列に含まれているかを真偽値で返す
- indexOf メソッド
  - 与えられた値が配列の何番目に存在しているかを返す（存在していなければ -1 を返す）
- slice メソッド
  - 配列の一部分をコピーした新たな配列を作って返す
- concat メソッド
  - 配列と別の配列をつなげてできる新たな配列を作って返す
- length プロパティ
  - 配列の要素数

[MDN Web Dock -Array](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 3.5.6 for-of 文によるループ
```ts
const arr = [1, 10, 100]

for(const elm of arr){
  console.log(elm)
}
```

### 3.5.7 タプル型
要素数が固定された配列型
- 普通の配列：要素数が何個でも構わない一方，全ての要素の型は同じ
- タプル型：要素数が固定されている代わりに，配列のそれぞれの要素に異なる型を与えることができる
```ts
let tuple:[string, number] = ["foo", 0]
tuple = ["aiueo", -555]

const str = tuple[0] // str は string 型
const num = tuple[1] // num は number 型

// Type tuple '[string, number]' of length '2' has no element at index '2'.
const nothing = tuple[2]
```

## 3.6 分割代入
### 3.6.1 オブジェクトの分割代入(1) 基本的なパターン
オブジェクトの分割代入の構文を用いることで，オブジェクトからプロパティを取得し，変数に代入するという操作を簡潔に記述できる
```ts
const {foo, bar} = obj

// 以下と同じ意味
const foo = obj.foo
const bar = obj.bar
```
- `{}` のなかに識別子をカンマで区切って並べる
  - この識別子は，取得したいオブジェクトのプロパティ名を指し示す役割と，それを入れる変数名を決める役割を併せ持っている
  - オブジェクトのプロパティの中身をプロパティ名と同名の変数に入れたい場合にしか使えない
- 分割代入で宣言された変数には型注釈がつけられない

### 3.6.2 オブジェクトの分割代入(2) ネストしたパターン
ネストしたオブジェクト
- オブジェクトのプロパティにさらにオブジェクトが入っているという構造
  ```ts
  const nested = {
    num: 123,
    obj: {
      foo: "hello",
      bar: "world"
    }
  }
  ```
- このようなオブジェクトに対してはパターンをネストさせることでネストの内側のプロパティを取得することができる
  ```ts
  const {num, obj:{foo}} = nested
  // obj:{foo} で，nested.obj に対して {foo} という分割代入を行ったのと同じになる

  console.log(num) //123 と表示される
  console.log(foo) // hello と表示される

### 3.6.3 配列の分割代入
```ts
const arr = [1, 2, 4, 8, 16, 32]

const [first, second, third] = arr
console.log(first) // 1
console.log(second) // 2
console.log(third) // 4

const [, foo, , bar, , baz] = arr
console.log(foo) // 2
console.log(bar) // 8
console.log(baz) // 32
```

### 3.6.4 分割代入のデフォルト値
デフォルト値は undefined のみに対して適用される
- null に対しては何も行わない
```ts
type Obj = {foo?: number}
const obj1: Obj = {}
const obj2: Obj = {foo: -1234}

const {foo = 500} = obj1 // foo には500が代入される
const {foo:bar = 500} = obj2 // bar には-1234が代入される
```
### 3.6.5 rest パターンでオブジェクトの残りを取得する
```ts
const obj = {
  foo: 123,
  bar: "string"
  baz: false
}

const {foo, ...restObj} = obj
console.log(foo) // 123 が表示される
console.log(restObj) // {bar: "string", baz: false} が表示される
```

# 4. TypeScript の関数
## 4.1 関数の作り方
### 4.1.1 関数宣言で関数を作る
関数を作る最もベーシックな方法：関数宣言（function declaration）
```ts
function 関数名(引数リスト):返り値の型 {
  関数の中身
}
```
```ts
function range(min: number, max: number): number[] {
  const result = []
  for(let i=min; i<=max; i++) {
    result.push(i)
  }
  return result
}

console.log(range(5, 10)) // [5, 6, 7, 8, 9, 10] と表示される
```

### 4.1.3 関数式で関数を作る
関数宣言と関数式（function expression）の大きな違い：それが文なのか式なのか
```ts
function (引数リスト):返り値の型 {
  関数の中身
}
```
```ts
type Human = {
  height: number
  weight: number
}
const calcBMI = function(human: Human):number {
  return human.weight / human.height ** 2
}

const uhyo: Human = {height:1.84, weight: 72}
console.log(calcBMI(uhyo))
```

### 4.1.4 アロー関数で関数を作る
アロー関数式（arrow function expression）
- 関数式（function関数式）に代わるもう一つの関数式
```ts
(引数リスト):返り値の型 => {中身}
```
```ts
type Human = {
  height: number
  weight: number
}
const calcBMI = ({height, weight}:Human):number => {
  return weight / height**2
}

const uhyo: Human = {height:1.84, weight:72}
console.log(calcBMI(uhyo))
```
アロー関数の方が function 関数式よりも後から導入されたため使い勝手がいい
- function 関数式よりも構文が完結
  - 特に function という長いキーワードを書かなくても良い
- [省略記法](#415-アロー関数式の省略形)
- [this の扱い](#542-アロー関数におけるthis)
 
### 4.1.5 アロー関数式の省略形
簡単な関数を定義するときに有用な構文
```ts:省略なし
(引数リスト):返り値の型 => {中身}
```
```ts:省略あり
(引数リスト):返り値の型 => 式
```
省略形では `=>` の右側に書けるのが式１つだけ
```ts
(引数リスト):返り値の型 => 式
//上式は以下と同値
(引数リスト):返り値の型 => {return 式}
```
```ts
// 普通の書き方
const calcBMI = ({height, weight}:Human):number =>{
  return weight / height ** 2
}

// 省略形
const calcBMI = ({height, weight}:Human):number =>　weight / height ** 2
```
注意点
- 返り値の式としてオブジェクトリテラルを使用するときは `()` で囲む必要がある
  - `()` で囲まないと，`=>` の右の `{}` がオブジェクトリテラルではなく省略形ではないアロー関数を囲む `{}` であるとみなされてしまう
  ```ts
  type Human = {
    height: number
    weight: number
  }
  type ReturnObj = {
    bmi: number
  }

  // 正しい書き方
  const calcBMIObject = ({height, weight}:Human):ReturnObj => ({
    bmi: weight / height ** 2
  })

  // コンパイルエラーになる書き方
  const calcBMIObject = ({height, weight}:Human):ReturnObj => {
    bmi: weight / height ** 2
  }
  ```

### 4.1.6 メソッド記法で関数を作る
```ts
プロパティ名(引数リスト):返り値の型{
  中身
}
```
```ts
const obj = {
  // メソッド記法
  double(num: number):number {
    return num * 2
  },
  // 通常の記法+アロー関数
  double2:(num: number):number => num * 2
}
```

### 4.1.7 可変長引数の宣言
可変長引数：関数が任意の数の引数を受け取れるようにすること
- rest 構文を用いる
  - `...引数名:型` という形式
  - 関数宣言の引数リストの最後で1回だけ使用できる
  - rest 引数の型注釈は必ず配列型（もしくはタプル型）
  ```ts
  const sum = (...args: number[]) => {
    let result = 0
    for(const num of args){
      result += num
    }
    return result
  }

  console.log(sum(1, 10, 100))
  console.log(sum(123, 456))
  ```

### 4.1.8 関数呼び出しにおけるスプレッド構文
関数呼び出しの引数として `...式` という構文が使用できる
```ts
const sum = (...args: number[]):number => {
  let result = 0
  for(const num of args) {
    result += num
  }
  return result
}

const nums = [1, 2, 3, 4, 5]
console.log(sum(...nums))
```

### 4.1.9 オプショナル引数の宣言
オプショナルな引数 = 渡しても渡さなくてもどっちでもいい引数
- デフォルト値を指定しない場合
  - `引数名?:型`　という構文を用いる
  ```ts
  const toLowerOrUpper = (str: string, upper?:boolean):string => {
    if (upper) {
      return str.toUpperCase()
    } else {
      return str.toLowerCase()
    }
  }

  console.log(toLowerOrUpper("Hello")) // hello と表示される
  console.log(toLowerOrUpper("Hello", false)) // hello と表示される
  console.log(toLowerOrUpper("Hello", true)) // HELLO と表示される
  ```
- デフォルト値を指定する場合
  - `変数名:型 = 式`　という構文を用いる
  ```ts
  const toLowerOrUpper = (str: string, upper:boolean = false):string => {
    if (upper) {
      return str.toUpperCase()
    } else {
      return str.toLowerCase()
    }
  }

  console.log(toLowerOrUpper("Hello")) // hello と表示される
  console.log(toLowerOrUpper("Hello", false)) // hello と表示される
  console.log(toLowerOrUpper("Hello", true)) // HELLO と表示される
  ```
 
### 4.1.10 コールバック関数を使ってみる
コールバック関数
- 関数の引数として関数を渡すことを指す
- 引数として渡される関数 = コールバック関数

よくコールバック関数のお世話になるのは配列のメソッドを使うとき
- 配列はコールバック関数を受け取るメソッドをいくつも持っている
  - 代表例: map関数
    - 渡されたコールバック関数を配列の各要素に適応した結果からなる新しい配列を返す
    ```ts
    type User = {
      name: string
      age: number
    }
    const getName = (u:User):string => u.name

    const users:User[] = {
      {name: "uhyo", age: 26},
      {name: "John Smith", age: 15}
    }
    // users.map は users の各要素に getName を適用することで作られた新しい配列を返す
    const names = users.map(getName) //getName はコールバック関数
    console.log(names) // ["uhyo", "John Smith"] と表示される

    // こう書いた方がプログラムの見通しが良い
    const names2 = users.map((u: User):string => u.name)
    ```
  - その他の例
    ```ts
    // 20歳以上のユーザだけの配列
    const adultUsers = users.filter((user:User) => user.age >= 20)

    // 全てのユーザが20歳以上なら true
    const allAdult = users.every((user: User) => user.age >= 20)

    // 60歳以上のユーザが１人でもいれば true
    const seniorExists = users.some((user: User) => user.age >=60)

    // 名前が John で始まるユーザを探して返す
    const john = users.find((user: User) => user.name.startWith("John"))
    ```

## 4.2 関数の型
### 4.2.1 関数型の記法
```ts
(引数名:型) => 返り値の型
```
型チェックに影響しない引数名の情報がわざわざ型に書かれるのは，エディタの支援機能を拡充させるためである

### 4.2.2 返り値の型注釈は省略可能
関数の返り値の型は省略可能
- 明記しなかった場合は型推論によって決められる

### 4.2.3 返り値の型注釈は省略すべきか
明示するメリット
- 関数の中身が長い場合は関数の説明と型だけ見れる状況になる（中身を読まなくてもある程度の情報を得られる）
- 関数内部で返り値の型に対して型チェックを働かせられる

明示するデメリット
- 書く量が多くなる
  - 特に非常に短いコールバック関数など，中身を見ればするわかるときは型の情報は不要に感じられる

関数の返り値の型を省略するのは「関数の中身が真実である」と思う場合  
関数の返り値を書くのは「この関数はこの型の値を返すべきである」という場合

### 4.2.4 引数の型注釈が省略可能な場合
"逆方向の型推論"が働く場合，引数の型を省略可能
- 通常の型推論
  - 式からその式自体の型が推論される
    ```ts
    const xRepeat = (arg: number): string => "x".repeat(arg)
    ```
- 逆方向の型推論(contextual typing)
  - 式の型が先にわかっている場合に，それを元に式の内部に対して推論が働く
    ```ts
    type F = (arg: number) => string
    
    /* 
    この関数式は引数の型を書かなくてもOK
    この関数式が F 型の変数に代入されるということは，この関数式は F 型を持っていなければいけない
    今 F は number 型の引数を受け取る関数の型だったので，関数式の引数 num は number 型であると推測される
    */
    const xRepeat: F = (num) => "x".repeat(num)
    ```
  - 関数引数の場合
    ```ts
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    /*
    nums.filter は (value: number) => unknown 型のコールバック関数として引数を受け取る
    つまり，コールバック関数 (x) => x % 3 === 0 は (value: number) => unknown 型でなければいけない
    */
    const arr2 = nums.filter((x) => x % 3 === 0)
    console.log(arr2) //[3, 6, 9] と表示される
    ```
    ちなみに，型注釈を書かなくて良い + アロー関数の引数が１つの時は引数を囲む `()` を省略することが可能
    ```ts
    const arr2 = nums.filter(x => x % 3 === 0)
    ```

### 4.2.5 コールシグネチャによる関数の表現
コールシグネチャ
- オブジェクト型の中で使用できる構文
- ```(引数リスト)：返り値の型``` という形式

次のコードで定義される MyFunc 型は, boolean 型のプロパティ isUsed を持つオブジェクトであると同時に， number 型を受け取る関数でもあるような値の型
```ts
// プロパティ定義とコールシグネチャが同居する型
type MyFunc = {
  isUsed?: boolean
  (arg: number): void
}

const double: MyFunc = (arg: number) => {
  console.log(arg * 2)
}

// double は isUsed プロパティを持つ
double.isUsed = true
console.log(double.isUsed)

// double は関数として呼び出せる
double(100)
```

## 4.3 関数型の部分型関係
### 4.3.1 返り値の型による部分型関係
S が T の部分型
- 同じ引数リストに対して `(引数リスト) => S` という関数型は `(引数リスト) => T` という関数型の部分型
  ```ts
  type HasName = {
    name: string
  }
  type HasNameAndAge = {
    name: string
    age: number
  }

  const fromAge = (age: number):HasNameAndAge =>({
    name: "John Smith"
    age
  })
  const f: (age: number) => HasName = fromAge
  const obj: HasName = f(100)
  ```
- どんな型を返す関数型も（同じ引数を受け取って）void 型を返す関数型の部分型として扱われる

### 4.3.2 引数の型による部分型関数
型 S が型 T の部分型であるとき，「 T を引数に受け取る関数」の型は「 S を引数に受け取る関数」の型の部分型となる
- つまり，「 T を引数に受け取る関数」は「 S を引数に受け取る関数」としても扱える
  ```ts
  type HasName = {
    name: string
  }
  type HasNameAndAge = {
    name: string
    age: number
  }

  const showName = (obj: HasName) => {
    console.log(obj.name)
  }
  const g: (obj: HasNameAndAge) => void = showName

  g({
    name: "uhyo",
    age: 26
  })
  ```
- 関数型の返り値の型は関数型の**共変**（covariant）の位置にある
- 関数型の引数の型は**反変**（contravariant）の位置にある
  - 同じような形（どちらも関数型で引数の数が同じなど）の型 F と型 G があるとき，型 F が型 G の部分型となるためには，F と G を構成するそれぞれの型に対して，共編の位置にあるものについては順方向の部分型関係が成立し，反変の位置にあるものについては逆方向の部分型関係が成立している必要がある

### 4.3.3 引数の数による部分型関係
```ts
type UnaryFunc = (arg: number) => number
type BinaryFunc = (left: number, right: number) => number

const double: UnaryFunc = arg => arg * 2
const add: BinaryFunc = (left, right) => left + right

// UnaryFunc を BinaryFunc として扱うことができる
const bin: BinaryFunc = double
console.log(bin(10, 100)) // 20
```

## 4.4 ジェネリック
ジェネリクス
- 型引数を受け取る関数を作る機能
### 4.4.1 関数の型引数とは
型引数を持つ関数（**ジェネリック関数**）を宣言する際には，関数名のあとに<型引数リスト>という構文を付け足すのが基本
- 関数呼び出しは `関数<型引数たち>(引数たち)`
```ts
function repeat<T>(element: T, length: number): T[]{
  const result: T[] = []
  for(let i = 0; i < length; i++) {
    result.push(element)
  }
  return result
}

console.log(repeat<string>("a", 5))
console.log(repeat<number>(123, 3))
```

### 4.4.2 関数の型引数を宣言する方法
function 関数式
```ts
const repeat = function<T>(element: T, length: number): T[]{
  const result: T[] = []
  for(let i = 0; i < length; i++){
    result.push(element)
  }
  return result
}
```
アロー関数式
```ts
const repeat = <T>(element: T, length: number): T[] => {
  const result: T[] = []
  for (let i = 0; i < length; i++) {
    result.push(element)
  }
  return result
}
```
メソッド記法の場合もメソッド名のあと・引数リストの前に置く
```ts
const utils = {
  repeat<T>(element: T, length: number): T[] {
    const result: T[] = []
    for (let i = 0; i < length; i++){
      result.push(element)
    }
    return result
  }
}
```
型引数リストが複数の場合
```ts
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right]
const p = pair<string, number>("uhyo", 26)
```

### 4.4.3 関数の型引数は省略できる
```ts
function repeat<T>(element: T, length: number): T[] {
  const result: T[] = []
  for (let i = 0; i < length; i++) {
    result.push(element)
  }
  return result
}

// result は string[] 型となる
// 省略しない場合は，repeat<string>("a", 5) となる
const result = repeat("a", 5)
```
### 4.4.4 型引数を持つ関数型
```ts
// この repeat 関数の型は <T>(element: T, length: number) => T[]
const repeat = function<T>(element: T, length: number): T[] {
  const result: T[] = []
  for (let i = 0; i < length; i++) {
    result.push(element)
  }
  return result
}
```