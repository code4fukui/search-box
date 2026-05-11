# search-box

検索ボックスタグ

シンプルでカスタマイズ可能な検索ボックスのWebコンポーネント。

## デモ

https://code4fukui.github.io/search-box/

デモでは、灰色の枠線と右側に「検索」というテキストを含むボタンを持つ、角丸の検索ボックスを表示しています。

## 使い方

1.  コンポーネントとスタイルシートをHTMLファイルにインポートします。

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Search Box Example</title>
      <script type="module" src="https://code4fukui.github.io/search-box/search-box.js"></script>
      <style>
        @import url(https://code4fukui.github.io/search-box/style.css);
      </style>
    </head>
    <body>
      
      <h1>My Search Page</h1>
      <search-box id="search"></search-box>
      <p>Result: <span id="res"></span></p>

      <script type="module">
        const searchEl = document.getElementById("search");
        const resEl = document.getElementById("res");
        
        searchEl.onchange = () => {
          resEl.textContent = searchEl.value;
        };
      </script>

    </body>
    </html>
    ```

2.  HTML内で`<search-box>`タグを使用します。

## カスタマイズ

### 色

CSSカスタムプロパティの `--color` を上書きすることで、枠線とボタンの色を変更できます。

```css
search-box {
  --color: #007bff;
}
```

### ボタンのコンテンツ（アイコンの使用）

コンポーネントのスタイルシートにはFontAwesome 5が含まれており、デフォルトのボタンテキスト（「検索」）をアイコンに置き換えることができます。これを行うには、JavaScriptでボタンのコンテンツを変更する必要があります。

```javascript
// search-box要素を取得
const searchBox = document.querySelector('search-box');

// Shadow DOM内、またはShadow DOMを使用していない場合は直接の子要素からボタンを検索
// ソースコードに基づくと、直接の子要素となります。
const button = searchBox.querySelector('button');

// innerHTMLにFontAwesomeの検索アイコンのUnicodeを設定
button.innerHTML = '&#xf002;';
```

## API

### プロパティ

*   `.value`
    *   **型**: `string`
    *   **説明**: 入力フィールドの現在のテキスト値を取得または設定します。

### イベント

*   `onchange`
    *   **説明**: 入力要素の値が変更されたときに発火します。

## クレジット

App: [福野泰介の一日一創](https://fukuno.jig.jp/3357) ([search-box tag - src on GitHub](https://github.com/code4fukui/search-box))

## ライセンス

MIT License
