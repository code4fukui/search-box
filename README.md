# search-box

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

検索ボックスタグ

A simple, customizable Web Component for a search box.

## Demo

https://code4fukui.github.io/search-box/

The demo shows a rounded search box with a gray border and a button on the right containing the Japanese text for "Search" (検索).

## Usage

1.  Import the component and its stylesheet into your HTML file.

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

2.  Use the `<search-box>` tag in your HTML.

## Customization

### Color

You can change the border and button color by overriding the `--color` CSS custom property.

```css
search-box {
  --color: #007bff;
}
```

### Button Content (Using an Icon)

The component's stylesheet includes FontAwesome 5, allowing you to replace the default button text ("検索") with an icon. To do this, you'll need to modify the button's content with JavaScript.

```javascript
// Get the search-box element
const searchBox = document.querySelector('search-box');

// Find the button inside its shadow DOM or directly if not using shadow DOM
// Based on the source, it's a direct child.
const button = searchBox.querySelector('button');

// Set the innerHTML to the FontAwesome search icon unicode
button.innerHTML = '&#xf002;';
```

## API

### Properties

*   `.value`
    *   **Type**: `string`
    *   **Description**: Gets or sets the current text value of the input field.

### Events

*   `onchange`
    *   **Description**: Fires when the value of the input element is changed.

## Attribution

App: [福野泰介の一日一創](https://fukuno.jig.jp/3357) ([search-box tag - src on GitHub](https://github.com/code4fukui/search-box))

## License

MIT License